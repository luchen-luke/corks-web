<<<<<<< HEAD
# Corks Whisky Showcase

A modern, responsive web application showcasing Scottish whisky distilleries with multilingual support (English/Chinese).

## Features

### 1. Distillery Showcase

- Interactive card-based layout displaying Scottish distilleries
- Infinite scroll loading (6 cards at a time)
- Beautiful gradient backgrounds with decorative patterns
- Responsive grid layout (1/2/3 columns based on screen size)

### 2. Region-based Navigation

- Filter distilleries by six Scottish whisky regions:
  - Highlands (高地)
  - Speyside (斯佩塞)
  - Lowlands (低地)
  - Islay (艾雷岛)
  - Islands (群岛)
  - Campbeltown (坎贝尔镇)
- Color-coded region indicators
- Quick region switching

### 3. Discover Feature (NEW)

- Social media-style whisky sharing platform
- Multilingual post content (English/Chinese)
- Categories: Tasting, Collection, Distillery Visits, Food Pairing
- Interactive features (likes, comments)
- Image galleries with carousel
- Location tagging
- Advanced search functionality
- Responsive design
- For detailed documentation, see:
  - [Discover Feature Documentation (English)](docs/discover-feature-en.md)
  - [Discover Feature Documentation (中文)](docs/discover-feature.md)

### 4. Bilingual Support

- Complete English/Chinese language switching
- Context-based translation system
- Seamless language toggle
- Bilingual content for:
  - Distillery names and descriptions
  - Region names
  - Interface elements
  - Navigation items
  - Social posts and comments

### 5. Distillery Information

Each distillery card includes:

- Name (English/Chinese)
- Founding date
- Region affiliation
- Signature products
- Tasting notes
- Website links
- Visual styling based on region

### 6. User Interface

- Clean, modern design
- Gradient backgrounds
- Interactive hover effects
- Loading indicators
- Smooth transitions
- Responsive layout

## Technical Implementation

### Key Components

- `WhiskyDistilleryCards`: Main component for displaying distillery information
- `LanguageSwitch`: Language toggle component
- `LanguageContext`: Context provider for language management
- Translation system with JSON-based language files

### Data Structure

```typescript
interface Distillery {
  id: string;
  name: string;
  chineseName: string;
  region: string;
  founded: number;
  description: string;
  chineseDescription: string;
  signature: string[];
  tastingNotes: string[];
  website: string;
}

interface WhiskyRegion {
  name: string;
  chineseName: string;
  color: string;
}
```

### Features Implementation

1. **Infinite Scroll**

   - Intersection Observer API for scroll detection
   - Batch loading of 6 items
   - Loading indicators

2. **Language System**

   - Context-based language management
   - JSON translation files
   - Dynamic content switching

3. **Visual Design**
   - Tailwind CSS for styling
   - Dynamic gradients
   - Region-based color schemes
   - Responsive grid system

## Usage

1. **Language Switching**

   ```tsx
   const { language, setLanguage, t } = useLanguage();
   ```

2. **Translations**

   ```tsx
   // Using translations
   {
     t("common.visitWebsite");
   }
   ```

3. **Region Filtering**
   ```tsx
   // Filter by region
   const filteredDistilleries = selectedRegion
     ? distilleries.filter((d) => d.region === selectedRegion)
     : distilleries;
   ```

## Development

### Prerequisites

- Node.js
- npm/yarn
- Next.js

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

### Project Structure

```
src/
├── app/
│   └── whisky-map/
│       └── page.tsx
├── components/
│   ├── WhiskyDistilleryCards.tsx
│   └── LanguageSwitch.tsx
├── contexts/
│   └── LanguageContext.tsx
├── i18n/
│   └── translations.ts
└── data/
    └── mockWhiskyData.ts
```

## Future Enhancements

- Add more distilleries and regions
- Implement search functionality
- Add filtering by characteristics
- Include user reviews and ratings
- Add virtual distillery tours
- Implement authentication system
- Add user favorites and collections
=======
# corks-web
>>>>>>> 054df5a0203b340420acc632cdf3c2564a6d37cb
