'use client';

import dynamic from 'next/dynamic';
import WhiskyDistilleryCards from '@/components/WhiskyDistilleryCards';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageSwitch from '@/components/LanguageSwitch';
import { useLanguage } from '@/contexts/LanguageContext';

// 模拟的session数据
const mockSession = {
  user: {
    name: "测试用户",
    email: "test@example.com"
  },
  expires: "2024-12-31"
};

function WhiskyMapContent() {
  const { t } = useLanguage();
  
  return (
    <main className="py-24 bg-gradient-to-b from-white to-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <LanguageSwitch />
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            {t('pageTitle.main')}
          </h1>
          <p className="text-lg text-slate-600">
            {t('pageTitle.subtitle')}
          </p>
          <div className="mt-4 text-sm text-blue-600">
            {t('common.currentUser')}: {mockSession.user.name} ({mockSession.user.email})
          </div>
        </div>

        <WhiskyDistilleryCards session={mockSession} />

        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">{t('pageTitle.about')}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t('pageTitle.aboutText')}
            </p>
            <a
              href="/community"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors text-lg"
            >
              {t('pageTitle.exploreMore')}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function WhiskyMapPage() {
  return (
    <LanguageProvider>
      <WhiskyMapContent />
    </LanguageProvider>
  );
} 