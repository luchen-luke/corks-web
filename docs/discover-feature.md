# Discover 功能文档 | Discover Feature Documentation

## 功能概述 | Feature Overview

Discover 功能是一个类似小红书风格的社交分享页面，允许用户浏览、搜索和互动威士忌相关的帖子。该功能支持多语言（中文/英文），并提供了丰富的交互体验。

The Discover feature is a social sharing page similar to Xiaohongshu (RED) style, allowing users to browse, search, and interact with whisky-related posts. The feature supports multiple languages (Chinese/English) and provides a rich interactive experience.

## 技术栈 | Technical Stack

- Next.js 14
- TypeScript 5
- Tailwind CSS
- Context API (用于语言切换 | for language switching)
- React Hooks
- Image Optimization (Next.js Image)

## 组件结构 | Component Structure

### 1. DiscoverPage (`src/app/discover/page.tsx`)

主页面组件，包含：| Main page component, includes:

- 语言切换功能 | Language switching
- 搜索栏 | Search bar
- 分类标签 | Category tabs
- 内容展示网格 | Content display grid
- 响应式布局 | Responsive layout
- 固定顶部导航 | Fixed top navigation

```typescript
interface Category {
  id: string;
  nameKey: string;
}

const categories = [
  { id: "all", nameKey: "discover.categories.all" },
  { id: "tasting", nameKey: "discover.categories.tasting" },
  { id: "collection", nameKey: "discover.categories.collection" },
  { id: "distillery", nameKey: "discover.categories.distillery" },
  { id: "pairing", nameKey: "discover.categories.pairing" },
];
```

### 2. DiscoverGrid (`src/components/discover/DiscoverGrid.tsx`)

内容网格组件，负责：| Content grid component, responsible for:

- 展示帖子网格 | Displaying post grid
- 处理分类筛选 | Handling category filtering
- 实现搜索功能 | Implementing search functionality
- 无限滚动加载 | Infinite scroll loading
- 响应式列数调整 | Responsive column adjustment
- 加载状态显示 | Loading state display
- 搜索结果计数 | Search result counting

```typescript
interface DiscoverGridProps {
  category: string;
  searchQuery: string;
}
```

### 3. DiscoverPost (`src/components/discover/DiscoverPost.tsx`)

帖子卡片组件，展示：| Post card component, displays:

- 图片画廊 | Image gallery
- 标题和内容 | Title and content
- 作者信息 | Author information
- 互动功能（点赞、评论）| Interaction features (likes, comments)
- 标签展示 | Tag display
- 位置信息 | Location information
- 优化的图片加载 | Optimized image loading
- 交互动画 | Interactive animations

### 4. DiscoverModal (`src/components/discover/DiscoverModal.tsx`)

帖子详情模态框，提供：| Post detail modal, provides:

- 大图展示 (1200px × 800px) | Large image display
- 图片轮播 | Image carousel
- 评论系统 | Comment system
- 完整内容展示 | Full content display
- 互动功能 | Interactive features
- 键盘导航 | Keyboard navigation
- ESC 关闭 | ESC to close
- 背景点击关闭 | Background click to close
- 图片描述显示 | Image description display

## 数据结构

### Post 接口

```typescript
interface Post {
  id: string;
  title: string;
  chineseTitle: string;
  content: string;
  chineseContent: string;
  category: string;
  images: {
    url: string;
    description?: string;
  }[];
  tags: string[];
  location?: {
    name: string;
    chineseName: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  author: {
    name: string;
    avatar: string;
    id: string;
  };
  likes: number;
  comments: number;
  createdAt: string;
}
```

### Comment 接口

```typescript
interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  likes: number;
  createdAt: string;
}
```

## 功能特性

### 1. 多语言支持

- 使用 Context API 实现语言切换
- 所有内容支持中英文显示
- 实时切换语言无需刷新

### 2. 搜索功能

- 支持多字段搜索（标题、内容、标签、位置、作者）
- 实时搜索结果更新
- 支持中英文搜索

### 3. 分类系统

- 预设分类：品鉴、收藏、酒厂参观、美食搭配
- 可扩展的分类结构
- 分类筛选与搜索结合

### 4. 图片画廊

- 支持多图展示
- 图片轮播功能
- 图片描述展示
- 响应式图片布局

### 5. 互动功能

- 点赞系统
- 评论系统
- 实时互动反馈

### 6. 响应式设计

- 适配多种屏幕尺寸
- 移动端友好的交互
- 优化的图片加载

## 使用指南

### 添加新帖子

在 `src/data/mockDiscoverData.ts` 中添加新的帖子数据：

```typescript
const newPost: Post = {
  id: "unique-id",
  title: "English Title",
  chineseTitle: "中文标题",
  content: "English content...",
  chineseContent: "中文内容...",
  category: "tasting",
  images: [
    {
      url: "/images/path/to/image.jpg",
      description: "Image description",
    },
  ],
  tags: ["Tag1", "Tag2"],
  // ... other fields
};
```

### 自定义分类

在 `categories` 数组中添加新的分类：

```typescript
const newCategory = {
  id: "new-category",
  nameKey: "discover.categories.newCategory",
};
```

## 性能优化 | Performance Optimizations

1. 图片优化 | Image Optimization

- 使用 Next.js Image 组件 | Using Next.js Image component
- 自动图片优化 | Automatic image optimization
- 延迟加载 | Lazy loading
- 响应式图片尺寸 | Responsive image sizes
- 图片加载占位符 | Image loading placeholders
- WebP 格式支持 | WebP format support

2. 分页加载 | Pagination Loading

- 初始加载 8 个帖子 | Initial load of 8 posts
- 滚动加载更多 | Scroll to load more
- 防抖动处理 | Debounce handling
- 加载状态指示 | Loading state indication
- 平滑过渡动画 | Smooth transition animations
- 内存使用优化 | Memory usage optimization

3. 搜索优化 | Search Optimization

- 搜索防抖 (300ms) | Search debounce
- 结果缓存 | Result caching
- 高效的过滤算法 | Efficient filtering algorithm
- 多字段搜索 | Multi-field search
- 实时结果更新 | Real-time result updates
- 搜索历史记录 | Search history

## 未来改进 | Future Improvements

1. 后端集成 | Backend Integration

- 实现真实的数据库存储 | Implement real database storage
- 用户认证系统 | User authentication system
- 实时互动功能 | Real-time interaction features
- API 优化 | API optimization
- 数据缓存策略 | Data caching strategy
- WebSocket 支持 | WebSocket support

2. 功能扩展 | Feature Extensions

- 用户个人主页 | User profile pages
- 收藏功能 | Bookmark feature
- 分享功能 | Share feature
- 更多互动方式 | More interaction methods
- 图片编辑工具 | Image editing tools
- 多媒体支持 | Multimedia support
- 地理位置功能 | Geolocation features

3. 性能优化 | Performance Optimization

- 虚拟滚动 | Virtual scrolling
- 预加载优化 | Preload optimization
- SEO 优化 | SEO optimization
- 代码分割 | Code splitting
- 服务端渲染优化 | Server-side rendering optimization
- 缓存策略优化 | Cache strategy optimization
- 性能监控 | Performance monitoring

## 常见问题

### Q: 如何添加新的语言支持？

A: 在语言 Context 中添加新的语言选项，并为所有文本键值添加对应翻译。

### Q: 如何自定义帖子展示样式？

A: 修改 DiscoverPost 组件的 Tailwind 类或添加自定义 CSS。

### Q: 如何扩展搜索功能？

A: 在 DiscoverGrid 组件的搜索逻辑中添加新的搜索字段和过滤条件。
