import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import '../index.css';

const Navbar = ({ onOrderClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '0.8rem 2rem',
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(255, 248, 225, 0.95)' : 'transparent',
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none'
        }}>
            <div className="nav-container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Logo */}
                <div className="logo" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    cursor: 'pointer'
                }}>
                    <img src="/src/assets/logo.png" alt="हींग-Aura Logo" style={{ height: '50px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} />
                    <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: 'var(--color-primary)',
                        display: 'none'
                    }}>
                        हींग-Aura
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                textDecoration: 'none',
                                color: 'var(--color-secondary)',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={onOrderClick}
                        style={{
                            backgroundColor: 'var(--color-secondary)',
                            color: 'white',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 10px rgba(75, 54, 33, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'var(--color-primary)';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'var(--color-secondary)';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        <ShoppingBag size={18} />
                        Shop Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer', color: 'var(--color-secondary)' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
