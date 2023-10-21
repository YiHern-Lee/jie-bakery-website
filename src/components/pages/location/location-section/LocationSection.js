import React from 'react';
import './LocationSection.css';
import Button from '../../../button/Button';

function LocationSection() {
    const redirectToGMaps = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className="location-section">
            <div className='location-cover-img-container'>
                <img src='images/img-bakery-front-cropped.png' />
            </div>
            <div className='location-section-container'>
                <div className='location-section-content-container'>
                    <div className='location-section-content-img-container'>
                        <img src='images/bakery-location-photo.jpg' />
                    </div>
                    <div className='location-section-content'>
                        <h1>Address & Hours</h1>
                        <h3>123 Upper Paya Lebar Road, Singapore, Singapore</h3>
                        <br />
                        <p><b><u>Operating Hours</u></b></p>
                        <p><b>Mon - Sat:</b></p>
                        <p>07:00 - 22:30</p>
                        <p><b>Sun</b></p>
                        <p>10:00 - 22:30</p>
                        <br />
                        <div className='location-section-btn'>
                            <Button 
                                buttonStyle='btn--orange' 
                                onClick={ () => redirectToGMaps('https://goo.gl/maps/8w25AaMQoNBEp5857' ) }
                            >
                                Getting There
                            </Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LocationSection;