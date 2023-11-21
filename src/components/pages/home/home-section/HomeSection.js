import React from "react";
import { Link } from "react-router-dom";
import './HomeSection.css'
import Button from "../../../button/Button";
import whiteBreadImg from './img/white-bread.png'
import rainbowBreadImg from './img/rainbow-bread.png'
import redbeanBunImg from './img/red-bean-bun.png'
import coconutBunImg from './img/coconut-bun.png'

import breadPlatterImg from './img/bread-platter.png'

function HomeSection() {
    return (
        <div className='home-section'>
            <div className='home-section-container'>
                <div className='home-section-content-container v1 main'>
                    <div className='home-section-content v1 main'>
                        <h1>Introducing Jie Bakery</h1>
                        <br />
                        <p>
                            Founded by Jimmy Mah, our bakery is committed to providing the highest quality artisanal bread with no preservatives.
                            <br /><br />
                            Our mission is to create delicious, healthy, and sustainable bread that nourishes both the body and soul. 
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
                        <img src={breadPlatterImg}/>
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
                        <img src={rainbowBreadImg}/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Rainbow Bread</h1>
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
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Traditional White Bread</h1>
                        <br />
                        <p>
                            Placeholder text
                        </p>
                        <br />
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={whiteBreadImg}/>
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v2'>
                    <div className='home-section-content-img-container'> 
                        <img src={redbeanBunImg}/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Red Bean Bun</h1>
                        <br />
                        <p>
                            Placeholder text
                        </p>
                        <br />
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Coconut Bun</h1>
                        <br />
                        <p>
                            Placeholder text
                        </p>
                        <br />
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={coconutBunImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;
