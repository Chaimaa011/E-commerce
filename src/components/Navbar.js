// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Navbar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import myImage from './photos/panier.jpeg'
// const Navbar = ({ cartItemCount }) => {
//     return (
//         <motion.nav 
//             className="navbar navbar-expand-lg navbar-light bg-light shadow-sm"
//             initial={{ opacity: 0, y: -20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.5 }}
//         >
//             <div className="container">
//                 <Link to="/" className="navbar-brand fw-bold">SwiftShopper</Link>
//                 <div id="navbarNav">
//                     <ul className="navbar-nav me-auto">
//                         <li className="nav-item">
//                             {/* <Link to="/" className="nav-link">Accueil</Link> */}
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/shop" className="nav-link">Products</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/contact" className="nav-link">Contact</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/login" className="nav-link">Login</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/about" className="nav-link">About</Link>
//                         </li>
//                         <Link to="/cart" className="btn  ms-3">
//                         <div className="icon">
//                           <img style={{width:'30px'}} src={myImage} />
//                           <span className="cart-count"> ({cartItemCount})</span>
//                         </div>
//                     </Link>
                    
//                     </ul>
                   
//                 </div>
//             </div>
//         </motion.nav>
//     );
// };

// export default Navbar;
