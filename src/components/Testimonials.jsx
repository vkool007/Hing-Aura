import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, location, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        style={{
            backgroundColor: 'var(--color-surface)',
            padding: '2rem',
            borderRadius: '16px',
            position: 'relative',
            marginTop: '1rem',
            boxShadow: 'var(--shadow-soft)',
            border: '1px solid var(--color-border)'
        }}
    >
        <div style={{
            position: 'absolute',
            top: '-15px',
            left: '20px',
            backgroundColor: 'var(--color-primary)',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        }}>
            <Quote size={16} />
        </div>

        <p style={{
            fontStyle: 'italic',
            color: 'var(--color-text-muted)',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
        }}>
            "{text}"
        </p>

        <div>
            <h4 style={{
                fontSize: '1.1rem',
                color: 'var(--color-secondary)',
                marginBottom: '0.2rem'
            }}>{name}</h4>
            <span style={{
                fontSize: '0.85rem',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>{location}</span>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const reviews = [
        {
            name: 'Sunita Sharma',
            location: 'New Delhi',
            text: 'I used हींग-Aura for the first time and honestly, its aroma changed the taste of my Dal. Truly excellent quality.',
            delay: 0
        },
        {
            name: 'Rajesh Verma',
            location: 'Jaipur',
            text: 'It is very different and pure compared to what is available in the market. Just a small pinch is enough. Now I only use this.',
            delay: 0.2
        },
        {
            name: 'Anjali Gupta',
            location: 'Mumbai',
            text: 'The packaging is very good and delivery was on time. The guarantee of purity given was absolutely correct.',
            delay: 0.4
        }
    ];

    return (
        <section id="testimonials" style={{ padding: '6rem 2rem', backgroundColor: '#FFFFFF' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '2.5rem',
                            color: 'var(--color-secondary)'
                        }}
                    >
                        Customer Reviews
                    </motion.h2>
                    <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                        See what our customers have to say about हींग-Aura
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {reviews.map((review, index) => (
                        <TestimonialCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
