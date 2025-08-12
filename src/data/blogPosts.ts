export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image:string;     //BlogCard的封面圖片
  images: string[]; // BlogPost元件內Carousel的多張圖片
  category: string;
  author: string;
  date: string;
  location: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Kama",
    excerpt: "Discover breathtaking mountain villages and pristine alpine lakes...",
    image:  "https://res.cloudinary.com/dtbj43yha/image/upload/v1749265985/IMG_5722_11zon_uwzvls.jpg",
    images: [
      "https://res.cloudinary.com/dtbj43yha/image/upload/v1749265985/IMG_5722_11zon_uwzvls.jpg",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?auto=format&fit=crop&w=1374&q=80"
    ],
    category: "人像照片",
    author: "Candy糖果",
    date: "Dec 15, 2024",
    location: "Switzerland",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "2Street Food Adventures in Bangkok",
    excerpt: "Navigate the bustling streets of Thailand's capital...",
    image:  "https://res.cloudinary.com/dtbj43yha/image/upload/v1753798709/mountain_jdi9k6.jpg",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?auto=format&fit=crop&w=1740&q=80"
    ],
    category: "Adventure",
    author: "Marcus Williams",
    date: "Dec 12, 2024",
    location: "Bangkok, Thailand",
    readTime: "6 min"
  },
  {
    id: 3,
    title: "3Street Food Adventures in Bangkok",
    excerpt: "Navigate the bustling streets of Thailand's capital...",
    image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1749265674/IMG_5776_11zon_qvqtrb.jpg",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?auto=format&fit=crop&w=1740&q=80"
    ],
    category: "Food",
    author: "Marcus Williams",
    date: "Dec 12, 2024",
    location: "Bangkok, Thailand",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "4Street Food Adventures in Bangkok",
    excerpt: "Navigate the bustling streets of Thailand's capital...",
    image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1749265674/IMG_5777_11zon_tc0x5z.jpg",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?auto=format&fit=crop&w=1740&q=80"
    ],
    category: "Food",
    author: "Marcus Williams",
    date: "Dec 12, 2024",
    location: "Bangkok, Thailand",
    readTime: "6 min"
  },
  {
    id: 5,
    title: "5555555555Street Food Adventures in Bangkok",
    excerpt: "Navigate the bustling streets of Thailand's capital...",
    image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275414/5_z4awqa.png",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?auto=format&fit=crop&w=1740&q=80"
    ],
    category: "Food",
    author: "Marcus Williams",
    date: "Dec 12, 2024",
    location: "Bangkok, Thailand",
    readTime: "6 min"
  },
  {
    id: 6,
    title: "6666666666Street Food Adventures in Bangkok",
    excerpt: "Navigate the bustling streets of Thailand's capital...",
    image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275407/37_iqsazy.png",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?auto=format&fit=crop&w=1740&q=80"
    ],
    category: "Food",
    author: "Marcus Williams",
    date: "Dec 12, 2024",
    location: "Bangkok, Thailand",
    readTime: "6 min"
  },
  {
    id: 7,
    title: "7777777777777777Street Food Adventures in Bangkok",
    excerpt: "Navigate the bustling streets of Thailand's capital...",
    image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275404/38_eft5eg.png",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?auto=format&fit=crop&w=1740&q=80"
    ],
    category: "Food",
    author: "Marcus Williams",
    date: "Dec 12, 2024",
    location: "Bangkok, Thailand",
    readTime: "6 min"
  },
  {
    id: 8,
    title: "8888888888888Street Food Adventures in Bangkok",
    excerpt: "Navigate the bustling streets of Thailand's capital...",
    image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275400/36_alvw5f.png",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?auto=format&fit=crop&w=1740&q=80"
    ],
    category: "Food",
    author: "Marcus Williams",
    date: "Dec 12, 2024",
    location: "Bangkok, Thailand",
    readTime: "6 min"
  },
  // 其他文章...
];
