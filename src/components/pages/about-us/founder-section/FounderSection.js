import React from "react";
import "./FounderSection.css"
import jimmyMahImg from './img/jimmy-mah.png'
import rickshawIcon from './img/rickshaw.png'

function FounderSection () {
    return (
        <div className="founder-section">
            <div className="founder-section-header">
                <div className="founder-section-title">
                    <div className="founder-section-name">
                        <h1>Our Founder - Jimmy Mah</h1>
                    </div>
                    <div className="founder-section-about">
                        <div className="founder-section-about-para">
                            <p>About Jimmy Mah</p>
                        </div>
                        <div className="rickshaw-logo-container">
                            <img src={rickshawIcon} alt="Riskshaw Logo"/>
                        </div>
                    </div>
                </div>
                <div className="founder-section-img-container">
                    <img src={jimmyMahImg} alt="Jimmy Mah on TVB SS1"/>
                </div>
            </div>
            <div className="founder-section-paragraph">
                <p>
                    Jimmy Mah, 60, the owner of Jie Bakery, has been sustaining this 
                    business for over 35 years. A Singaporean native, Jimmy took over 
                    the bakery business at the age of 29 back in 1992 after the original
                    owner mentioned he has to close down due to lack of succession
                    planning. Fuelled by his strong passion for baking, Jimmy took over
                    and seized the opportunity to enhance his baking skills.
                    <br/><br/>
                    Throughout the years, Jimmy stays true to his recipe and doesn't 
                    compromise on the quality despite the rising cost of ingredients.
                    Furthermore, he persists in baking traditional bread from scratch
                    without adding any chemicals or preservatives. This explains why his 
                    bread is baked daily since it will not stay fresh after three days.
                    <br/><br/>
                    On a typical work day, Jimmy and his team of four workers would bake 
                    a day's worth of bread at dawn. What's impressive about Jimmy is that he
                    has only taken two days off each year throughout his career as a baker.
                    <br/><br/>
                    Together with Amy, his wife, Jimmy intends to continue running the business
                    to the best of his abilities and institutionalise the bakery process that 
                    uniquely belongs to Jie Bakery.
                </p>
            </div>
        </div>
    )
}

export default FounderSection;