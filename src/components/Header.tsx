import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  onCategoryFilter: (category: string) => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCategoryFilter, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  {/*  const categories = [  '人像照片', '風景照片', 'Food', 'Nature', 'City'];*/}

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/"
              className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Kevin
            </Link>
          </div>

          {/* Desktop Navigation  
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryFilter(category)}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </nav>
          */}
          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              </div>
            </form>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="sm:hidden">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                </div>
              </form>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategoryFilter(category);
                      setIsMenuOpen(false);
                    }}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;