'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    // TODO: 实现登出逻辑
    setIsLoggedIn(false);
  };

  if (!isMounted) {
    return null;
  }

  const renderAuthButtons = () => {
    if (isLoggedIn) {
      return (
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            退出登录
          </button>
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

  const renderMobileAuthButtons = () => {
    if (isLoggedIn) {
      return (
        <button
          onClick={() => {
            setIsMenuOpen(false);
            handleLogout();
          }}
          className="block w-full py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
        >
          退出登录
        </button>
      );
    }

    return (
      <div className="space-y-3">
        <Link
          href="/login"
          onClick={() => setIsMenuOpen(false)}
          className="block w-full py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
        >
          登录
        </Link>
        <Link
          href="/register"
          onClick={() => setIsMenuOpen(false)}
          className="block w-full py-2 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          免费注册
        </Link>
      </div>
    );
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-16">
        <div className="flex justify-between items-center h-full">
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
          
          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'top-2'
              }`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}></span>
            </div>
          </button>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="relative text-slate-600 hover:text-blue-600 transition-colors group"
            >
              功能
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="#community" 
              className="relative text-slate-600 hover:text-blue-600 transition-colors group"
            >
              社区
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="#download" 
              className="relative text-slate-600 hover:text-blue-600 transition-colors group"
            >
              下载
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            {renderAuthButtons()}
          </div>

          {/* 移动端导航菜单 */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transform transition-all duration-300 border-t border-slate-100 ${
              isMenuOpen 
                ? 'opacity-100 visible translate-y-0 shadow-lg' 
                : 'opacity-0 invisible -translate-y-2'
            }`}
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              <Link
                href="#features"
                className="block py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                功能
              </Link>
              <Link
                href="#community"
                className="block py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                社区
              </Link>
              <Link
                href="#download"
                className="block py-2 text-center text-slate-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                下载
              </Link>
              {renderMobileAuthButtons()}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 