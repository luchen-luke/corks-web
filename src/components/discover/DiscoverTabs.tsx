import { useLanguage } from '@/contexts/LanguageContext';

interface Category {
  id: string;
  nameKey: string;
}

interface DiscoverTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function DiscoverTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: DiscoverTabsProps) {
  const { t } = useLanguage();

  return (
    <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors
            ${
              activeCategory === category.id
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          {t(category.nameKey)}
        </button>
      ))}
    </div>
  );
} 