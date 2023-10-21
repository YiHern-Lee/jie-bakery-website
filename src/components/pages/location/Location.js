import React from "react";
import './Location.css'
import LocationSection from "./location-section/LocationSection";
import Footer from "../../footer/Footer";

function Location() {
    return (
        <div className='location-page-container'>
            <LocationSection />
            <Footer />
        </div>
    );
}

export default Location;