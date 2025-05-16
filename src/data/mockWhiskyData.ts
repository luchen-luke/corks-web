// 威士忌产区数据
export const whiskyRegions = {
    'Highlands': {
        name: '高地',
        color: '#4A90E2',
        description: '高地区域是苏格兰最大的威士忌产区，风味特点多样，从轻盈的花香到浓郁的泥煤味都有。',
        bounds: [[56.5, -6], [58.5, -2.5]] as [number, number][]
    },
    'Speyside': {
        name: '斯佩塞',
        color: '#50E3C2',
        description: '斯佩塞是威士忌酿酒厂最密集的区域，以其果香和蜂蜜般的甜味闻名。',
        bounds: [[57.0, -3.8], [57.7, -2.8]] as [number, number][]
    },
    'Lowlands': {
        name: '低地',
        color: '#F5A623',
        description: '低地威士忌通常较为清淡温和，带有草本和麦芽的香气。',
        bounds: [[55.0, -5], [56.0, -2]] as [number, number][]
    },
    'Islay': {
        name: '艾雷岛',
        color: '#D0021B',
        description: '艾雷岛以其强烈的泥煤烟熏味和海洋风味而闻名。',
        bounds: [[55.5, -6.5], [55.9, -6.0]] as [number, number][]
    },
    'Islands': {
        name: '群岛',
        color: '#9013FE',
        description: '群岛威士忌风味多样，常带有海洋气息和温和的泥煤味。',
        bounds: [[55.5, -7], [59, -5]] as [number, number][]
    },
    'Campbeltown': {
        name: '坎贝尔镇',
        color: '#7ED321',
        description: '坎贝尔镇曾是威士忌之都，其威士忌带有独特的海盐和微咸味。',
        bounds: [[55.4, -5.7], [55.5, -5.5]] as [number, number][]
    }
};

