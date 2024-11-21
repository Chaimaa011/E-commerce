import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Copyright from '../components/Copyright';

const Contact = () => {
    return (
        <div className="container mt-5 mb-5">
            <motion.h2 
                className="text-center mb-4" 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                Contactez-nous
            </motion.h2>
            <motion.p 
                className="text-center mb-4" 
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Nous aimerions avoir de vos nouvelles ! Envoyez-nous un message.
            </motion.p>
            <motion.form 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" name="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" name="message" required rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Envoyer</button>
            </motion.form>
            <Copyright/>
        </div>
    );
};

export default Contact;
