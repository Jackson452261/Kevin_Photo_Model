import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
 
import { blogPosts } from './data/blogPosts';
import Carousel from './components/Carousel';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header onCategoryFilter={handleCategoryFilter} onSearch={handleSearch} />
            
             {/*   <Hero />*/}
          
              <BlogGrid 
                posts={blogPosts} 
                activeCategory={activeCategory}
                searchQuery={searchQuery}
              />
              {/*<Newsletter /> */}
              <Footer />
            </>
          } />
          <Route path="/post/:id" element={
            <>
              <Header onCategoryFilter={handleCategoryFilter} onSearch={handleSearch} />
              <BlogPost />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;