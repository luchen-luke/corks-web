import { useState, useEffect, useRef } from 'react';
import { whiskyRegions, distilleries } from '@/data/mockWhiskyData';
import { useLanguage } from '@/contexts/LanguageContext';

const ITEMS_PER_PAGE = 6; // 每页显示6个卡片

// 为不同产区生成渐变色背景
const getGradientByRegion = (region: string) => {
  const baseColor = whiskyRegions[region].color;
  return `linear-gradient(135deg, ${baseColor}22 0%, ${baseColor}44 100%)`;
};

// 生成随机装饰图案
const getDecorativePattern = (region: string) => {
  const color = whiskyRegions[region].color;
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full" style={{ backgroundColor: color }} />
      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full" style={{ backgroundColor: color }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45" 
        style={{ backgroundColor: color, opacity: 0.1 }} />
    </div>
  );
};

type WhiskyDistilleryCardsProps = {
  session: {
    user: {
      name: string;
      email: string;
    };
    expires: string;
  };
};

export default function WhiskyDistilleryCards({ session }: WhiskyDistilleryCardsProps) {
  const { t, language } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const filteredDistilleries = selectedRegion
    ? distilleries.filter(d => d.region === selectedRegion)
    : distilleries;

  const visibleDistilleries = filteredDistilleries.slice(0, visibleItems);
  const hasMore = visibleItems < filteredDistilleries.length;

  useEffect(() => {
    // 重置显示数量当选择新的区域时
    setVisibleItems(ITEMS_PER_PAGE);
  }, [selectedRegion]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  const loadMore = () => {
    setIsLoading(true);
    // 模拟加载延迟
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + ITEMS_PER_PAGE, filteredDistilleries.length));
      setIsLoading(false);
    }, 500);
  };

  return (
    <div>
      {/* Region filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setSelectedRegion(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${!selectedRegion 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {t('common.allRegions')}
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
            {t(`regions.${region}`)}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-center mb-8 text-gray-600">
        {t('common.showing')} {visibleDistilleries.length} {t('common.distilleries')}
        {selectedRegion && ` (${t(`regions.${selectedRegion}`)})`}
        {hasMore && ` - ${t('common.total')} ${filteredDistilleries.length}`}
      </div>

      {/* Distillery cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleDistilleries.map(distillery => (
          <div
            key={distillery.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 relative overflow-hidden">
              <div
                className="absolute inset-0 transition-transform duration-300 hover:scale-105"
                style={{
                  background: getGradientByRegion(distillery.region)
                }}
              >
                {getDecorativePattern(distillery.region)}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {language === 'en' ? distillery.name : distillery.chineseName}
                  </h3>
                  <p className="text-gray-600">
                    {t('common.foundedIn')} {distillery.founded}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">
                  {language === 'en' ? distillery.name : distillery.chineseName}
                  <span className="block text-sm font-normal text-gray-600">
                    {language === 'en' ? distillery.chineseName : distillery.name}
                  </span>
                </h3>
                <span
                  className="inline-block px-2 py-1 text-xs text-white rounded-full"
                  style={{ backgroundColor: whiskyRegions[distillery.region].color }}
                >
                  {t(`regions.${distillery.region}`)}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' ? distillery.description : distillery.chineseDescription}
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">{t('common.signatureProducts')}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {distillery.signature.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">{t('common.tastingNotes')}</h4>
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

                <div className="pt-4">
                  <a
                    href={distillery.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                  >
                    {t('common.visitWebsite')}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {hasMore && (
        <div
          ref={loadMoreRef}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center justify-center">
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="text-gray-600">{t('common.loading')}</span>
              </>
            ) : (
              <span className="text-gray-400">{t('common.scrollForMore')}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 