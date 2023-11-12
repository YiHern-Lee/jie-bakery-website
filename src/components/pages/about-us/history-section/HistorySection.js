import React from "react";
import backgroundImg from './img/bakery-location-photo.jpg'
import "./HistorySection.css"

function HistorySection () {
    return (
        <div className="history-section">
            <div className='history-cover-img-container'>
                <img src='images/img-bakery-front-cropped.png' />
            </div>
            <div className='history-section-container'>
                <div className='history-section-content-container'>
                    <div className='history-section-content'>
                        <h1>Our History</h1>
                        <br />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. 
                        </p>
                    </div>
                    <div className='history-section-content-img-container'>
                        <img src={backgroundImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistorySection;