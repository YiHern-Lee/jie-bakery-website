import React from "react";
import aboutUsHeader from './img/about-us-cover.png'
import "./AboutUsHeader.css"

function AboutUsHeader () {
    return (
        <div className="about-us-header">
            <div className='about-us-header-img-container'>
                <img src={ aboutUsHeader } alt="News images of Jie Bakery" />
            </div>
        </div>
    )
}

export default AboutUsHeader;