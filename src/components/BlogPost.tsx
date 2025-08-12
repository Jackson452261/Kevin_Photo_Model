import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, User, ArrowLeft, Share2, Heart } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Carousel from './Carousel';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image / Carousel */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        {post.images && post.images.length > 1 ? (
          <Carousel images={post.images} />
        ) : (
          <img
            src={post.image || post.images?.[0]}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-8 left-8 bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full transition-all duration-200 shadow-lg"
        >
          <ArrowLeft size={20} />
        </Link>

        {/* Category Badge */}
        <div className="absolute top-8 right-8">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{post.location}</span>
            </div>
            <span className="text-slate-500">{post.readTime} read</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pb-8 border-b border-slate-200">
            <button className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors">
              <Heart size={20} />
              <span>Like</span>
            </button>
            <button className="flex items-center gap-2 text-slate-600 hover:text-blue-500 transition-colors">
              <Share2 size={20} />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* ... 保留你原有的內容段落 */}
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              {post.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">{post.author}</h3>
              <p className="text-slate-600">Travel Writer & Photographer</p>
            </div>
          </div>
          <p className="text-slate-700">
            Passionate about discovering hidden gems and sharing authentic travel experiences. 
            Follow along for more adventures and insider tips from around the world.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
