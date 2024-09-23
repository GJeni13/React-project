// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => (item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (id, quantity) => {
    setCart(cart.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
            <Route path="/products/:id" element={<ProductDetailsPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
