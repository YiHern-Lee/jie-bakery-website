import React from 'react';
import '../../../App.css';
import './Home.css';
import HeroSection from './hero/HeroSection';
import HomeSection from './home-section/HomeSection';
import Footer from '../../footer/Footer';
import CustomerReviews from './customer-reviews/CustomerReviews';
import HomeBottom from './home-bottom/HomeBottom';

function Home() {
  return (
        <div className='home-page-container'>
            <HeroSection />
            <HomeSection />
            <CustomerReviews />
            <HomeBottom />
            <Footer />
        </div>
    );
}

export default Home;