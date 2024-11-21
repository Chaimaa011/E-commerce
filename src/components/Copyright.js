import React from 'react';
import './Copyright.css';
import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Copyright() {
  return (
    <footer className="footer mt-5">
      <div className="footer-container">
        <div className="footer-section links">
          <h4>Nos Collections</h4>
          <ul>
            <li><a href="#">Women's clothing</a></li>
            <li><a href="#">Men's clothing</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        <div className="footer-section terms">
          <h4>Termes de service</h4>
          <ul>
            <li><a href="#">Géneral condition of sale</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Nous Contacter</h4>
          <p><FaPhoneAlt /> Tel: +212 98790657</p>
          <p><FaMapMarkerAlt /> Address: Casablanca</p>
          <div className="social-links">
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTiktok /></a>
          </div>
        </div>
      </div>
      <p className='copy'>© 2024 SwiftShopper All rights reserved <br/>
      All rights reserved Viewed our terms of use and pprivacy notice.</p>
    </footer>
  );
}

export default Copyright;