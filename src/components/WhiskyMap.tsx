import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { whiskyRegions, distilleries } from '@/data/mockWhiskyData';

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function WhiskyMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredDistilleries = selectedRegion
    ? distilleries.filter(d => d.region === selectedRegion)
    : distilleries;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">苏格兰威士忌地图</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索苏格兰各地区的威士忌酿酒厂，了解不同产区的特色和历史。
            点击标记查看详细信息。
          </p>
        </div>

        {/* Region filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setSelectedRegion(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${!selectedRegion 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            全部地区
          </button>
          {Object.entries(whiskyRegions).map(([region, data]) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedRegion === region 
                  ? 'text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              style={{
                backgroundColor: selectedRegion === region ? data.color : undefined
              }}
            >
              {data.name}
            </button>
          ))}
        </div>

        {/* Map container */}
        <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[57.0, -4.0]}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Render region boundaries */}
            {Object.entries(whiskyRegions).map(([region, data]) => (
              <Rectangle
                key={region}
                bounds={data.bounds}
                pathOptions={{
                  color: data.color,
                  fillColor: data.color,
                  fillOpacity: selectedRegion === region ? 0.3 : 0.1,
                  weight: selectedRegion === region ? 2 : 1
                }}
              />
            ))}

            {/* Render distillery markers */}
            {filteredDistilleries.map(distillery => (
              <Marker
                key={distillery.id}
                position={distillery.location as [number, number]}
                icon={icon}
              >
                <Popup>
                  <div className="max-w-xs">
                    <h3 className="font-bold text-lg mb-2">
                      {distillery.name}
                      <span className="block text-sm font-normal text-gray-600">
                        {distillery.chineseName}
                      </span>
                    </h3>
                    <div className="mb-2">
                      <span
                        className="inline-block px-2 py-1 text-xs text-white rounded-full"
                        style={{ backgroundColor: whiskyRegions[distillery.region].color }}
                      >
                        {whiskyRegions[distillery.region].name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {distillery.description}
                    </p>
                    {distillery.image && (
                      <img
                        src={distillery.image}
                        alt={distillery.name}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                    )}
                    <div className="text-sm">
                      <p className="font-medium mb-1">代表产品：</p>
                      <ul className="list-disc list-inside mb-2">
                        {distillery.signature.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                      <p className="font-medium mb-1">品鉴笔记：</p>
                      <div className="flex flex-wrap gap-1">
                        {distillery.tastingNotes.map((note, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">威士忌产区</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(whiskyRegions).map(([region, data]) => (
              <div key={region} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: data.color }}
                />
                <span className="text-sm text-gray-600">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 