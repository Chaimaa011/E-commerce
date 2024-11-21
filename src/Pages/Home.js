import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bg1 from '../components/photos/bg1.jpg';
import sear from '../components/photos/search.png';
import myImage from '../components/photos/R.jpeg';
import Copyright from '../components/Copyright';

import './Home.css';

const ProductList = ({ addToCart, cartItemCount }) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');

    useEffect(() => {
        fetchProducts().then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = category === 'all' || product.category === category;
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const productCount = filteredProducts.length;

    return (
        <div className="container">
            <motion.nav 
                className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-5"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <Link to="/" className=" navbar-brand fw-bold">SwiftShopper</Link>
                    <div id="navbarNav" className="d-flex justify-content-between w-100">
                        <div className="d-flex cha">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            </ul>
                            <Link to="/cart" className="bbtn ms-3">
                                <div className="icon">
                                    <img style={{ width: '30px' }} src={myImage} alt="Cart" />
                                    <span className="cart-count"> ({cartItemCount})</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.nav>

            
            <div className="fo">
                <div className="aa">
                    Welcome to our world! <br />
                    Browse through our categories to find items that will make you fall in love. <br />
                    Fast and secure delivery!
                </div>
                <div>
                    <img src={bg1} alt="Promotion 1" style={{ width: "100%" }} />
                </div>
            </div>

            
            <div className="btnn btn-group mb-3">
                <button className="btn btn-secondary" onClick={() => setCategory('all')}>All</button>
                <button className="btn btn-secondary" onClick={() => setCategory('electronics')}>Électronique</button>
                <button className="btn btn-secondary" onClick={() => setCategory('jewelery')}>Jewelery</button>
                <button className="btn btn-secondary" onClick={() => setCategory("men's clothing")}>Men's clothing</button>
                <button className="btn btn-secondary" onClick={() => setCategory("women's clothing")}>Women's clothing</button>
            </div>
            <div style={{display:'flex'}}>
            <h2 style={{fontFamily:'copperplate',marginLeft:'1px',marginTop:'10px',color:' #5b755b'}}>
            <span className="product-count ms-3">
                    {productCount} product{productCount !== 1 ? 's' : ''} found
            </span>
            </h2>
            
            <div className="search-bar-container mt-2">
                <input 
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="iSear form-control me-3"
                    style={{ width: '680px' }}
                />
                <img 
                    src={sear} 
                    alt="Search" 
                    style={{ width: "15px", height: "15px", marginLeft: '136%', marginTop: '-75px' }} 
                />
            </div>
            </div>
            
            <div className="row">
                {filteredProducts.map(product => (
                    <motion.div 
                        key={product.id} 
                        className="col-md-3 mb-4"
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className="card product-card">
                            <Link className="deco" to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.title} style={{ margin: '10px' }} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text text-danger">{product.price} $</p>
                                </div>
                            </Link>
                            <button 
                                className="btn cart-icon mt-5" 
                                onClick={() => addToCart(product)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Copyright/>
        </div>
    );
};

export default ProductList;
