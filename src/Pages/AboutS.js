import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Copyright from '../components/Copyright';

const About = () => {
    return (
        <>
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-4">About Us</h2>
            <p className="lead">
            Welcome to our e-commerce site! We offer a wide range of products to meet all your needs. Our mission is to provide the best products at the best prices.            </p>
            <p className="lead">
            Our team is here to assist you with anything you need. Feel free to contact us if you have any questions.            </p>
        </div>
        <Copyright/>
        </>
    );
};

export default About;
