# Discover Feature Documentation

## Overview

The Discover feature is a social sharing page similar to Xiaohongshu (RED) style, allowing users to browse, search, and interact with whisky-related posts. The feature supports multiple languages (Chinese/English) and provides a rich interactive experience.

## Technical Stack

- Next.js 14
- TypeScript 5
- Tailwind CSS
- Context API (for language switching)
- React Hooks
- Image Optimization (Next.js Image)

## Component Structure

### 1. DiscoverPage (`src/app/discover/page.tsx`)

Main page component, includes:

- Language switching
- Search bar
- Category tabs
- Content display grid
- Responsive layout
- Fixed top navigation

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

Content grid component, responsible for:

- Displaying post grid
- Handling category filtering
- Implementing search functionality
- Infinite scroll loading
- Responsive column adjustment
- Loading state display
- Search result counting

```typescript
interface DiscoverGridProps {
  category: string;
  searchQuery: string;
}
```

### 3. DiscoverPost (`src/components/discover/DiscoverPost.tsx`)

Post card component, displays:

- Image gallery
- Title and content
- Author information
- Interaction features (likes, comments)
- Tag display
- Location information
- Optimized image loading
- Interactive animations

### 4. DiscoverModal (`src/components/discover/DiscoverModal.tsx`)

Post detail modal, provides:

- Large image display (1200px × 800px)
- Image carousel
- Comment system
- Full content display
- Interactive features
- Keyboard navigation
- ESC to close
- Background click to close
- Image description display

## Data Structures

### Post Interface

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

### Comment Interface

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

## Features

### 1. Multilingual Support

- Language switching using Context API
- All content supports Chinese/English display
- Real-time language switching without refresh

### 2. Search Functionality

- Multi-field search (title, content, tags, location, author)
- Real-time search result updates
- Supports both Chinese and English search

### 3. Category System

- Preset categories: Tasting, Collection, Distillery Visits, Food Pairing
- Extensible category structure
- Category filtering combined with search

### 4. Image Gallery

- Multiple image support
- Image carousel functionality
- Image description display
- Responsive image layout

### 5. Interactive Features

- Like system
- Comment system
- Real-time interaction feedback

### 6. Responsive Design

- Adapts to various screen sizes
- Mobile-friendly interactions
- Optimized image loading

## Usage Guide

### Adding New Posts

Add new post data in `src/data/mockDiscoverData.ts`:

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

### Customizing Categories

Add new categories to the `categories` array:

```typescript
const newCategory = {
  id: "new-category",
  nameKey: "discover.categories.newCategory",
};
```

## Performance Optimizations

1. Image Optimization

- Using Next.js Image component
- Automatic image optimization
- Lazy loading
- Responsive image sizes
- Image loading placeholders
- WebP format support

2. Pagination Loading

- Initial load of 8 posts
- Scroll to load more
- Debounce handling
- Loading state indication
- Smooth transition animations
- Memory usage optimization

3. Search Optimization

- Search debounce (300ms)
- Result caching
- Efficient filtering algorithm
- Multi-field search
- Real-time result updates
- Search history

## Future Improvements

1. Backend Integration

- Implement real database storage
- User authentication system
- Real-time interaction features
- API optimization
- Data caching strategy
- WebSocket support

2. Feature Extensions

- User profile pages
- Bookmark feature
- Share feature
- More interaction methods
- Image editing tools
- Multimedia support
- Geolocation features

3. Performance Optimization

- Virtual scrolling
- Preload optimization
- SEO optimization
- Code splitting
- Server-side rendering optimization
- Cache strategy optimization
- Performance monitoring

## FAQ

### Q: How to add support for a new language?

A: Add new language options in the language Context and provide translations for all text keys.

### Q: How to customize post display styles?

A: Modify the Tailwind classes in the DiscoverPost component or add custom CSS.

### Q: How to extend the search functionality?

A: Add new search fields and filter conditions in the DiscoverGrid component's search logic.
