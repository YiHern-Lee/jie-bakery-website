import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Pages</h2>
                <Link to='/'>Home</Link>
                <Link to='/'>About Us</Link>
                <Link to='/location'>Our Location</Link>
            </div>
            <div class='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Email</Link>
                <Link to='/'>Phone</Link>
            </div>
            <div class='footer-link-items'>
                <h2>Socials</h2>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Instagram</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
            <small class='website-rights'>Jie Traditional Bread Bakery © 2023</small>
      </section>
    </div>
  );
}

export default Footer;
