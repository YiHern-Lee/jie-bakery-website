import React from "react";
import './Location.css'
import LocationSection from "./location-section/LocationSection";
import LocationHeader from "./location-header/LocationHeader"
import ContactUsSection from "./contact-us-section/ContactUsSection"
import Footer from "../../footer/Footer";

function Location() {
    return (
        <div className='location-page-container'>
            <LocationHeader />
            <LocationSection />
            <ContactUsSection />
            <Footer />
        </div>
    );
}

export default Location;