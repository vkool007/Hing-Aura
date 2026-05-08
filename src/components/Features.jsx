import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Leaf, Sparkles } from 'lucide-react';

const features = [
    {
        icon: BadgeCheck,
        title: 'Quality Checked',
        description: 'Prepared with a focus on purity, consistency, and dependable everyday use.',
        delay: 0.1,
    },
    {
        icon: Sparkles,
        title: 'Strong Aroma',
        description: 'A small pinch brings a distinct heeng fragrance to dals, sabzis, pickles, and tadka.',
        delay: 0.2,
    },
    {
        icon: Leaf,
        title: 'Kitchen Ready',
        description: 'Compounded Dana Heeng packed for practical storage, clean handling, and daily cooking.',
        delay: 0.3,
    },
];

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.article
        className="feature-card"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, delay }}
        whileHover={{ y: -6 }}
    >
        <div className="feature-icon">
            <Icon size={26} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </motion.article>
);

const Features = () => {
    return (
        <section id="about" className="features-section">
            <div className="section-shell">
                <div className="section-heading">
                    <span className="section-eyebrow">Why Choose Us</span>
                    <h2 className="section-title">Premium heeng with a cleaner, more reliable experience.</h2>
                    <p className="section-copy">
                        हींग-Aura is positioned for customers who want authentic aroma, modern packaging, and simple WhatsApp booking.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
