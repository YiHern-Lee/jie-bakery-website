import React from 'react';
import '../../../../App.css'
import bakeryLogo from '../../../../img/bakery-logo.png'
import caligraphy from './img/chinese-caligraphy.png'
import heroImg from './img/Hero-Img.png'

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <div className='hero-side'>
            <img />

        </div>
        <div className='hero-main'>
            <h2>JIE TRADITIONAL BAKERY</h2>
            
            <img src={bakeryLogo} className='hero-section-logo' />
            
            <img src={caligraphy} className='hero-caligraphy' />
        </div>
        <div className='hero-side'>
            
        </div> */}

        <img src={heroImg} className='hero-img'/>
        <img src={bakeryLogo} className='hero-logo' />
        
    </div>
  );
}

export default HeroSection;
