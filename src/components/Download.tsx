'use client';

import Image from 'next/image';

export default function Download() {
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      {/* 背景装饰 - 模拟海浪效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              立即下载 Corks
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">开启您的品酒之旅</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              随时随地记录品酒体验，与酒友分享美好时刻。
              现在下载 Corks，加入我们的品酒社区！
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-all hover:scale-105 transform"
              >
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">下载应用于</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-all hover:scale-105 transform"
              >
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l15.25 8.5c.3.17.39.56.21.86-.06.11-.15.2-.26.26l-15.25 8.5c-.25.18-.55.28-.86.28-.83 0-1.5-.67-1.5-1.5z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">下载应用于</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-slate-600">4.8 评分</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
                <span className="text-slate-600">10,000+ 下载</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="w-[240px] h-[480px] bg-slate-900 rounded-[2.5rem] shadow-xl p-3 transform rotate-6">
                <div className="h-full w-full bg-sky-100 rounded-[2rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-4">
                    <p className="text-white text-center font-medium">
                      发现美酒
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative -mt-8">
              <div className="w-[240px] h-[480px] bg-slate-900 rounded-[2.5rem] shadow-xl p-3 transform -rotate-3">
                <div className="h-full w-full bg-sky-100 rounded-[2rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center p-4">
                    <p className="text-white text-center font-medium">
                      分享体验
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 