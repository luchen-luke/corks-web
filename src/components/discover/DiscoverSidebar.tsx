'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHome, IconCompass, IconHeart, IconUser, IconBookmark, IconSettings } from '@tabler/icons-react';

interface SidebarItem {
  id: string;
  icon: React.ReactNode;
  labelKey: string;
  href: string;
}

export default function DiscoverSidebar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const sidebarItems: SidebarItem[] = [
    {
      id: 'home',
      icon: <IconHome size={24} />,
      labelKey: 'discover.sidebar.home',
      href: '/discover'
    },
    {
      id: 'explore',
      icon: <IconCompass size={24} />,
      labelKey: 'discover.sidebar.explore',
      href: '/discover/explore'
    },
    {
      id: 'favorites',
      icon: <IconHeart size={24} />,
      labelKey: 'discover.sidebar.favorites',
      href: '/discover/favorites'
    },
    {
      id: 'collections',
      icon: <IconBookmark size={24} />,
      labelKey: 'discover.sidebar.collections',
      href: '/discover/collections'
    },
    {
      id: 'profile',
      icon: <IconUser size={24} />,
      labelKey: 'discover.sidebar.profile',
      href: '/discover/profile'
    },
    {
      id: 'settings',
      icon: <IconSettings size={24} />,
      labelKey: 'discover.sidebar.settings',
      href: '/discover/settings'
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 pt-16">
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-4">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/10 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium">{t(item.labelKey)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {t('discover.sidebar.guestUser')}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t('discover.sidebar.signInPrompt')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 