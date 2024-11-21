import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Copyright from './Copyright';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <>
        <div className="container mt-4 mb-5">
            <h2 className="text-center mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">Votre panier est vide.</p>
            ) : (
                <motion.ul 
                    className="list-group" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    {cartItems.map((item, index) => (
                        <motion.li 
                            key={index} 
                            className="list-group-item d-flex justify-content-between align-items-center"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div className="d-flex align-items-center">
                                <img src={item.image} alt={item.title} width="80" className="me-3" />
                                <div>
                                    <h5 className="mb-1">{item.title}</h5>
                                    <p className="mb-0 text-muted"><strong>{item.price} $</strong></p>
                                </div>
                            </div>
                            <button className="btn  btn-sm" onClick={() => removeFromCart(item)}>
                                Retirer
                            </button>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
            {cartItems.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-end">Total: <strong>{cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)} $</strong></h4>
                    <Link to="/paiement" className="btn mt-3">Proceeded to Payment</Link> 
                </div>
            )}
        </div>
        <Copyright/>
        </>
    );
};

export default Cart;
