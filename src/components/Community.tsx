'use client';

import { 
  UserGroupIcon, 
  MapIcon, 
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  GlobeEuropeAfricaIcon,
  FireIcon,
  BuildingOfficeIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const communityFeatures = [
  {
    icon: CalendarIcon,
    title: '线下品鉴活动',
    description: '参与本地威士忌品鉴会，与专业品酒师面对面交流。'
  },
  {
    icon: UserGroupIcon,
    title: '酒友圈子',
    description: '加入志同道合的酒友圈子，分享品酒心得，结识新朋友。'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: '实时互动',
    description: '与其他酒友实时讨论，分享品酒体验和建议。'
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: '本地文化',
    description: '深入了解苏格兰威士忌文化，探索传统酿造工艺。'
  },
  {
    icon: FireIcon,
    title: '热门话题',
    description: '参与威士忌相关话题讨论，分享您的见解。'
  }
];

const upcomingEvents = [
  {
    title: "高地威士忌品鉴会",
    date: "2024年4月15日",
    location: "爱丁堡",
    spots: "限额20人",
    image: "/highland-tasting.jpg",
    organizer: {
      name: "Highland Whisky Society",
      logo: "/highland-society-logo.jpg",
      verified: true
    },
    tags: ["高地威士忌", "品鉴会", "初学者友好", "专家指导"]
  },
  {
    title: "艾雷岛麦芽之旅",
    date: "2024年5月1日",
    location: "艾雷岛",
    spots: "限额15人",
    image: "/islay-tour.jpg",
    organizer: {
      name: "Islay Whisky Club",
      logo: "/islay-club-logo.jpg",
      verified: true
    },
    tags: ["艾雷岛", "麦芽威士忌", "深度游", "专业课程"]
  }
];

export default function Community() {
  const { data: session } = useSession();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            加入充满活力的威士忌社区
          </h2>
          <p className="text-lg text-slate-600">
            在这里，每一位威士忌爱好者都能找到归属感。无论您是初学者还是行家，
            都能在Corks发现独特的社交体验和丰富的本地文化。
          </p>
        </div>

        {/* 功能特点 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* 威士忌地图卡片 */}
          <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {session ? (
              <Link href="/whisky-map" className="block">
                <div className="flex items-start gap-4">
                  <MapIcon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">苏格兰威士忌地图</h3>
                    <p className="text-slate-600">探索苏格兰各地区的特色威士忌，了解不同产区的独特风味。</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex items-start gap-4">
                <MapIcon className="w-8 h-8 text-blue-600/50" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">苏格兰威士忌地图</h3>
                  <p className="text-slate-600 mb-2">探索苏格兰各地区的特色威士忌，了解不同产区的独特风味。</p>
                  <Link
                    href="/login?redirect=/whisky-map"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                  >
                    登录后查看
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {communityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 即将举办的活动 */}
        <div className="mt-24 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-sky-500/10 blur-3xl" />
          
          <h3 className="text-2xl font-bold mb-8 text-center">
            即将举办的线下活动
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-sky-500/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="p-6">
                  {/* 主办方信息 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <BuildingOfficeIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900">{event.organizer.name}</span>
                        {event.organizer.verified && (
                          <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">认证主办方</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  
                  {/* 活动标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                      >
                        <TagIcon className="w-4 h-4" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 text-slate-600">
                    <p className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapIcon className="w-5 h-5" />
                      {event.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <UserGroupIcon className="w-5 h-5" />
                      {event.spots}
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    立即报名
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              查看更多活动
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
    </section>
  );
} 