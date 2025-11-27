import React from 'react';

const FeaturedSection = () => {
  // 特集データ
  const features = [
    {
      id: 1,
      title: 'バレンタイン特集',
      description: '大切な人へ想いを込めたチョコレートを',
      image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&h=400&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: '春の新商品',
      description: '季節限定のフレッシュなスイーツ',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'ギフトセット',
      description: '贈り物に最適な詰め合わせ',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=400&fit=crop',
      link: '#'
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">特集</h2>
          <p className="text-gray-600">季節やイベントに合わせたおすすめ商品</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            
              key={feature.id}
              href={feature.link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <span className="text-blue-600 font-medium group-hover:underline">
                  詳しく見る →
                </span>
              </div>
            </a>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default FeaturedSection;