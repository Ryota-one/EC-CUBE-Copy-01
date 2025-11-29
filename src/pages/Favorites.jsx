// pages/Favorites.jsx
import React from 'react';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const favoriteItems = []; // 空の配列

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">お気に入り</h1>
      
      {favoriteItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg mb-4">お気に入り商品はまだありません</p>
          <p className="text-gray-500 text-sm">商品ページのハートアイコンをクリックして、お気に入りに追加できます</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">¥{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;