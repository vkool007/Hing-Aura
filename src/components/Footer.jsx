import React from 'react';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import instagramQr from '../assets/insta.jpeg';

const WHATSAPP_LINK = 'https://whatsapp.com/channel/0029Vb7CwKFLikgCUnbi681V';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="section-shell">
                <div className="footer-grid">
                    <div>
                        <h2 className="footer-brand">हींग-Aura</h2>
                        <p>Mystery of Health with Taste. Premium compounded Dana Heeng for modern Indian kitchens.</p>
                        <div className="footer-socials">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="हींग-Aura WhatsApp channel">
                                <MessageCircle size={20} />
                            </a>
                            <a href="#contact" aria-label="हींग-Aura Instagram QR">
                                <Instagram size={20} />
                            </a>
                            <a href="#contact" aria-label="हींग-Aura Facebook">
                                <Facebook size={20} />
                            </a>
                        </div>
                        <div className="fssai-badge">
                            <strong>FSSAI</strong>
                            <span>22725143000306</span>
                        </div>
                    </div>

                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            {['Home', 'About', 'Products', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a className="footer-link" href={`#${item.toLowerCase()}`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li className="contact-item">
                                <MapPin size={18} />
                                <span>Aligarh Road, NH Hathras, UP 204101</span>
                            </li>
                            <li className="contact-item">
                                <Phone size={18} />
                                <a className="footer-link" href="tel:+919193868938">+91 91938 68938</a>
                            </li>
                            <li className="contact-item">
                                <Mail size={18} />
                                <a className="footer-link" href="mailto:Support@heengaura.com">Support@heengaura.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Instagram QR</h3>
                        <div className="instagram-qr">
                            <img src={instagramQr} alt="हींग-Aura Instagram QR code" />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    © {new Date().getFullYear()} हींग-Aura. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
