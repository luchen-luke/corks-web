'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const publicNavigationItems = [
  {
    name: '首页',
    href: '/',
  },
  {
    name: '社区',
    href: '/community',
  },
  {
    name: '下载',
    href: '#download',
  },
];

const privateNavigationItems = [
  {
    name: '威士忌地图',
    href: '/whisky-map',
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [...publicNavigationItems, ...(session ? privateNavigationItems : [])];

  const renderAuthButtons = () => {
    if (session) {
      return (
        <div className="flex items-center space-x-4">
          <span className="text-slate-600">
            {session.user?.name || session.user?.email}
          </span>
          <Link
            href="/api/auth/signout"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            退出
          </Link>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-4">
        <Link
          href="/login"
          className="text-slate-600 hover:text-blue-600 transition-colors"
        >
          登录
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
        >
          免费注册
        </Link>
      </div>
    );
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Corks
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-slate-600 hover:text-blue-600 transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            {renderAuthButtons()}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 block w-full h-0.5 bg-slate-600 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-slate-600 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'top-2'
              }`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-slate-600 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transform transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0 shadow-lg' 
              : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              {session ? (
                <>
                  <div className="text-center text-slate-600 mb-2">
                    {session.user?.name || session.user?.email}
                  </div>
                  <Link
                    href="/api/auth/signout"
                    className="block py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    退出
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    登录
                  </Link>
                  <Link
                    href="/register"
                    className="block py-2 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    免费注册
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 