import React from "react";
import './FeatureSection.css';

import machine1 from './img/machine-1.png';
import machine2 from './img/machine-2.png';

import eatBookLogo from './img/eatbook-logo.png';
import sethLuiLogo from './img/sethlui-logo.png';
import burppleLogo from './img/burpple-logo.png';
import tidbitsMagLogo from './img/tidbits-mag-logo.png';
import tripAdvisorLogo from './img/tripadvisor-logo.png';
import confirmGoodLogo from './img/confirm-good-logo.png';
import missTamChiakLogo from './img/miss-tam-chiak-logo.png';
import singaporeFoodieLogo from './img/singapore-foodie-logo.png';
import foodAdvisorLogo from './img/food-advisor-logo.png';

import tvbFoodLogo from './img/tvb-food-travel-logo.png';
import tvb1 from './img/tvb1.png';
import tvb2 from './img/tvb2.png';
import tvb3 from './img/tvb3.png';
import tvb4 from './img/tvb4.png';
import tvb5 from './img/tvb5.png';
import tvb6 from './img/tvb6.png';

import oldCoffee from "./img/old-coffee-img.png";
import oldMachine from "./img/old-machine.png";

function FeatureSection() {
    return (
        <div className="feature-section">
            <div className="feature-section-container">
                <div className="feature-section-grid header">
                    <div className="feature-section-grid-element">
                        <img src={ machine1 } alt="Old Machine 1"/>
                    </div>
                    <div className="feature-section-grid-element mid">
                        <h1>Featured On</h1>
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={ machine2 } alt="Old Machine 2"/>
                    </div>
                </div>
                <div className="feature-section-grid">
                    <div className="feature-section-grid-element">
                        <img src={eatBookLogo} alt="Eatbook Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={sethLuiLogo} alt="Seth Lui Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={burppleLogo} alt="Burpple Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={tidbitsMagLogo} alt="Tidbits Mag Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={tripAdvisorLogo} alt="Trip Advisor Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={confirmGoodLogo} alt="Confirm Good Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={missTamChiakLogo} alt="Miss Tam Chiak Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={singaporeFoodieLogo} alt="Singapore Foodie Logo" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={foodAdvisorLogo} alt="Food Advisor Logo" />
                    </div>
                </div>
            </div>
            <div className="feature-section-container">
                <div className="feature-section-grid header-2">
                    <div className="feature-section-grid-element">
                        <h2>Special Feature by TVB Food & Travel</h2>
                    </div>
                    <div className="feature-section-grid-element sm-logo">
                        <img src={ tvbFoodLogo } alt="TVB Logo"/>
                    </div>
                </div>
                <div className="feature-section-grid sm">
                    <div className="feature-section-grid-element">
                        <img src={tvb1} alt="TVB Scene 1" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={tvb2} alt="TVB Scene 2" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={tvb3} alt="TVB Scene 3" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={tvb4} alt="TVB Scene 4" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={tvb5} alt="TVB Scene 5" />
                    </div>
                    <div className="feature-section-grid-element">
                        <img src={tvb6} alt="TVB Scene 6" />
                    </div>
                </div>
            </div>
            <div className="feature-section-grid header-3">
                <div className="feature-section-grid-element end a">
                    <img src={ oldCoffee } alt="Old Coffee" />
                </div>
                <div className="feature-section-grid-element end b">
                    <img src={ oldMachine } alt="Old Machine" />
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;
