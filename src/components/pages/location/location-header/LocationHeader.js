import React from "react";
import locationHeader from './img/location-header-cover.jpg'
import "./LocationHeader.css"

function AboutUsHeader () {
    return (
        <div className="location-header">
            <div className='location-header-img-container'>
                <img src={ locationHeader } alt="Bakery Interior" />
            </div>
        </div>
    )
}

export default AboutUsHeader;