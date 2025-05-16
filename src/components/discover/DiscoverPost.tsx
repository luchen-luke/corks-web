import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Post } from '@/types/discover';
import DiscoverModal from './DiscoverModal';

interface DiscoverPostProps {
  post: Post;
}

export default function DiscoverPost({ post }: DiscoverPostProps) {
  const { language } = useLanguage();
  const [liked, setLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const title = language === 'en' ? post.title : post.chineseTitle;
  const content = language === 'en' ? post.content : post.chineseContent;
  const locationName = post.location ? (language === 'en' ? post.location.name : post.location.chineseName) : null;

  const handleImageClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* 图片画廊容器 */}
        <div className="relative aspect-[4/5] group">
          {post.images.length > 1 && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs z-10">
              {currentImageIndex + 1}/{post.images.length}
            </div>
          )}
          <div className="relative h-full">
            <Image
              src={post.images[currentImageIndex].url}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {post.images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {post.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleImageClick(e, index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-4">
          {/* 标签 */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {content}
          </p>

          {/* 位置信息 */}
          {locationName && (
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {locationName}
            </div>
          )}

          {/* 作者信息和互动区 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">{post.author.name}</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
                className="flex items-center space-x-1 text-sm text-gray-600"
              >
                <svg
                  className={`w-5 h-5 transition-colors ${
                    liked ? 'text-red-500 fill-current' : 'text-gray-400'
                  }`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>{liked ? post.likes + 1 : post.likes}</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="flex items-center space-x-1 text-sm text-gray-600"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>{post.comments}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <DiscoverModal
        post={post}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialImageIndex={currentImageIndex}
      />
    </>
  );
} 