import React from 'react';
import './LocationSection.css';
import Button from '../../../button/Button';
import jieBakeryExterior from './img/jie-bakery-exterior.jpg';
import breadShopExterior from './img/bread-shop-exterior.png'

function LocationSection() {
    const redirectToGMaps = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className="location-section">
            <div className='location-section-container'>
                <div className='location-section-content-container'>
                    <div className='location-section-left'>
                        <div className='location-title lg'>
                            <h1>Jie Bakery (Tai Seng) </h1>
                        </div>
                        <div className='location-title sm'>
                            <h1>Jie Bakery<br/>(Tai Seng) </h1>
                        </div>
                        <div className='location-section-content-img-container'>
                            <img src={jieBakeryExterior} alt='Jie Bakery Exterior' />
                        </div>
                    </div>
                    <div className='location-section-content'>
                        <h1>Address & Hours</h1>
                        <p>123 Upper Paya Lebar Rd, Singapore 534837</p>
                        <br/>
                        <p>Mon - Sat: 7am - 10pm</p>
                        <p>Sun: 10am - 10pm</p>
                        <br />
                        <div className='location-section-btn'>
                            <Button 
                                buttonStyle='btn--orange' 
                                onClick={ () => redirectToGMaps('https://maps.app.goo.gl/avZzrU9hpAyMdAqj7' ) }
                            >
                                Getting There
                            </Button>
                        </div>
                    </div>
                    
                </div>
                <div className='location-section-content-container'>
                    <div className='location-section-left'>
                        <div className='location-title lg'>
                            <h1>The Bread Shop Café </h1>
                        </div>
                        <div className='location-title sm'>
                            <h1>The Bread<br/>Shop Café </h1>
                        </div>
                        <div className='location-section-content-img-container'>
                            <img src={breadShopExterior} alt='The Bread Shope Café Exterior' />
                        </div>
                    </div>
                    <div className='location-section-content'>
                        <h1>Address & Hours</h1>
                        <p>953 Upper Serangoon Rd, Singapore 534715</p>
                        <br/>
                        <p>Mon - Fri: 11am - 9pm <b>(Tues closed)</b></p>
                        <p>Sat & Sun: 9am - 9pm</p>
                        <br />
                        <div className='location-section-btn'>
                            <Button 
                                buttonStyle='btn--orange' 
                                onClick={ () => redirectToGMaps('https://maps.app.goo.gl/q9qmpPo67r7fsj2g7' ) }
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