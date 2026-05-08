import React from 'react';
import { Instagram, ScanLine } from 'lucide-react';
import { motion } from 'framer-motion';
import instagramQr from '../assets/insta.jpeg';
import hingPackFront from '../assets/hing1.jpeg';

const InstagramSpotlight = () => {
    return (
        <section className="instagram-section">
            <div className="section-shell instagram-grid">
                <motion.div
                    className="instagram-copy"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Follow The Brand</span>
                    <h2 className="section-title">Scan the QR and connect with Hing Aura on Instagram.</h2>
                    <p className="section-copy">
                        Place the camera over the scanner to open the Instagram page from the QR code.
                    </p>
                </motion.div>

                <motion.div
                    className="instagram-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                >
                    <div className="instagram-phone">
                        <div className="instagram-phone-top">
                            <Instagram size={20} />
                            <span>हींग-Aura</span>
                        </div>
                        <div className="instagram-qr-large">
                            <img src={instagramQr} alt="हींग-Aura Instagram QR code" />
                            <motion.div
                                className="qr-scan-line"
                                animate={{ y: ['0%', '760%', '0%'] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </div>
                        <div className="instagram-phone-bottom">
                            <ScanLine size={18} />
                            Scan to open Instagram
                        </div>
                    </div>
                    <motion.img
                        className="instagram-pack"
                        src={hingPackFront}
                        alt="हींग-Aura product pack"
                        animate={{ rotate: [-4, 2, -4], y: [0, -10, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default InstagramSpotlight;
