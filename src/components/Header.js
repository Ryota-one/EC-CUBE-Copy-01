import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, Heart, ChevronDown } from 'lucide-react';

const Header = ({ cartCount = 0 }) => {
  const [isGelatoOpen, setIsGelatoOpen] = useState(false);
  const [isIceSandOpen, setIsIceSandOpen] = useState(false);

  return (
    <header className="flex-items-center  bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pr-7 h-16">

            {/* 検索バー */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="flex w-full">
              {/* セレクトボックス */}
              <select className="border border-gray-300 rounded-l-full px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500  cursor-pointer">
                <option>全ての商品</option>
                <option>新入荷</option>
                <option>ジェラート</option>
                <option>彩のデザート</option>
                <option>CUBE</option>
                <option>アイスサンド</option>
                <option>フルーツ</option>
              </select>
              
              {/* 検索入力 */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="商品を検索"
                  className="w-full px-4 py-2 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* ユーザーメニュー */}
          <div className="flex items-center space-x-4">
            <Link to="/mypage" className="hover:text-blue-600 transition">
              <User className="h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-900" />
            </Link>
            <Link to="/favorites" className="hover:text-blue-600 transition">
              <Heart className="h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-900" />
            </Link>
            <Link to="/cart" className="relative hover:text-blue-600 transition">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      
      {/* ロゴ */}
          <div className="flex items-center justify-between mx-auto pt-5 ">
            <div></div>
            <Menu className="h-6 w-6 cursor-pointer md:hidden" />
            <Link to="/" className="text-2xl md:text-[2.5rem] font-bold  hover:text-blue-600 transition">
              EC-CUBE SHOP
            </Link>
            <div></div>
          </div>

      {/* ナビゲーション */}
      <nav className="bg-white pt-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div></div>
          <div className="flex space-x-8 h-12 items-center">
            {/* 新入荷 */}
            <Link 
              to="/products/list" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              新入荷
            </Link>
            
            {/* ジェラート（ドロップダウン） */}
            <div 
              className="relative"
              onMouseEnter={() => setIsGelatoOpen(true)}
              onMouseLeave={() => setIsGelatoOpen(false)}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition h-12">
                ジェラート
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isGelatoOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-b-lg shadow-lg py-2 animate-fadeIn z-50">
                  <Link
                    to="/products/list?category_id=1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    onClick={() => setIsGelatoOpen(false)}
                  >
                    すべてのジェラート
                  </Link>
                  <Link
                    to="/products/list?category_id=1&subcategory=cube"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    onClick={() => setIsGelatoOpen(false)}
                  >
                    CUBE（限定フレーバー）
                  </Link>
                </div>
              )}
            </div>

            {/* アイスサンド（ドロップダウン） */}
            <div 
              className="relative"
              onMouseEnter={() => setIsIceSandOpen(true)}
              onMouseLeave={() => setIsIceSandOpen(false)}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition h-12">
                アイスサンド
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isIceSandOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-b-lg shadow-lg py-2 animate-fadeIn z-50">
                  <Link
                    to="/products/list?category_id=5"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    onClick={() => setIsIceSandOpen(false)}
                  >
                    すべてのアイスサンド
                  </Link>
                  <Link
                    to="/products/list?category_id=5&subcategory=fruits"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    onClick={() => setIsIceSandOpen(false)}
                  >
                    フルーツサンド
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;