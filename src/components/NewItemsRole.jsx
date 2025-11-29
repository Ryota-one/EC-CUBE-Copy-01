import React from 'react';

const NewItemsSection = () => {
  const products = [
    {
      id: 1,
      name: '彩のジェラート"CUBE"',
      image: '/images/cube-1.png',
      price: 2800
    },
    {
      id: 2,
      name: 'チェリーアイスサンド',
      image: '/images/sand-1.png',
      price: 3080
    },
    {
      id: 3,
      name: '彩のジェラート"CUBE" NEO',
      image: '/images/no_image_product.png',
      price: 2500
    },

  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           <div className="pt-10 mt-5">
                <h2 className="text-2xl font-bold text-center mb-1">New item</h2>
                <p className="text-center">ー</p>
                <h3 className="text-sm text-center">新着商品</h3>
                <a href="#" className="flex items-center justify-center bg-black text-white p-2 text-sm  m-2 w-1/4 inline-block mx-auto">
                more
                </a>
           </div>
        
         {products.map((product) => (
            <div key={product.id} className="overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover "
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
                <p className="text-sm ">¥{product.price.toLocaleString()}（税込み）</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewItemsSection;