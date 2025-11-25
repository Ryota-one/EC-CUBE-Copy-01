import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
// // Pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Guide from './pages/Guide';
// import Contact from './pages/Contact';
// import FAQ from './pages/FAQ';
// import NewProducts from './pages/NewProducts';
// import Cart from './pages/Cart';
// import { Privacy, Terms } from './pages/Privacy';

function App() {
  return (
    <Router>
      <Routes>
        {/* メインページ */}
        <Route path="/" element={<Home />} />
        <Route path="/products/list" element={<ProductListPage />} />
        {/* 商品関連 */}
        {/* <Route path="/new-products" element={<NewProducts />} />
        <Route path="/cart" element={<Cart />} /> */}
        
        {/* 会社情報 */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         */}
        {/* サポート */}
        {/* <Route path="/guide" element={<Guide />} />
        <Route path="/faq" element={<FAQ />} /> */}
        
        {/* 法的ページ */}
        {/* <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} /> */}
      </Routes>
    </Router>
  );
}

export default App;