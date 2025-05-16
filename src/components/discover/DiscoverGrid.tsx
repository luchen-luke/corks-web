import { useState, useEffect } from 'react';
import DiscoverPost from './DiscoverPost';
import { mockPosts } from '@/data/mockDiscoverData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Post } from '@/types/discover';

interface DiscoverGridProps {
  category: string;
  searchQuery: string;
}

export default function DiscoverGrid({ category, searchQuery }: DiscoverGridProps) {
  const { language } = useLanguage();
  const [posts, setPosts] = useState(mockPosts);
  const [loading, setLoading] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 8;

  // Filter posts based on category and search query
  useEffect(() => {
    let filtered = [...mockPosts];

    // Apply category filter
    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => {
        const title = language === 'en' ? post.title : post.chineseTitle;
        const content = language === 'en' ? post.content : post.chineseContent;
        const tags = post.tags.join(' ').toLowerCase();
        const location = post.location 
          ? language === 'en' 
            ? post.location.name 
            : post.location.chineseName
          : '';

        return (
          title.toLowerCase().includes(query) ||
          content.toLowerCase().includes(query) ||
          tags.includes(query) ||
          location.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query)
        );
      });
    }

    setPosts(filtered);
    setPage(1);
  }, [category, searchQuery, language]);

  // Update visible posts based on pagination
  useEffect(() => {
    setVisiblePosts(posts.slice(0, page * postsPerPage));
  }, [posts, page]);

  // Load more posts
  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  };

  const hasMore = visiblePosts.length < posts.length;

  return (
    <div className="space-y-8">
      {/* Results count */}
      <div className="text-center text-gray-600">
        {language === 'en' ? 'Showing' : '显示'} {visiblePosts.length} {language === 'en' ? 'of' : '/'} {posts.length} {language === 'en' ? 'posts' : '帖子'}
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visiblePosts.map((post, index) => (
          <div
            key={`${post.id}-${index}`}
            className="break-inside-avoid"
          >
            <DiscoverPost post={post} />
          </div>
        ))}
      </div>

      {/* Load more button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {language === 'en' ? 'Loading...' : '加载中...'}
              </span>
            ) : (
              language === 'en' ? 'Load More' : '加载更多'
            )}
          </button>
        </div>
      )}

      {/* No results message */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {language === 'en' ? 'No posts found' : '未找到相关帖子'}
          </p>
        </div>
      )}
    </div>
  );
} 