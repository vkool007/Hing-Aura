import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import hingPackFront from '../assets/hing1.jpeg';
import hingPackBack from '../assets/hing2.jpeg';

const ProductCard = ({ title, price, delay, images, onOrder }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -12, boxShadow: 'var(--shadow-hover)' }}
        style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-soft)',
            position: 'relative',
            border: '1px solid var(--color-border)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        <div style={{
            minHeight: '360px',
            backgroundColor: '#fff',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            alignItems: 'stretch',
            position: 'relative',
            overflow: 'hidden',
            gap: '1rem',
            padding: '1.5rem'
        }}>
            {/* Background decoration in image area */}
            <div style={{
                position: 'absolute',
                width: '150%',
                height: '150%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, rgba(0,0,0,0) 70%)',
                top: '-25%',
                left: '-25%'
            }}></div>

            {images.map((image, index) => (
                <motion.img
                    key={image}
                    src={image}
                    alt={`${title} pack ${index + 1}`}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '300px',
                        objectFit: 'contain',
                        zIndex: 1,
                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                    }}
                />
            ))}
        </div>

        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--color-secondary)',
                marginBottom: '0.5rem'
            }}>
                {title}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
                Premium quality compounded Dana Heeng from हींग-Aura.
            </p>

            <div style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: 'var(--color-primary)'
                }}>
                    ₹{price}
                </div>
                <button
                    onClick={onOrder}
                    aria-label="Book order on WhatsApp"
                    style={{
                        backgroundColor: 'var(--color-secondary)',
                        color: 'white',
                        width: '56px',
                        height: '50px',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                        boxShadow: '0 5px 15px rgba(75, 54, 33, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                    }}
                >
                    <MessageCircle size={22} />
                </button>
            </div>
        </div>
    </motion.div>
);

const ProductShowcase = ({ onOrderClick }) => {
    const products = [
        {
            title: 'Premium Quality Compounded “Dana Heeng”',
            price: 340,
            delay: 0,
            images: [hingPackFront, hingPackBack],
        },
    ];

    return (
        <section id="products" style={{ padding: '8rem 2rem', backgroundColor: '#FFF8E1' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    marginBottom: '4rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: '3rem',
                                color: 'var(--color-secondary)',
                                marginBottom: '0.5rem'
                            }}
                        >
                            Our Product
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ color: 'var(--color-text-muted)', maxWidth: '500px', fontSize: '1.1rem' }}
                        >
                            Our current premium compounded Dana Heeng pack is available for booking on WhatsApp.
                        </motion.p>
                    </div>
                    <button
                        onClick={onOrderClick}
                        style={{
                            padding: '1rem 2.5rem',
                            border: '1px solid var(--color-secondary)',
                            borderRadius: '50px',
                            color: 'var(--color-secondary)',
                            fontWeight: '600',
                            background: 'transparent',
                            cursor: 'pointer'
                        }}>
                        Book on WhatsApp
                    </button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {products.map((product) => (
                        <ProductCard key={product.title} {...product} onOrder={onOrderClick} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
