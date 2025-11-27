import React from 'react';

const CategorySection = () => {
  // カテゴリーデータ
  const categories = [
    { id: 1, name: '新商品', icon: '🆕', link: '#' },
    { id: 2, name: 'ケーキ', icon: '🍰', link: '#' },
    { id: 3, name: '焼き菓子', icon: '🍪', link: '#' },
    { id: 4, name: 'チョコレート', icon: '🍫', link: '#' },
    { id: 5, name: 'アイス', icon: '🍨', link: '#' },
    { id: 6, name: 'ギフト', icon: '🎁', link: '#' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          カテゴリーから探す
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            
              key={category.id}
              href={category.link}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;