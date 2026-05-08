import React, { useEffect, useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import logo from '../assets/logo.png';
import '../index.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOrderClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBookClick = () => {
        setIsOpen(false);
        onOrderClick();
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
            <div className="nav-container">
                <a className="brand-link" href="#home" aria-label="हींग-Aura home">
                    <img className="brand-logo" src={logo} alt="हींग-Aura logo" />
                    <span className="brand-name">हींग-Aura</span>
                </a>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a className="nav-link" key={link.name} href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <button className="btn btn-primary nav-book-button" onClick={handleBookClick}>
                        <ShoppingBag size={18} />
                        Book Now
                    </button>
                </div>

                <button
                    className="mobile-toggle"
                    type="button"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((current) => !current)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <a className="nav-link" key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <button className="btn btn-primary" onClick={handleBookClick}>
                        <ShoppingBag size={18} />
                        Book Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
