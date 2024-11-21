import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import ProductList from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import About from './Pages/AboutS'; 
import Paiement from './Pages/Paiement';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ManageProducts from "./components/ManageProducts";
import Visitors from "./components/Visitors";
import Orders from "./components/Orders";
const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => setCartItems([...cartItems, product]);
    const removeFromCart = (product) => {
        const verif = window.confirm('Are you sure !!!')
        if (verif) {
            setCartItems(cartItems.filter(item => item !== product));
        }
    }

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    
    const [activeComponent, setActiveComponent] = useState("Dashboard");
    

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "ManageProducts":
        return <ManageProducts />;
      
      case "Visitors":
        return <Visitors />;
      case "Orders":
        return <Orders />;
      default:
        return <Dashboard />;
    }
  };
    return (
        <div>
            <Router>
                {/* <Navbar cartItemCount={cartItems.length} /> */}
                <Routes>
                    <Route path="/" element={<ProductList cartItemCount={cartItems.length} addToCart={addToCart} />} />
                    {/* <Route path="/shop" element={<Shop addToCart={addToCart} />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                    <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
                    <Route path="/paiement" element={<Paiement cartItems={cartItems} totalAmount={totalAmount} />}/>
                    <Route path="/dashboard" element={<div className="d-flex">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-grow-1 p-4">{renderComponent()}</div>
    </div>}/>
                </Routes>
            </Router>
            
        </div>
        
    );
};

export default App;