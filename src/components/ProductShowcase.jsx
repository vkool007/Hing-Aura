import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag } from 'lucide-react';

const ProductCard = ({ title, weight, price, delay, onOrder }) => (
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
            height: '260px',
            backgroundColor: '#FAFAFA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration in image area */}
            <div style={{
                position: 'absolute',
                width: '150%',
                height: '150%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(0,0,0,0) 70%)',
                top: '-25%',
                left: '-25%'
            }}></div>

            {/* Placeholder for Product Image - Styled to look premium */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                    width: '140px',
                    height: '180px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #F4C430 100%)',
                    borderRadius: '12px',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    zIndex: 1,
                    flexDirection: 'column',
                    gap: '0.5rem',
                    border: '1px solid rgba(255,255,255,0.4)'
                }}
            >
                <span style={{ fontSize: '2.5rem' }}>✨</span>
                <span style={{ fontSize: '1.2rem' }}>{weight}</span>
            </motion.div>
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
                Premium हींग-Aura Asafoetida
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
                    onClick={() => onOrder(title)}
                    style={{
                        backgroundColor: 'var(--color-secondary)',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
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
                    <ShoppingBag size={22} />
                </button>
            </div>
        </div>
    </motion.div>
);

const ProductShowcase = ({ onOrderClick }) => {
    const products = [
        { title: 'Royal Hing', weight: '25g', price: 199, delay: 0 },
        { title: 'Premium Hing', weight: '50g', price: 349, delay: 0.2 },
        { title: 'Classic Hing', weight: '100g', price: 649, delay: 0.4 },
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
                            Our Products
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ color: 'var(--color-text-muted)', maxWidth: '500px', fontSize: '1.1rem' }}
                        >
                            A unique blend of purity and taste. Choose according to your needs.
                        </motion.p>
                    </div>
                    <button
                        onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            padding: '1rem 2.5rem',
                            border: '1px solid var(--color-secondary)',
                            borderRadius: '50px',
                            color: 'var(--color-secondary)',
                            fontWeight: '600',
                            background: 'transparent',
                            cursor: 'pointer'
                        }}>
                        View All
                    </button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} onOrder={onOrderClick} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
