'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-0 pb-16 overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50/30 to-white">
      {/* 高级背景设计 */}
      <div className="absolute inset-0 -z-10">
        {/* 渐变背景 - 模拟山谷和海洋 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-sky-50 to-white" />
        
        {/* 装饰图案 - 模拟波浪效果 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/20 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative z-10 text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-sky-100 mb-8">
              <span className="animate-pulse relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                加入中国最大的品酒社交平台
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              探索美酒文化
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                分享饮酒体验
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed">
              Corks不仅是一款App，更是连接美酒爱好者的社交平台。
              <br className="hidden md:block" />
              在这里，与志同道合的伙伴一起探索美酒世界。
            </p>
            
            {/* 特点列表 */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: "🥃", title: "品酒笔记", desc: "记录每一次品鉴体验" },
                { icon: "👥", title: "社交互动", desc: "与酒友分享交流" },
                { icon: "🏆", title: "专业评分", desc: "科学的评价体系" },
                { icon: "🎯", title: "个性推荐", desc: "发现适合您的美酒" }
              ].map((item, i) => (
                <div key={i} className="group p-4 bg-white rounded-2xl shadow-sm border border-sky-100/50 hover:shadow-md hover:border-sky-200 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-10">
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] group-hover:opacity-80"></div>
                <svg className="w-6 h-6 mr-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83"/>
                </svg>
                <span className="relative z-10">iOS下载</span>
              </a>
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] bg-white hover:bg-slate-50"
              >
                <div className="absolute inset-0 rounded-full border-2 border-blue-600/20 group-hover:border-blue-600/40 transition-colors"></div>
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l15.25 8.5c.3.17.39.56.21.86-.06.11-.15.2-.26.26l-15.25 8.5c-.25.18-.55.28-.86.28-.83 0-1.5-.67-1.5-1.5z"/>
                </svg>
                <span className="text-blue-600">Android下载</span>
              </a>
            </div>

            {/* 社交证明 */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 border-2 border-white shadow-sm flex items-center justify-center text-sm text-blue-600 hover:scale-110 transition-transform duration-300 hover:z-10"
                    >
                      用户{i}
                    </div>
                  ))}
                </div>
                <div className="h-8 w-[1px] bg-slate-200 mx-3 hidden sm:block"></div>
                <p className="text-base text-slate-600">
                  已有 <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">10,000+</span> 用户加入
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100">
                  ⭐️ 4.8分用户好评
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100">
                  📱 支持iOS/Android
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100">
                  🔒 隐私保护
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative max-w-sm mx-auto">
              {/* 装饰光效 - 模拟海洋波光 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-sky-500 opacity-30 blur-3xl rounded-full"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-sky-500 opacity-10 blur-2xl rounded-full animate-pulse"></div>
              
              {/* 手机模型 */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] bg-slate-900 rounded-[3rem] shadow-2xl p-4 mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-3xl"></div>
                <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                  <div className="w-full h-full bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center justify-center p-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                        <span className="text-3xl text-white">🥃</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">
                          Corks App
                        </h3>
                        <p className="text-sm text-slate-500">即将上线</p>
                      </div>
                    </div>
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