import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Facebook as FacebookIcon, Instagram as InstagramIcon } from '@mui/icons-material';

function Footer() {
    const redirectToSocials = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>PAGES</h2>
                <Link to='/'>Home</Link>
                <Link to='/'>About Us</Link>
                <Link to='/location'>Our Location</Link>
            </div>
            <div class='footer-link-items'>
                <h2>CONTACT US</h2>
                <Link to='/'>Email</Link>
                <Link to='/'>Phone</Link>
            </div>
            <div class='footer-link-items'>
                <h2>OUR SOCIALS</h2>
                <div className='footer-social-icons'>
                    <Link onClick={() => redirectToSocials('https://www.facebook.com/JieTraditionalBreadBakery/')}><FacebookIcon /></Link>
                    <Link onClick={() => redirectToSocials('https://www.instagram.com/thebreadshopsg/')}><InstagramIcon /></Link>
                </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
            <small class='website-rights'>Jie Traditional Bakery © 2023</small>
      </section>
    </div>
  );
}

export default Footer;
