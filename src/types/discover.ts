export interface Post {
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

export interface Comment {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    likes: number;
    createdAt: string;
} 