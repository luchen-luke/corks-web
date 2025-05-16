import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Post, Comment } from '@/types/discover';

interface DiscoverModalProps {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
}

// 模拟评论数据
const mockComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'Alice Wang',
      avatar: '/images/avatars/comment1.jpg'
    },
    content: '这款威士忌真的很棒！我也尝过，确实如你所说的那样有蜂蜜和烟熏的味道。',
    likes: 12,
    createdAt: '2024-03-10T14:30:00Z'
  },
  {
    id: '2',
    author: {
      name: 'Bob Chen',
      avatar: '/images/avatars/comment2.jpg'
    },
    content: '分享得很详细，学到了很多。请问这款威士忌在哪里可以买到呢？',
    likes: 8,
    createdAt: '2024-03-10T15:45:00Z'
  }
];

export default function DiscoverModal({ post, isOpen, onClose, initialImageIndex = 0 }: DiscoverModalProps) {
  const { language } = useLanguage();
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  const title = language === 'en' ? post.title : post.chineseTitle;
  const content = language === 'en' ? post.content : post.chineseContent;
  const locationName = post.location ? (language === 'en' ? post.location.name : post.location.chineseName) : null;

  useEffect(() => {
    setCurrentImageIndex(initialImageIndex);
  }, [initialImageIndex]);

  // 处理点击背景关闭
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 处理ESC键关闭
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // 禁止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : post.images.length - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < post.images.length - 1 ? prev + 1 : 0));
  };

  // 添加评论
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: '当前用户',
        avatar: '/images/avatars/current-user.jpg'
      },
      content: newComment,
      likes: 0,
      createdAt: new Date().toISOString()
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl w-[1200px] max-w-[95vw] h-[800px] max-h-[85vh] overflow-hidden flex">
        {/* 左侧图片区域 */}
        <div className="w-[600px] relative bg-gray-100">
          <div className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={post.images[currentImageIndex].url}
                alt={title}
                fill
                className="object-cover"
              />
              {post.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity flex items-center justify-center"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity flex items-center justify-center"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {post.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 右侧内容区域 */}
        <div className="w-[600px] flex flex-col h-full">
          {/* 作者信息 */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{post.author.name}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 帖子内容 */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* 标签 */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
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

            <h2 className="text-xl font-bold mb-2">{title}</h2>
            
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

            <p className="text-gray-600 mb-4">{content}</p>

            {/* 图片描述 */}
            {post.images[currentImageIndex].description && (
              <p className="text-sm text-gray-500 italic mb-4">
                {post.images[currentImageIndex].description}
              </p>
            )}

            {/* 评论列表 */}
            <div className="mt-6">
              <h3 className="font-medium mb-4">
                {language === 'en' ? 'Comments' : '评论'} ({comments.length})
              </h3>
              <div className="space-y-4">
                {comments.map(comment => (
                  <div key={comment.id} className="flex space-x-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={comment.author.avatar}
                        alt={comment.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">
                          {comment.author.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {comment.content}
                      </p>
                      <div className="mt-2 flex items-center space-x-4">
                        <button className="text-sm text-gray-500 flex items-center space-x-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 底部互动区 */}
          <div className="border-t p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className="flex items-center space-x-1"
                >
                  <svg
                    className={`w-6 h-6 transition-colors ${
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
                <button className="flex items-center space-x-1">
                  <svg
                    className="w-6 h-6 text-gray-400"
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
                  <span>{comments.length}</span>
                </button>
              </div>
            </div>

            {/* 评论输入框 */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={language === 'en' ? 'Write a comment...' : '写下你的评论...'}
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddComment();
                  }
                }}
              />
              <button
                onClick={handleAddComment}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                {language === 'en' ? 'Send' : '发送'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 