'use client';

import { 
  UserGroupIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeEuropeAfricaIcon,
  MapIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: GlobeEuropeAfricaIcon,
    title: '苏格兰特色',
    description: '深入了解苏格兰威士忌文化，探索各地区独特的酿造工艺和风味特点。'
  },
  {
    icon: UserGroupIcon,
    title: '社交互动',
    description: '加入本地威士忌爱好者社区，参与线下品鉴活动，分享品酒体验。'
  },
  {
    icon: StarIcon,
    title: '专业品鉴',
    description: '获取专业酒评人指导，提升品鉴能力，建立个人品酒档案。'
  },
  {
    icon: MapIcon,
    title: '产区探索',
    description: '通过互动地图探索苏格兰各威士忌产区，了解不同地区的特色。'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            探索 Corks 的独特功能
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            体验苏格兰威士忌文化，连接全球威士忌爱好者
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group animate-fadeIn bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeIn">
          <a
            href="#community"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105 transform shadow-lg"
          >
            探索社区
          </a>
        </div>
      </div>
    </section>
  );
} 