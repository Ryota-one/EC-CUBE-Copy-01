import React from 'react';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';

const Header = ({ cartCount = 0 }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <h1 className="text-2xl font-bold text-gray-900">EC-CUBE</h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="商品を検索"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-900" />
            <Heart className="h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-900" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-12 items-center">
            <a href="../pages/Contact.js" className="text-sm font-medium text-gray-700 hover:text-gray-900">新商品</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">特集</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">ケーキ</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">焼き菓子</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">セール</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;