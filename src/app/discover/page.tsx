'use client';

import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageSwitch from '@/components/LanguageSwitch';
import DiscoverGrid from '@/components/discover/DiscoverGrid';
import DiscoverTabs from '@/components/discover/DiscoverTabs';
import DiscoverSidebar from '@/components/discover/DiscoverSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const categories = [
  { id: 'all', nameKey: 'discover.categories.all' },
  { id: 'tasting', nameKey: 'discover.categories.tasting' },
  { id: 'collection', nameKey: 'discover.categories.collection' },
  { id: 'distillery', nameKey: 'discover.categories.distillery' },
  { id: 'pairing', nameKey: 'discover.categories.pairing' },
];

function DiscoverContent() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DiscoverSidebar />
      
      <main className="flex-1 ml-64">
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <h1 className="text-xl font-bold text-gray-900">
                {t('discover.title')}
              </h1>
              <LanguageSwitch />
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('discover.searchPlaceholder')}
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <DiscoverTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <DiscoverGrid category={activeCategory} searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
}

export default function DiscoverPage() {
  return (
    <LanguageProvider>
      <DiscoverContent />
    </LanguageProvider>
  );
} 