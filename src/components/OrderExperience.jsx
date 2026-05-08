import React from 'react';
import { CheckCircle2, MessageCircle, PackageCheck, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: MessageCircle,
        title: 'Tap Book',
        copy: 'Open the Hing Aura WhatsApp channel instantly.',
    },
    {
        icon: CheckCircle2,
        title: 'Confirm Quantity',
        copy: 'Share your quantity and delivery details directly.',
    },
    {
        icon: PackageCheck,
        title: 'Packed Cleanly',
        copy: 'Your Dana Heeng is prepared and packed for dispatch.',
    },
    {
        icon: Truck,
        title: 'Delivery Update',
        copy: 'Receive order updates through WhatsApp communication.',
    },
];

const OrderExperience = ({ onOrderClick }) => {
    return (
        <section className="order-section">
            <div className="section-shell">
                <div className="order-panel">
                    <div className="section-heading order-heading">
                        <span className="section-eyebrow">Simple Booking</span>
                        <h2 className="section-title">No cart. No complicated checkout. Just WhatsApp.</h2>
                        <p className="section-copy">
                            A faster order flow for customers who prefer direct confirmation before delivery.
                        </p>
                    </div>

                    <div className="order-steps">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.article
                                    className="order-step"
                                    key={step.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.45, delay: index * 0.08 }}
                                >
                                    <div className="order-step-number">0{index + 1}</div>
                                    <div className="order-step-icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.copy}</p>
                                </motion.article>
                            );
                        })}
                    </div>

                    <button className="btn btn-primary order-cta" onClick={onOrderClick}>
                        <MessageCircle size={20} />
                        Start Booking
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OrderExperience;