// 酿酒厂数据
export const distilleries = [
    {
        id: 1,
        name: 'Highland Park',
        chineseName: '高原骑士',
        region: 'Islands',
        location: [58.9675, -2.9178],
        description: '成立于1798年，是苏格兰最北端的威士忌酿酒厂。以其平衡的风味和丰富的历史而闻名。特色是使用传统地板麦芽和自家泥煤，创造出独特的蜂蜜甜味和温和的烟熏味。',
        founded: 1798,
        image: '/images/distilleries/highland-park.jpg',
        signature: ['Highland Park 12年', 'Highland Park 18年', 'Highland Park 21年维京荣耀'],
        tastingNotes: ['蜂蜜', '泥煤', '橡木', '海盐', '石楠花'],
        website: 'https://www.highlandparkwhisky.com'
    },
    {
        id: 2,
        name: 'Macallan',
        chineseName: '麦卡伦',
        region: 'Speyside',
        location: [57.4848, -3.2080],
        description: '被誉为威士忌中的劳斯莱斯，麦卡伦以其雪莉桶陈酿威士忌而闻名。酒厂严格控制橡木桶质量，90%的风味来自于优质的雪莉桶。其威士忌具有浓郁的干果香和醇厚的口感。',
        founded: 1824,
        image: '/images/distilleries/macallan.jpg',
        signature: ['Macallan 12年雪莉桶', 'Macallan 18年', 'Macallan Rare Cask'],
        tastingNotes: ['雪莉', '干果', '香料', '橡木', '巧克力'],
        website: 'https://www.themacallan.com'
    },
    {
        id: 3,
        name: 'Laphroaig',
        chineseName: '拉弗格',
        region: 'Islay',
        location: [55.6324, -6.1527],
        description: '拉弗格是艾雷岛最具特色的酿酒厂之一，以其强烈的泥煤烟熏味和药草风味闻名。使用自己的泥煤田和麦芽房，保持传统制作工艺。其威士忌被描述为"令人难忘的海洋风暴中的篝火"。',
        founded: 1815,
        image: '/images/distilleries/laphroaig.jpg',
        signature: ['Laphroaig 10年', 'Laphroaig Quarter Cask', 'Laphroaig Lore'],
        tastingNotes: ['泥煤', '海盐', '药草', '烟熏', '海藻'],
        website: 'https://www.laphroaig.com'
    },
    {
        id: 4,
        name: 'Glenmorangie',
        chineseName: '格兰杰',
        region: 'Highlands',
        location: [57.8263, -4.0810],
        description: '拥有苏格兰最高的蒸馏器，格兰杰以其精致优雅的风味和创新的桶材实验而闻名。使用独特的"男人山谷"泉水源，并在各种特色酒桶中完成陈酿，创造出复杂多变的风味。',
        founded: 1843,
        image: '/images/distilleries/glenmorangie.jpg',
        signature: ['Glenmorangie Original 10年', 'Glenmorangie Signet', 'Glenmorangie 18年'],
        tastingNotes: ['柑橘', '香草', '蜂蜜', '杏仁', '太妃糖'],
        website: 'https://www.glenmorangie.com'
    },
    {
        id: 5,
        name: 'Springbank',
        chineseName: '云顶',
        region: 'Campbeltown',
        location: [55.4258, -5.6089],
        description: '坎贝尔镇现存最古老的家族酿酒厂，是苏格兰仅存的完全在厂内完成所有生产流程的酿酒厂。以其传统工艺和独特的"二次半"蒸馏法著称，产出的威士忌具有复杂的层次感。',
        founded: 1828,
        image: '/images/distilleries/springbank.jpg',
        signature: ['Springbank 10年', 'Springbank 15年', 'Springbank 18年'],
        tastingNotes: ['海盐', '水果', '泥煤', '坚果', '皮革'],
        website: 'https://www.springbank.scot'
    },
    {
        id: 6,
        name: 'Glenkinchie',
        chineseName: '格兰昆奇',
        region: 'Lowlands',
        location: [55.8907, -2.8909],
        description: '被称为"爱丁堡的客厅威士忌"，格兰昆奇代表了低地威士忌的典型特色。其威士忌清新优雅，带有明显的花香和麦芽香气，是低地区蒸馏特色的完美展现。',
        founded: 1825,
        image: '/images/distilleries/glenkinchie.jpg',
        signature: ['Glenkinchie 12年', 'Glenkinchie Distillers Edition', 'Glenkinchie 15年'],
        tastingNotes: ['花香', '麦芽', '蜂蜜', '柑橘', '草本'],
        website: 'https://www.malts.com/en-row/distilleries/glenkinchie'
    },
    {
        id: 7,
        name: 'Talisker',
        chineseName: '泰斯卡',
        region: 'Islands',
        location: [57.3027, -6.3567],
        description: '斯凯岛上唯一的酿酒厂，以其强劲的海洋特性和胡椒般的辛辣感著称。位于海边的地理位置赋予了其威士忌独特的咸味和海洋气息，被誉为"made by the sea"的典范。',
        founded: 1830,
        image: '/images/distilleries/talisker.jpg',
        signature: ['Talisker 10年', 'Talisker Storm', 'Talisker 18年'],
        tastingNotes: ['海盐', '胡椒', '烟熏', '海藻', '柑橘'],
        website: 'https://www.malts.com/en-row/distilleries/talisker'
    },
    {
        id: 8,
        name: 'Glenfiddich',
        chineseName: '格兰菲迪',
        region: 'Speyside',
        location: [57.4550, -3.1285],
        description: '全球最畅销的单一麦芽威士忌品牌，由威廉·格兰特家族创立并延续至今。以其创新精神和始终如一的品质著称。其标志性的三角形酒瓶设计代表了威士忌的三要素：空气、水和麦芽。',
        founded: 1886,
        image: '/images/distilleries/glenfiddich.jpg',
        signature: ['Glenfiddich 12年', 'Glenfiddich 15年', 'Glenfiddich 21年冬日风暴'],
        tastingNotes: ['梨子', '橡木', '麦芽', '香草', '肉桂'],
        website: 'https://www.glenfiddich.com'
    },
    {
        id: 9,
        name: 'Lagavulin',
        chineseName: '拉加维林',
        region: 'Islay',
        location: [55.6355, -6.1264],
        description: '艾雷岛南部海岸线上的标志性酿酒厂，以其浓郁的泥煤味和复杂的风味结构闻名。其16年陈酿被认为是泥煤威士忌的典范之作，展现了完美的平衡感。',
        founded: 1816,
        image: '/images/distilleries/lagavulin.jpg',
        signature: ['Lagavulin 16年', 'Lagavulin 8年', 'Lagavulin Distillers Edition'],
        tastingNotes: ['泥煤', '海鲜', '皮革', '烟熏', '甜味'],
        website: 'https://www.malts.com/en-row/distilleries/lagavulin'
    },
    {
        id: 10,
        name: 'Dalmore',
        chineseName: '大摩',
        region: 'Highlands',
        location: [57.6906, -4.2606],
        description: '以其精致奢华的风格和对优质雪莉桶的执着追求而闻名。酒厂与西班牙顶级雪莉酒庄González Byass长期合作，确保获得最优质的雪莉桶。其威士忌以浓郁的巧克力和橙子风味著称。',
        founded: 1839,
        image: '/images/distilleries/dalmore.jpg',
        signature: ['Dalmore 12年', 'Dalmore 15年', 'Dalmore King Alexander III'],
        tastingNotes: ['橙子', '巧克力', '咖啡', '肉桂', '雪莉'],
        website: 'https://www.thedalmore.com'
    }
]; 