import React from 'react';
import '../../../App.css';
import './Home.css';
import HeroSection from './hero/HeroSection';
import HomeSection from './home-section/HomeSection';
import Footer from '../../footer/Footer';

function Home() {
  return (
        <div className='home-page-container'>
            <HeroSection />
            
            <HomeSection />
            <Footer />
        </div>
    );
}

export default Home;