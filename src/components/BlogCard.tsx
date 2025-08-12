import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  location: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {/*  {post.title}*/}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3">
          {/*  {post.excerpt}*/}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span> {post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{post.location}</span>
          </div>
        </div>

        {/* Read More */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            {/*  <span className="text-sm text-slate-500">{post.readTime} read</span> */}
            <Link 
              to={`/post/${post.id}`}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
            >
             查看更多相片 →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;