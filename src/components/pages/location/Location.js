import React from "react";
import './Location.css'
import LocationSection from "./location-section/LocationSection";
import LocationHeader from "./location-header/LocationHeader"
import Footer from "../../footer/Footer";

function Location() {
    return (
        <div className='location-page-container'>
            <LocationHeader />
            <LocationSection />
            <Footer />
        </div>
    );
}

export default Location;