import React from 'react';
import '../../../../App.css'
import Button from '../../../button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h2>Jie Traditional Bread Bakery</h2>
            
        <img src='images/bakery-logo.png' className='hero-section-logo' />
        
        <h1>传统面包</h1>
    </div>
  );
}

export default HeroSection;
