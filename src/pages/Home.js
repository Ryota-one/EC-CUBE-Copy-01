import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TopicRole from '../components/TopicRole';
import NewItemsRole from '../components/NewItemsRole';
import EcCategoryRole from '../components/EcCategoryRole';
import NewsSection from '../components/NewsSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    alert(`${product.name} をカートに追加しました！`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} />
      <Hero />
      
      {/* お店紹介セクション - 新規追加 */}
      <AboutSection />
      
      <TopicRole />

      <NewItemsRole />

      <EcCategoryRole />

      <NewsSection />
      
      {/* 商品一覧 */}
      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">おすすめ商品</h3>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
            <option>新着順</option>
            <option>価格が安い順</option>
            <option>価格が高い順</option>
            <option>人気順</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main> */}

      <Footer />
    </div>
  );
};

export default Home;