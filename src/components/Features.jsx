import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wind, Star } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -10, boxShadow: 'var(--shadow-hover)' }}
        style={{
            backgroundColor: 'var(--color-surface)',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-soft)',
            textAlign: 'center',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            transition: 'all 0.3s ease'
        }}
    >
        <div style={{
            width: '70px',
            height: '70px',
            backgroundColor: '#FFF8E1',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: 'var(--color-primary)'
        }}>
            <Icon size={32} />
        </div>
        <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--color-secondary)',
            marginBottom: '1rem'
        }}>{title}</h3>
        <p style={{
            color: 'var(--color-text-muted)',
            lineHeight: '1.7'
        }}>{description}</p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: ShieldCheck,
            title: '100% Purity',
            description: 'We do not compromise on purity. Our Hing reaches you without any adulteration.',
            delay: 0.2
        },
        {
            icon: Wind,
            title: 'Unmatched Aroma',
            description: 'Its strong and enchanting aroma will give your dishes a new identity.',
            delay: 0.4
        },
        {
            icon: Star,
            title: 'Premium Quality',
            description: 'Sourced from selected origins, high-quality Hing that is also beneficial for health.',
            delay: 0.6
        }
    ];

    return (
        <section id="about" style={{ padding: '6rem 2rem', backgroundColor: '#FFFFFF' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '2.5rem',
                            color: 'var(--color-secondary)',
                            marginBottom: '1rem'
                        }}
                    >
                        Why Choose हींग-Aura?
                    </motion.h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: 'var(--color-primary)',
                        margin: '0 auto'
                    }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
