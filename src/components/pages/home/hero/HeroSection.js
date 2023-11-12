import React from 'react';
import '../../../../App.css'
import bakeryLogo from './img/bakery-logo.png'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h2>Jie Traditional Bread Bakery</h2>
            
        <img src={bakeryLogo} className='hero-section-logo' />
        
        <h1>传统面包</h1>
    </div>
  );
}

export default HeroSection;
