import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-64 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center text-8xl">
        {product.image}
      </div>
      
      <div className="p-4">
        <span className="text-xs text-gray-500 font-medium">{product.category}</span>
        <h4 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{product.name}</h4>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">¥{product.price.toLocaleString()}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;