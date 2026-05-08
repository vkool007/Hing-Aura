import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

const WHATSAPP_LINK = 'https://whatsapp.com/channel/0029Vb7CwKFLikgCUnbi681V';

function App() {
  const handleOrderClick = () => {
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app">
      <Navbar onOrderClick={() => handleOrderClick()} />
      <Hero onOrderClick={() => handleOrderClick()} />
      <Features />
      <ProductShowcase onOrderClick={handleOrderClick} />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
