import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './Paiement.css'
import Copyright from '../components/Copyright';

const Container = styled.div`
    background-color: #f8f9fa;
    height:50%;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
    color: #333;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

const ListGroupItem = styled.li`
    border: none;
    margin: 10px 0;
`;

const Total = styled.h5`
    text-align: right;
    color: #28a745; 
`;

const Paiement = ({ cartItems, totalAmount }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'credit_card', 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Votre commande a été passée avec succès !');
    };

    return (
        <Container className="container ">
            <Header>Paiement</Header>
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <h4>Récapitulatif de la Commande</h4>
                        <ul className="list-group mb-4">
                            {cartItems.map((item, index) => (
                                <ListGroupItem key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{item.title}</span>
                                    <span>{item.price} $</span>
                                </ListGroupItem>
                            ))}
                        </ul>
                        <Total>Total: <strong>{totalAmount.toFixed(2)} $</strong></Total>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <h4>Détails de la Commande</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nom</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Adresse</label>
                                <textarea 
                                    className="form-control" 
                                    id="address" 
                                    name="address" 
                                    rows="3" 
                                    value={formData.address} 
                                    onChange={handleChange} 
                                    required 
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Méthode de Paiement</label>
                                <select 
                                    className="form-select" 
                                    name="paymentMethod" 
                                    value={formData.paymentMethod} 
                                    onChange={handleChange}
                                >
                                    <option value="credit_card">Carte de Crédit</option>
                                    <option value="paypal">PayPal</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-lg">Valider</button>
                        </form>
                    </Card>
                </div>
            </div>
            <Copyright/>
        </Container>
    );
};

export default Paiement;
