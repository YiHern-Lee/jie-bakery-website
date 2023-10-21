import React from "react";
import { Link } from "react-router-dom";
import './HomeSection.css'
import Button from "../../../button/Button";

function HomeSection() {
    const redirectToAboutUs = () => {

    }

    return (
        <div className='home-section'>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Baking Bread Since 1980s</h1>
                        <br />
                        <p>
                            Opened for more than 30 years, our bread is baked using traditional methods.
                            <br /><br />
                            Our traditional bread are freshly baked every day and contains no preservatives.
                        </p>
                        <br />
                        <div className='home-section-btn'>
                            <Link to='/about-us'>
                                <Button 
                                    buttonStyle='btn--orange'
                                >
                                    Learn More About Our Story
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src='images/white-bread-on-board.png'/>
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-subtitle'>
                    <h1>
                        Our Baked Goods
                    </h1>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v2'>
                    <div className='home-section-content-img-container'> 
                        <img src='images/white-bread.png'/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>White Bread</h1>
                        <br />
                        <p>
                            Breaking bread.
                            <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. 
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;
