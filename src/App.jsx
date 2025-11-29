import Home from './pages/Home';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import Header from './components/Header';
import MyPage from './pages/MyPage';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Cart from './pages/Cart';


function App() {

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  return (
    <Router>
      {/* <Header cartCount={cartCount} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/list" element={<ProductListPage />} />
        <Route path="./pages/MyPage.js"/>
        <Route path="/mypage" element={<MyPage />} />      {/* to="/mypage" */}
        <Route path="/favorites" element={<Favorites />} /> {/* to="/favorites" */}
        <Route path="/login" element={<Login />} />         {/* to="/login" */}
        <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* to="/cart" */}
      </Routes>
    </Router>
  );
}

export default App;