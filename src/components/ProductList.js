// import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '../api';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// const ProductList = ({ addToCart }) => {
//     const [products, setProducts] = useState([]);
//     const [search, setSearch] = useState('');
//     const [category, setCategory] = useState('all');

//     useEffect(() => {
//         fetchProducts().then(data => setProducts(data));
//     }, []);

//     const filteredProducts = products.filter(product => {
//         const matchesCategory = category === 'all' || product.category === category;
//         const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
//         return matchesCategory && matchesSearch;
//     });

//     return (
//         <div className="container mt-4">
//             <input 
//                 type="text"
//                 placeholder="Rechercher un produit..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="form-control mb-3"
//             />
//             <div className="btn-group mb-3">
//                 <button className="btn btn-secondary" onClick={() => setCategory('all')}>Tous</button>
//                 <button className="btn btn-secondary" onClick={() => setCategory('electronics')}>Électronique</button>
//                 <button className="btn btn-secondary" onClick={() => setCategory('clothing')}>Vêtements</button>
//                 <button className="btn btn-secondary" onClick={() => setCategory('accessories')}>Accessoires</button>
//                 <button className="btn btn-secondary" onClick={() => setCategory('cosmetics')}>Cosmétiques</button>
//                 <button className="btn btn-secondary" onClick={() => setCategory('toys')}>Jouets</button>
//                 <button className="btn btn-secondary" onClick={() => setCategory('furniture')}>Meubles</button>
//             </div>
//             <div className="row">
//                 {filteredProducts.map(product => (
//                     <motion.div 
//                         key={product.id} 
//                         className="col-md-4 mb-4"
//                         initial={{ opacity: 0, y: 20 }} 
//                         animate={{ opacity: 1, y: 0 }} 
//                         transition={{ duration: 0.3 }}
//                     >
//                         <div className="card">
//                             <Link to={`/product/${product.id}`}>
//                                 <img src={product.image} alt={product.title} className="card-img-top" />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{product.title}</h5>
//                                     <p className="card-text">{product.price} €</p>
//                                 </div>
//                             </Link>
//                             <button className="btn btn-primary" onClick={() => addToCart(product)}>Ajouter au Panier</button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductList;

