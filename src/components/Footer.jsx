import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{
            backgroundColor: '#2D1F16', // Deep Wood/Coffee Brown for strong contrast
            color: '#FFFFFF',
            padding: '4rem 2rem 2rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                marginBottom: '3rem'
            }}>
                {/* Brand */}
                <div>
                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        color: 'var(--color-primary)', // Gold text
                        marginBottom: '1rem'
                    }}>
                        हींग-Aura
                    </h2>
                    <p style={{ opacity: 0.8, lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        Mystery of Health with Taste. We bring the finest Hing directly from the fields to your home.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                            <a key={idx} href="#" style={{
                                color: 'var(--color-primary)',
                                transition: 'color 0.3s'
                            }}>
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* FSSAI Banner */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        border: '1px solid #aaa',
                        borderRadius: '4px',
                        backgroundColor: '#fff',
                        color: '#333'
                    }}>
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>fssai</span>
                        <span style={{ fontSize: '0.8rem' }}>Lic. No. 1234567890</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                        Quick Links
                    </h3>
                    <ul style={{ listStyle: 'none', opacity: 0.8 }}>
                        {['Home', 'About', 'Products', 'Contact'].map((item) => (
                            <li key={item} style={{ marginBottom: '0.8rem' }}>
                                <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                        Contact Us
                    </h3>
                    <ul style={{ listStyle: 'none', opacity: 0.8 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                            <MapPin size={18} color="var(--color-primary)" />
                            <span>123, Spice Market, Khari Baoli, Delhi - 110006</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                            <Phone size={18} color="var(--color-primary)" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                            <Mail size={18} color="var(--color-primary)" />
                            <span>contact@hingaura.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div style={{
                textAlign: 'center',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                opacity: 0.6
            }}>
                © {new Date().getFullYear()} हींग-Aura. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
