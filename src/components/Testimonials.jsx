import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
    {
        name: 'Sunita Sharma',
        location: 'New Delhi',
        text: 'I used हींग-Aura for the first time and its aroma changed the taste of my dal.',
        delay: 0,
    },
    {
        name: 'Rajesh Verma',
        location: 'Jaipur',
        text: 'It feels different from regular market heeng. A small pinch is enough for daily cooking.',
        delay: 0.1,
    },
    {
        name: 'Anjali Gupta',
        location: 'Mumbai',
        text: 'The product presentation is clean, and the quality matched what was promised.',
        delay: 0.2,
    },
];

const TestimonialCard = ({ name, location, text, delay }) => (
    <motion.article
        className="testimonial-card"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, delay }}
        whileHover={{ y: -6 }}
    >
        <Quote className="quote-icon" size={26} />
        <p>"{text}"</p>
        <h4>{name}</h4>
        <span className="testimonial-location">{location}</span>
    </motion.article>
);

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="section-shell">
                <div className="section-heading">
                    <span className="section-eyebrow">Customer Notes</span>
                    <h2 className="section-title">Trusted for aroma, taste, and presentation.</h2>
                    <p className="section-copy">Short feedback from customers who use heeng regularly in home cooking.</p>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review) => (
                        <TestimonialCard key={review.name} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
