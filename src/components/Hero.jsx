import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOrderClick }) => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Clean elegant gradient for maximum readability
            background: 'radial-gradient(circle at center, #FFF8E1 0%, #FFFFFF 100%)',
            padding: '0 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Elements - Abstract Spice Interpretation */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '50vw',
                    height: '50vw',
                    border: '1px solid rgba(75, 54, 33, 0.05)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }}
            />

            <div className="hero-content" style={{
                textAlign: 'center',
                maxWidth: '900px',
                zIndex: 1
            }}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'block',
                        fontSize: '1.4rem',
                        color: 'var(--color-primary)',
                        marginBottom: '1rem',
                        fontWeight: '600',
                        letterSpacing: '4px',
                        textTransform: 'uppercase'
                    }}
                >
                    Mystery of Health with Taste
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        color: 'var(--color-secondary)',
                        marginBottom: '2rem',
                        lineHeight: 1.1,
                    }}
                >
                    हींग-<span style={{ color: 'var(--color-primary)' }}>Aura</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        color: 'var(--color-text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '650px',
                        margin: '0 auto 3.5rem',
                        lineHeight: '1.8'
                    }}
                >
                    Experience the ancient secret of purity. Elevate your culinary creations with the finest, most aromatic Asafoetida.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                >
                    <button
                        onClick={onOrderClick}
                        style={{
                            padding: '1.2rem 3rem',
                            fontSize: '1.2rem',
                            backgroundColor: 'var(--color-secondary)',
                            color: 'white',
                            borderRadius: '50px',
                            boxShadow: '0 10px 25px rgba(75, 54, 33, 0.25)',
                            transition: 'all 0.3s ease',
                            fontWeight: 'bold',
                            letterSpacing: '0.5px'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 15px 30px rgba(75, 54, 33, 0.35)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 10px 25px rgba(75, 54, 33, 0.25)';
                        }}
                    >
                        Order Now
                    </button>
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            padding: '1.2rem 3rem',
                            fontSize: '1.2rem',
                            backgroundColor: 'transparent',
                            color: 'var(--color-secondary)',
                            border: '2px solid var(--color-secondary)',
                            borderRadius: '50px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'var(--color-secondary)';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'var(--color-secondary)';
                        }}
                    >
                        Our Story
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
