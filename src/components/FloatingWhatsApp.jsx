import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = ({ onOrderClick }) => {
    return (
        <motion.button
            className="floating-whatsapp"
            type="button"
            onClick={onOrderClick}
            aria-label="Book on WhatsApp"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.45 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
        >
            <span className="floating-pulse" />
            <MessageCircle size={22} />
            <span>Book Now</span>
        </motion.button>
    );
};

export default FloatingWhatsApp;
