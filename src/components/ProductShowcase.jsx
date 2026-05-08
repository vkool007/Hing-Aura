import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import hingPackFront from '../assets/hing1.jpeg';
import hingPackBack from '../assets/hing2.jpeg';

const product = {
    title: 'Premium Quality Compounded “Dana Heeng”',
    price: 340,
    highlights: ['Compounded Dana Heeng', 'Strong aroma', 'Daily kitchen use'],
    images: [hingPackFront, hingPackBack],
};

const ProductShowcase = ({ onOrderClick }) => {
    return (
        <section id="products" className="product-section">
            <div className="section-shell">
                <div className="product-header">
                    <div>
                        <span className="section-eyebrow">Featured Product</span>
                        <h2 className="section-title">One focused product. Clear pricing. Quick booking.</h2>
                        <p className="section-copy">
                            The current हींग-Aura pack is available now and can be booked directly through WhatsApp.
                        </p>
                    </div>
                    <button className="btn btn-primary" onClick={onOrderClick}>
                        <MessageCircle size={20} />
                        Book on WhatsApp
                    </button>
                </div>

                <motion.article
                    className="product-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="product-gallery">
                        {product.images.map((image, index) => (
                            <motion.img
                                className="product-image"
                                key={image}
                                src={image}
                                alt={`${product.title} pack ${index + 1}`}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.25 }}
                            />
                        ))}
                    </div>

                    <div className="product-details">
                        <span className="product-tag">Dana Heeng</span>
                        <h3>{product.title}</h3>
                        <p className="product-description">
                            Premium quality compounded heeng made for daily cooking, consistent aroma, and easy ordering.
                        </p>
                        <div className="product-highlights">
                            {product.highlights.map((highlight) => (
                                <span key={highlight}>{highlight}</span>
                            ))}
                        </div>
                        <div className="product-price-row">
                            <div className="product-price">₹{product.price}</div>
                            <button className="btn btn-primary" onClick={onOrderClick}>
                                <MessageCircle size={20} />
                                Book Now
                            </button>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
};

export default ProductShowcase;
