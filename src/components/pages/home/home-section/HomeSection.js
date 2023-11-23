import React from "react";
import { Link } from "react-router-dom";
import './HomeSection.css'
import Button from "../../../button/Button";
import plainBreadImg from './img/breads/Plain.png'
import colouredBreadImg from './img/breads/Coloured.png'
import bigBunImg from './img/breads/Big_Bun.png'
import colouredBunImg from './img/breads/Colour_Bun.png'
import plainSquareImg from './img/breads/Plain_Square.png'
import rainbowSquareImg from './img/breads/Rainbow_Square.png'
import pandanBreadImg from './img/breads/Pandan.png'
import milkBreadImg from './img/breads/Milk.png'
import brownSugarImg from './img/breads/Brown_Sugar.png'
import miniBunImg from './img/breads/Mini_Bun.png'
import sugarRollImg from './img/breads/Sugar_Roll.png'
import cheeseRollImg from './img/breads/Cheese_Roll.png'
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
                        <img src={breadPlatterImg} alt="Bread Platter"/>
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
                        <img src={plainBreadImg} alt="Plain Bread"/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Plain</h1>
                        <br />
                        <h3>Traditional bread, soft and puffy</h3>
                        <br />
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Colour</h1>
                        <h3>Coloured traditional bread</h3>
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={colouredBreadImg} alt="Coloured Bread"/>
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v2'>
                    <div className='home-section-content-img-container'> 
                        <img src={bigBunImg} alt="Big Bun"/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Big Bun</h1>
                        <br />
                        <h3>Mildly sweet bun, buttery with aroma of crust</h3>
                        <br />
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Colour Bun</h1>
                        <h3>Coloured sweet bun</h3>
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={colouredBunImg} alt="Coloured Bun"/>
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v2'>
                    <div className='home-section-content-img-container'> 
                        <img src={plainSquareImg} alt="Plain Square"/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Plain Square</h1>
                        <br />
                        <h3>Sandwich bread</h3>
                        <br />
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Rainbow Square</h1>
                        <h3>Coloured sandwich bread</h3>
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={rainbowSquareImg} alt="Rainbow Square"/>
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v2'>
                    <div className='home-section-content-img-container'> 
                        <img src={pandanBreadImg} alt="Pandan Bread"/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Pandan</h1>
                        <br />
                        <h3>Milky pandan flavour, mildly sweet</h3>
                        <br />
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Milk</h1>
                        <h3>Milky flavour, mildly sweet</h3>
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={milkBreadImg} alt="Milk Bread"/>
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v2'>
                    <div className='home-section-content-img-container'> 
                        <img src={brownSugarImg} alt="Brown Sugar Bread"/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Brown Sugar</h1>
                        <br />
                        <h3>Traditional brown sugar</h3>
                        <br />
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Mini Bun</h1>
                        <h3>Mildly sweet bun, buttery with aroma of crust</h3>
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={miniBunImg} alt="Mini Bun"/>
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v2'>
                    <div className='home-section-content-img-container'> 
                        <img src={sugarRollImg} alt="Sugar Roll"/>
                    </div>
                    <div className='home-section-content v2'>
                        <h1>Sugar Roll</h1>
                        <br />
                        <h3>Old school sugar roll</h3>
                        <br />
                    </div>
                </div>
            </div>
            <div className='home-section-container'>
                <div className='home-section-content-container v1'>
                    <div className='home-section-content v1'>
                        <h1>Cheese Roll</h1>
                        <h3>Old school cheese roll</h3>
                    </div>
                    <div className='home-section-content-img-container'> 
                        <img src={cheeseRollImg} alt="Cheese Roll"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;
