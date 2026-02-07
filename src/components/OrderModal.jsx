import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const OrderModal = ({ isOpen, onClose, productName = '' }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        product: productName || 'Royal Hing (25g)',
        quantity: 1
    });
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [isProcessing, setIsProcessing] = useState(false);

    // Reset state when opening
    React.useEffect(() => {
        if (isOpen) {
            setStep(1);
            if (productName) {
                setFormData(prev => ({ ...prev, product: productName }));
            }
        }
    }, [isOpen, productName]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateTotal = () => {
        const prices = {
            'Royal Hing (25g)': 199,
            'Premium Hing (50g)': 349,
            'Classic Hing (100g)': 649
        };
        return (prices[formData.product] || 199) * formData.quantity;
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePayment = () => {
        setIsProcessing(true);
        // Simulate Payment Processing
        setTimeout(() => {
            setIsProcessing(false);
            setStep(3);
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
                backdropFilter: 'blur(5px)'
            }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        backgroundColor: '#FFF',
                        padding: '2rem',
                        borderRadius: '16px',
                        width: '90%',
                        maxWidth: '500px',
                        position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'transparent',
                            color: '#666'
                        }}
                    >
                        <X size={24} />
                    </button>

                    {step === 1 && (
                        <>
                            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                                Shipping Details
                            </h2>
                            <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Address</label>
                                    <textarea
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', minHeight: '80px' }}
                                        placeholder="Enter delivery address"
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ flex: 2 }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Product</label>
                                        <select
                                            name="product"
                                            value={formData.product}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                                        >
                                            <option value="Royal Hing (25g)">Royal Hing (25g) - ₹199</option>
                                            <option value="Premium Hing (50g)">Premium Hing (50g) - ₹349</option>
                                            <option value="Classic Hing (100g)">Classic Hing (100g) - ₹649</option>
                                        </select>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Qty</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            min="1"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginTop: '0.5rem', fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-secondary)', textAlign: 'right' }}>
                                    Total: ₹{calculateTotal()}
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        marginTop: '1rem',
                                        backgroundColor: 'var(--color-secondary)',
                                        color: 'white',
                                        padding: '1rem',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        boxShadow: '0 4px 15px rgba(75, 54, 33, 0.2)'
                                    }}
                                >
                                    Proceed to Payment
                                </button>
                            </form>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                                Payment Method
                            </h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ marginBottom: '1rem', color: '#666' }}>Select how you would like to pay for your order of <strong>₹{calculateTotal()}</strong>.</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <label style={{
                                        padding: '1rem',
                                        border: `2px solid ${paymentMethod === 'upi' ? 'var(--color-primary)' : '#eee'}`,
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        backgroundColor: paymentMethod === 'upi' ? '#FFF8E1' : '#fff'
                                    }}>
                                        <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                        <span>UPI / QR Code</span>
                                    </label>

                                    <label style={{
                                        padding: '1rem',
                                        border: `2px solid ${paymentMethod === 'cod' ? 'var(--color-primary)' : '#eee'}`,
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        backgroundColor: paymentMethod === 'cod' ? '#FFF8E1' : '#fff'
                                    }}>
                                        <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                        <span>Cash on Delivery</span>
                                    </label>

                                    <label style={{
                                        padding: '1rem',
                                        border: `2px solid ${paymentMethod === 'card' ? 'var(--color-primary)' : '#eee'}`,
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        backgroundColor: paymentMethod === 'card' ? '#FFF8E1' : '#fff'
                                    }}>
                                        <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                        <span>Credit/Debit Card</span>
                                    </label>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button
                                    onClick={() => setStep(1)}
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'transparent',
                                        color: 'var(--color-text-main)',
                                        border: '1px solid #ddd',
                                        padding: '1rem',
                                        borderRadius: '50px',
                                        fontWeight: '600'
                                    }}
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handlePayment}
                                    disabled={isProcessing}
                                    style={{
                                        flex: 2,
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'var(--color-text-main)',
                                        padding: '1rem',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                                        opacity: isProcessing ? 0.7 : 1,
                                        cursor: isProcessing ? 'wait' : 'pointer'
                                    }}
                                >
                                    {isProcessing ? 'Processing...' : `Pay ₹${calculateTotal()}`}
                                </button>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#E8F5E9',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#2E7D32',
                                    margin: '0 auto 1.5rem'
                                }}
                            >
                                <CheckCircle size={40} />
                            </motion.div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Order Successful!</h3>
                            <p style={{ color: '#666', marginBottom: '2rem' }}>
                                Thank you, <strong>{formData.name}</strong>!<br />
                                Your order for <strong>{formData.quantity}x {formData.product}</strong> has been placed via {paymentMethod.toUpperCase()}.
                                <br /><br />
                                We will update you at {formData.phone}.
                            </p>
                            <button
                                onClick={onClose}
                                style={{
                                    backgroundColor: 'var(--color-secondary)',
                                    color: 'white',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '50px',
                                    fontWeight: '600'
                                }}
                            >
                                Done
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default OrderModal;
