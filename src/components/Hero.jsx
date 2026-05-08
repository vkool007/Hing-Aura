import React from 'react';
import { ArrowDown, BadgeCheck, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import hingPackFront from '../assets/hing1.jpeg';
import hingPackBack from '../assets/hing2.jpeg';

const Hero = ({ onOrderClick }) => {
    return (
        <section id="home" className="hero hero-modern">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="section-shell hero-grid">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="hero-kicker">
                        <Sparkles size={16} />
                        Premium Dana Heeng
                    </span>
                    <h1 className="hero-title">
                        A modern heeng brand for everyday Indian kitchens.
                    </h1>
                    <p className="hero-copy">
                        Premium Quality Compounded “Dana Heeng” with refined presentation, bold aroma, and one-tap WhatsApp booking.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={onOrderClick}>
                            <MessageCircle size={20} />
                            Book on WhatsApp
                        </button>
                        <a className="btn btn-outline-dark" href="#products">
                            <ArrowDown size={20} />
                            See Product
                        </a>
                    </div>

                    <div className="hero-metrics">
                        <div>
                            <strong>₹340</strong>
                            <span>Current price</span>
                        </div>
                        <div>
                            <strong>FSSAI</strong>
                            <span>22725143000306</span>
                        </div>
                        <div>
                            <strong>Hathras</strong>
                            <span>UP 204101</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-product-stage"
                    initial={{ opacity: 0, x: 34, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <motion.div
                        className="hero-product-card hero-product-card-front"
                        animate={{ y: [0, -12, 0], rotate: [-2, 1, -2] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img src={hingPackFront} alt="हींग-Aura product front pack" />
                    </motion.div>
                    <motion.div
                        className="hero-product-card hero-product-card-back"
                        animate={{ y: [0, 14, 0], rotate: [5, 2, 5] }}
                        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img src={hingPackBack} alt="हींग-Aura product back pack" />
                    </motion.div>
                    <motion.div
                        className="hero-badge"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <BadgeCheck size={22} />
                        Quality Checked
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
