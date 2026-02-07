import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import './index.css';

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOrderClick = (productName = '') => {
    setSelectedProduct(productName);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="app">
      <Navbar onOrderClick={() => handleOrderClick()} />
      <Hero onOrderClick={() => handleOrderClick()} />
      <Features />
      <ProductShowcase onOrderClick={handleOrderClick} />
      <Testimonials />
      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
}

export default App;
