import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ProductDetail.css';
// import { Copyright } from 'lucide-react';
import Copyright from "./Copyright";

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchProducts().then(data => {
            const selectedProduct = data.find(item => item.id === parseInt(id));
            setProduct(selectedProduct);
            setLoaded(true);
        });
    }, [id]);

    if (!loaded) return <h1 style={{display:'flex', justifyContent:'center',alignItems:'center',width:'400px',height:'300px',marginLeft:'500px'}}>Loading...</h1>; // Affiche "Loading..." jusqu'à ce que les données soient prêtes

    return (
        <div className="container mt-3 mb-5">
            <div className="row">
                <motion.div 
                    className="col-md-6"
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <img 
                    style={{padding:'30px'}}
                        src={product.image} 
                        alt={product.title} 
                        className="img-fluid rounded shadow-lg" 
                    />
                </motion.div>
                <motion.div 
                    className="col-md-6 d-flex flex-column justify-content-between"
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <h2 className="font-weight-bold">{product.title}</h2>
                        <h5 className="text-muted">Description :</h5>
                        <p>{product.description}</p>
                        <p className="h4 text-danger font-weight-bold"> {product.price} $</p>
                        <div className="mt-3" >
                            <button 
                                style={{width:'200px'}}
                                className="btn"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="text-muted mt-3">
                        <h5>Caractéristiques :</h5>
                        <ul className="list-unstyled">
                            <li>✅ Livraison rapide</li>
                            <li>✅ Garantie de remboursement</li>
                            <li>✅ Paiement sécurisé</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
            <Copyright/>
        </div>
    );
};

export default ProductDetail;
