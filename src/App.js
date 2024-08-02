import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/index';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const navigate = useNavigate();

  const addToCart = (property) => {
    setCart([...cart, { ...property, quantity: 2 }]); 
    navigate('/cart');
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter(property => property.id !== propertyId));
  };

  const updateQuantity = (propertyId, quantity) => {
    setCart(cart.map(property =>
      property.id === propertyId ? { ...property, quantity } : property
    ));
  };

  const handleCheckout = () => {
    setIsCheckout(true);
    navigate('/checkout');
  };

  const handleBackToCart = () => {
    setIsCheckout(false);
    navigate('/cart');
  };

  const handleBackToPropertyList = () => {
    setIsCheckout(false);
    navigate('/property-list');
  };

  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property-list" element={<PropertyList addToCart={addToCart}/>} />
          <Route path="/cart" element={
            isCheckout ? (
              <Checkout cart={cart} onBackToCart={handleBackToCart} />
            ) : (
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                onCheckout={handleCheckout}
                onBackToPropertyList={handleBackToPropertyList}
              />
            )
          } />
          <Route path="/checkout" element={
          <Checkout 
            cart={cart}
            onBackToCart={handleBackToCart}
          />
        } />
        </Routes>
      </div>
  );
};

export default App;
