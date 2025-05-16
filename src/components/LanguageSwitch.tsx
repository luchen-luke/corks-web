import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
          ${language === 'zh'
            ? 'bg-slate-900 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
          ${language === 'en'
            ? 'bg-slate-900 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        English
      </button>
    </div>
  );
} 