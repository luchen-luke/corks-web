import { Post } from '@/types/discover';

export const mockPosts: Post[] = [
    {
        id: '1',
        title: 'Tasting Notes: Macallan 18 Year Old',
        chineseTitle: '品鉴笔记：麦卡伦18年',
        content: 'A beautiful expression of Macallan with rich sherry notes, dried fruits, and a hint of oak. The finish is long and warming with subtle spices.',
        chineseContent: '这款麦卡伦18年展现出浓郁的雪莉香气，干果味，以及淡淡的橡木味。回味悠长，温暖，带有细腻的香料味。',
        category: 'tasting',
        images: [
            {
                url: '/images/discover/macallan-1.jpg',
                description: 'The iconic Macallan 18 Year Old bottle against a dark background'
            },
            {
                url: '/images/discover/macallan-2.jpg',
                description: 'A perfect dram in a Glencairn glass'
            },
            {
                url: '/images/discover/macallan-3.jpg',
                description: 'The rich amber color of the whisky'
            }
        ],
        tags: ['Macallan', 'Single Malt', 'Speyside', 'Sherry Cask'],
        location: {
            name: 'The Macallan Distillery',
            chineseName: '麦卡伦酒厂',
            coordinates: {
                lat: 57.4848,
                lng: -3.2075
            }
        },
        author: {
            id: 'user1',
            name: 'James Wilson',
            avatar: '/images/avatars/james.jpg'
        },
        likes: 128,
        comments: 24,
        createdAt: '2024-03-15T10:30:00Z'
    },
    {
        id: '2',
        title: 'My Japanese Whisky Collection',
        chineseTitle: '我的日本威士忌收藏',
        content: 'Proud to share my Japanese whisky collection featuring Yamazaki, Hibiki, and Hakushu. Each bottle tells a unique story of Japanese craftsmanship.',
        chineseContent: '很荣幸分享我的日本威士忌收藏，包括山崎、响和白州。每一瓶都诉说着日本工艺的独特故事。',
        category: 'collection',
        images: [
            {
                url: '/images/discover/japanese-collection-1.jpg',
                description: 'Full collection display'
            },
            {
                url: '/images/discover/japanese-collection-2.jpg',
                description: 'Yamazaki 12 Year Old'
            },
            {
                url: '/images/discover/japanese-collection-3.jpg',
                description: 'Hibiki Japanese Harmony'
            }
        ],
        tags: ['Japanese Whisky', 'Collection', 'Yamazaki', 'Hibiki', 'Hakushu'],
        author: {
            id: 'user2',
            name: 'Sarah Chen',
            avatar: '/images/avatars/sarah.jpg'
        },
        likes: 256,
        comments: 42,
        createdAt: '2024-03-14T15:45:00Z'
    },
    {
        id: '3',
        title: 'Highland Park Distillery Visit',
        chineseTitle: '高原骑士酒厂参观',
        content: 'An amazing tour of Highland Park distillery in Orkney. The Viking heritage and traditional floor malting process were fascinating to witness.',
        chineseContent: '参观奥克尼群岛的高原骑士酒厂真是太棒了。亲眼见证维京遗产和传统的地板麦芽化过程令人着迷。',
        category: 'distillery',
        images: [
            {
                url: '/images/discover/highland-park-1.jpg',
                description: 'Highland Park Distillery entrance'
            },
            {
                url: '/images/discover/highland-park-2.jpg',
                description: 'Traditional floor malting'
            },
            {
                url: '/images/discover/highland-park-3.jpg',
                description: 'Copper pot stills'
            }
        ],
        tags: ['Highland Park', 'Distillery Visit', 'Orkney', 'Scottish Whisky'],
        location: {
            name: 'Highland Park Distillery',
            chineseName: '高原骑士酒厂',
            coordinates: {
                lat: 58.9675,
                lng: -2.9542
            }
        },
        author: {
            id: 'user3',
            name: 'Michael Brown',
            avatar: '/images/avatars/michael.jpg'
        },
        likes: 189,
        comments: 31,
        createdAt: '2024-03-13T09:15:00Z'
    },
    {
        id: '4',
        title: 'Perfect Whisky and Chocolate Pairing',
        chineseTitle: '完美的威士忌巧克力搭配',
        content: 'Discovered an incredible pairing: Dalmore 15 with 70% dark chocolate. The orange notes in the whisky complement the rich cocoa perfectly.',
        chineseContent: '发现了一个绝妙的搭配：大摩15年配70%黑巧克力。威士忌中的橙子味道与浓郁的可可完美互补。',
        category: 'pairing',
        images: [
            {
                url: '/images/discover/pairing-1.jpg',
                description: 'Dalmore 15 with artisanal chocolate'
            },
            {
                url: '/images/discover/pairing-2.jpg',
                description: 'Close-up of the chocolate selection'
            }
        ],
        tags: ['Whisky Pairing', 'Chocolate', 'Dalmore', 'Food Pairing'],
        author: {
            id: 'user4',
            name: 'Emily Zhang',
            avatar: '/images/avatars/emily.jpg'
        },
        likes: 145,
        comments: 28,
        createdAt: '2024-03-12T14:20:00Z'
    },
    {
        id: '5',
        title: 'My Whisky Collection Showcase',
        chineseTitle: '我的威士忌收藏展示',
        content: 'Proud to share my Scottish whisky collection, featuring some rare editions from Macallan and Dalmore.',
        chineseContent: '很自豪分享我的苏格兰威士忌收藏，包括一些麦卡伦和大摩的珍稀版本。',
        category: 'collection',
        images: [
            {
                url: '/images/discover/whisky-collection.jpg',
                description: 'My prized Scottish whisky collection'
            }
        ],
        tags: ['Collection', 'Scottish Whisky', 'Macallan', 'Dalmore', 'Rare Editions'],
        author: {
            id: 'user5',
            name: 'Sarah Chen',
            avatar: '/images/avatars/sarah.jpg'
        },
        likes: 289,
        comments: 45,
        createdAt: '2024-03-09T15:30:00Z'
    },
    {
        id: '6',
        title: 'Visit to Talisker Distillery',
        chineseTitle: '泰斯卡酒厂参观记',
        content: 'An amazing tour of the Talisker distillery on the Isle of Skye. The sea air really influences the whisky!',
        chineseContent: '在斯凯岛泰斯卡酒厂的精彩之旅。海风真的影响了威士忌的风味！',
        category: 'distillery',
        images: [
            {
                url: '/images/discover/talisker-distillery.jpg',
                description: 'The iconic Talisker distillery by the sea'
            }
        ],
        tags: ['Talisker', 'Distillery Visit', 'Isle of Skye', 'Scottish Whisky'],
        location: {
            name: 'Talisker Distillery',
            chineseName: '泰斯卡酒厂',
            coordinates: {
                lat: 57.3024,
                lng: -6.3567
            }
        },
        author: {
            id: 'user6',
            name: 'Mike Wilson',
            avatar: '/images/avatars/mike.jpg'
        },
        likes: 342,
        comments: 67,
        createdAt: '2024-03-08T09:15:00Z'
    },
    {
        id: '7',
        title: 'Whisky and Seafood Evening',
        chineseTitle: '威士忌配海鲜之夜',
        content: 'Paired Talisker 10 with fresh oysters and Old Pulteney 12 with smoked salmon. A coastal flavor explosion!',
        chineseContent: '泰斯卡10年搭配新鲜生蚝，老富特尼12年配烟熏三文鱼。海岸风味的美妙碰撞！',
        category: 'pairing',
        images: [
            {
                url: '/images/discover/whisky-seafood.jpg',
                description: 'Whisky and seafood pairing spread'
            },
            {
                url: '/images/discover/whisky-seafood-2.jpg',
                description: 'Close-up of oysters with Talisker'
            }
        ],
        tags: ['Food Pairing', 'Seafood', 'Talisker', 'Old Pulteney', 'Coastal Whisky'],
        author: {
            id: 'user7',
            name: 'Emma Watson',
            avatar: '/images/avatars/emma.jpg'
        },
        likes: 245,
        comments: 52,
        createdAt: '2024-03-04T18:20:00Z'
    },
    {
        id: '8',
        title: 'Rare Macallan Collection',
        chineseTitle: '珍稀麦卡伦收藏',
        content: 'Finally completed my Macallan Fine & Rare collection. The 1926 is the crown jewel!',
        chineseContent: '终于完成了我的麦卡伦珍稀系列收藏。1926年份是其中的明珠！',
        category: 'collection',
        images: [
            {
                url: '/images/discover/macallan-rare.jpg',
                description: 'The complete Macallan Fine & Rare collection'
            },
            {
                url: '/images/discover/macallan-1926.jpg',
                description: 'The legendary Macallan 1926'
            }
        ],
        tags: ['Macallan', 'Fine & Rare', 'Collection', 'Vintage Whisky'],
        author: {
            id: 'user8',
            name: 'Robert Zhang',
            avatar: '/images/avatars/robert.jpg'
        },
        likes: 892,
        comments: 156,
        createdAt: '2024-03-03T09:45:00Z'
    },
    {
        id: '9',
        title: 'Islay Whisky Marathon',
        chineseTitle: '艾雷岛威士忌马拉松',
        content: 'Visited all 9 Islay distilleries in 3 days. My taste buds are swimming in peat!',
        chineseContent: '三天内参观了艾雷岛全部9家酒厂。味蕾徜徉在泥煤海洋中！',
        category: 'distillery',
        images: [
            {
                url: '/images/discover/islay-tour.jpg',
                description: 'Map of Islay with visited distilleries'
            },
            {
                url: '/images/discover/islay-distilleries.jpg',
                description: 'Collection of Islay distillery photos'
            }
        ],
        tags: ['Islay', 'Distillery Visit', 'Peated Whisky', 'Scottish Whisky'],
        location: {
            name: 'Isle of Islay',
            chineseName: '艾雷岛',
            coordinates: {
                lat: 55.7708,
                lng: -6.2265
            }
        },
        author: {
            id: 'user9',
            name: 'James Morrison',
            avatar: '/images/avatars/james-m.jpg'
        },
        likes: 567,
        comments: 98,
        createdAt: '2024-03-02T15:10:00Z'
    },
    {
        id: '10',
        title: 'Whisky and Cheese Masterclass',
        chineseTitle: '威士忌奶酪大师课',
        content: 'Hosted a whisky and cheese pairing masterclass. Dalmore 15 with aged Comté was the highlight!',
        chineseContent: '主持了一场威士忌配奶酪品鉴大师课。大摩15年配陈年孔泰奶酪是亮点！',
        category: 'pairing',
        images: [
            {
                url: '/images/discover/whisky-cheese.jpg',
                description: 'Whisky and cheese pairing setup'
            },
            {
                url: '/images/discover/cheese-selection.jpg',
                description: 'Selection of artisanal cheeses'
            }
        ],
        tags: ['Whisky Pairing', 'Cheese', 'Dalmore', 'Food Pairing', 'Masterclass'],
        author: {
            id: 'user10',
            name: 'Sophie Chen',
            avatar: '/images/avatars/sophie.jpg'
        },
        likes: 334,
        comments: 87,
        createdAt: '2024-03-01T20:30:00Z'
    },
    {
        id: '11',
        title: 'Glenmorangie Signet Experience',
        chineseTitle: '格兰杰陈述臻品体验',
        content: 'The chocolate malt and coffee notes in Signet are incredible. A truly unique dram.',
        chineseContent: '陈述臻品中的巧克力麦芽和咖啡香气令人难以置信。真正独特的一杯。',
        category: 'tasting',
        images: [
            {
                url: '/images/discover/glenmorangie-signet.jpg',
                description: 'Glenmorangie Signet in a tasting glass'
            },
            {
                url: '/images/discover/signet-chocolate.jpg',
                description: 'Chocolate malt used in Signet production'
            }
        ],
        tags: ['Glenmorangie', 'Signet', 'Highland', 'Chocolate Malt'],
        location: {
            name: 'Glenmorangie Distillery',
            chineseName: '格兰杰酒厂',
            coordinates: {
                lat: 57.8269,
                lng: -4.0705
            }
        },
        author: {
            id: 'user11',
            name: 'William Liu',
            avatar: '/images/avatars/william.jpg'
        },
        likes: 445,
        comments: 92,
        createdAt: '2024-02-29T12:15:00Z'
    },
    {
        id: '12',
        title: 'Highland Distillery Road Trip',
        chineseTitle: '高地酒厂公路之旅',
        content: 'A week-long journey through the Highland distilleries. The landscapes are as amazing as the whiskies!',
        chineseContent: '为期一周的高地酒厂之旅。风景如同威士忌一样令人陶醉！',
        category: 'distillery',
        images: [
            {
                url: '/images/discover/highland-trip.jpg',
                description: 'Highland landscape with distillery'
            },
            {
                url: '/images/discover/highland-map.jpg',
                description: 'Map of visited Highland distilleries'
            },
            {
                url: '/images/discover/highland-tasting.jpg',
                description: 'Tasting session at Dalwhinnie'
            }
        ],
        tags: ['Highland', 'Distillery Visit', 'Road Trip', 'Scottish Whisky'],
        location: {
            name: 'Scottish Highlands',
            chineseName: '苏格兰高地',
            coordinates: {
                lat: 57.0000,
                lng: -4.0000
            }
        },
        author: {
            id: 'user12',
            name: 'Alex Johnson',
            avatar: '/images/avatars/alex.jpg'
        },
        likes: 623,
        comments: 104,
        createdAt: '2024-02-28T16:40:00Z'
    },
    {
        id: '13',
        title: 'Vintage Whisky Tasting Night',
        chineseTitle: '古董威士忌品鉴之夜',
        content: 'Sampled whiskies from the 1960s and 70s. The old style production methods created such unique flavors!',
        chineseContent: '品鉴了60年代和70年代的威士忌。古老的生产工艺创造出如此独特的风味！',
        category: 'tasting',
        images: [
            {
                url: '/images/discover/vintage-tasting.jpg',
                description: 'Collection of vintage whisky bottles'
            },
            {
                url: '/images/discover/vintage-pour.jpg',
                description: 'Pouring a 1960s Macallan'
            }
        ],
        tags: ['Vintage Whisky', 'Rare Whisky', 'Tasting Notes', 'Whisky History'],
        author: {
            id: 'user13',
            name: 'Michael Chang',
            avatar: '/images/avatars/michael-c.jpg'
        },
        likes: 778,
        comments: 143,
        createdAt: '2024-02-27T19:25:00Z'
    },
    {
        id: '14',
        title: 'Whisky and Cigar Pairing Guide',
        chineseTitle: '威士忌雪茄搭配指南',
        content: 'The perfect guide to pairing different whisky styles with cigars. Balvenie and Cuban cigars steal the show!',
        chineseContent: '不同风格威士忌与雪茄的完美搭配指南。百富配古巴雪茄是最佳组合！',
        category: 'pairing',
        images: [
            {
                url: '/images/discover/whisky-cigar.jpg',
                description: 'Whisky and cigar pairing setup'
            },
            {
                url: '/images/discover/cigar-selection.jpg',
                description: 'Selection of Cuban cigars'
            }
        ],
        tags: ['Whisky Pairing', 'Cigars', 'Balvenie', 'Cuban Cigars', 'Guide'],
        author: {
            id: 'user14',
            name: 'Daniel Wong',
            avatar: '/images/avatars/daniel.jpg'
        },
        likes: 556,
        comments: 98,
        createdAt: '2024-02-26T21:50:00Z'
    },
    {
        id: '15',
        title: 'Japanese Whisky vs Scotch',
        chineseTitle: '日本威士忌对比苏格兰威士忌',
        content: 'A comparative tasting of similar style whiskies from Scotland and Japan. The differences are fascinating!',
        chineseContent: '对比品鉴苏格兰和日本的相似风格威士忌。差异令人着迷！',
        category: 'tasting',
        images: [
            {
                url: '/images/discover/japan-scotch.jpg',
                description: 'Japanese and Scottish whiskies side by side'
            },
            {
                url: '/images/discover/comparison-notes.jpg',
                description: 'Detailed tasting notes comparison'
            }
        ],
        tags: ['Japanese Whisky', 'Scottish Whisky', 'Comparative Tasting', 'Whisky Culture'],
        author: {
            id: 'user15',
            name: 'Yuki Tanaka',
            avatar: '/images/avatars/yuki.jpg'
        },
        likes: 667,
        comments: 124,
        createdAt: '2024-02-25T13:35:00Z'
    },
    {
        id: '16',
        title: 'Limited Edition Showcase',
        chineseTitle: '限量版威士忌展示',
        content: 'My collection of rare and limited edition releases from various distilleries. Each bottle tells a story!',
        chineseContent: '我收藏的各个酒厂珍稀限量版。每一瓶都讲述着一个故事！',
        category: 'collection',
        images: [
            {
                url: '/images/discover/limited-editions.jpg',
                description: 'Display of limited edition whiskies'
            },
            {
                url: '/images/discover/special-releases.jpg',
                description: 'Close-up of special release bottles'
            }
        ],
        tags: ['Limited Edition', 'Rare Whisky', 'Collection', 'Special Releases'],
        author: {
            id: 'user16',
            name: 'Chris Parker',
            avatar: '/images/avatars/chris.jpg'
        },
        likes: 889,
        comments: 167,
        createdAt: '2024-02-24T17:05:00Z'
    }
]; 