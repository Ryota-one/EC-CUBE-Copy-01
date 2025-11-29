import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid, List, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';

const ProductListPage = () => {
  // URLパラメータを取得
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryIdFromUrl = searchParams.get('category_id');

  // 状態管理
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [sortBy, setSortBy] = useState('new');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // カテゴリー一覧とIDマップ
  const categoryMap = {
    1: 'ジェラート',
    5: 'アイスサンド'
  };

  const categories = ['すべて', ...new Set(products.map(p => p.category))];

  // URLパラメータに基づいてカテゴリーを設定
  useEffect(() => {
    if (categoryIdFromUrl) {
      const categoryName = categoryMap[categoryIdFromUrl];
      if (categoryName) {
        setSelectedCategory(categoryName);
      }
    }
  }, [categoryIdFromUrl]);

  // フィルタリングとソート
  const filteredAndSortedProducts = useMemo(() => {
    // カテゴリーフィルター
    let filtered = selectedCategory === 'すべて'
      ? products
      : products.filter(p => p.category === selectedCategory);

    // ソート
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'new':
          return new Date(b.arrivalDate) - new Date(a.arrivalDate);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  // ページネーション
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);

  // カテゴリー変更時にURLパラメータも更新
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    
    // URLパラメータを更新
    if (category === 'すべて') {
      setSearchParams({});
    } else {
      const categoryId = Object.keys(categoryMap).find(key => categoryMap[key] === category);
      if (categoryId) {
        setSearchParams({ category_id: categoryId });
      }
    }
  };

  // カートに追加
  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    alert(`${product.name} をカートに追加しました！`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* パンくずリスト */}
        <nav className="flex mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">
            {selectedCategory === 'すべて' ? '商品一覧' : selectedCategory}
          </span>
        </nav>

        {/* ページタイトル */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {selectedCategory === 'すべて' ? '商品一覧' : selectedCategory}
          </h1>
          <p className="text-gray-600 mt-2">
            {selectedCategory === 'すべて' 
              ? 'すべての商品を表示しています' 
              : `${selectedCategory}の商品一覧です`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* サイドバー（カテゴリーフィルター） */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">カテゴリー</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                      <span className="float-right text-sm">
                        ({category === 'すべて' 
                          ? products.length 
                          : products.filter(p => p.category === category).length})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* メインコンテンツ */}
          <div className="flex-1">
            {/* ツールバー */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* 商品数 */}
                <div className="text-gray-600">
                  {filteredAndSortedProducts.length}件の商品
                </div>

                <div className="flex items-center gap-4">
                  {/* 表示切替 */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      title="グリッド表示"
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      title="リスト表示"
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>

                  {/* 並び替え */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="new">新着順</option>
                    <option value="price-low">価格が安い順</option>
                    <option value="price-high">価格が高い順</option>
                    <option value="name">名前順</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 商品一覧 */}
            {currentProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">該当する商品がありません</p>
              </div>
            ) : viewMode === 'grid' ? (
              // グリッド表示
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
                    <Link to={`/products/${product.id}`}>
                      <div className="relative h-64 bg-gradient-to-br from-pink-100 to-blue-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-size="20">No Image</text></svg>';
                          }}
                        />
                        {/* 新着バッジ */}
                        {new Date(product.arrivalDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
                          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            NEW
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <span className="text-xs text-gray-500">{product.category}</span>
                      <Link to={`/products/${product.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-gray-900">¥{product.price.toLocaleString()}</p>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center"
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          カート
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // リスト表示
              <div className="space-y-4">
                {currentProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col sm:flex-row">
                    <Link to={`/products/${product.id}`} className="flex-shrink-0">
                      <div className="w-full sm:w-48 h-48 bg-gradient-to-br from-pink-100 to-blue-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-size="20">No Image</text></svg>';
                          }}
                        />
                      </div>
                    </Link>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-gray-500">{product.category}</span>
                        <Link to={`/products/${product.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-900">¥{product.price.toLocaleString()}</p>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                          カートに入れる
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ページネーション */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                  >
                    前へ
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 border rounded-lg transition ${
                        currentPage === i + 1
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                  >
                    次へ
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductListPage;