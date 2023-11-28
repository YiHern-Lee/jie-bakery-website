import React from "react";
import "./CustomerReviews.css";
import kopiPic from "./img/kopi-picture.png"
import coffeePic from "./img/nanyang-coffee-pic.png"

function CustomerReviews() {
    return (
        <div className="customer-reviews-section">
            <div className="customer-reviews-title">
                <div className="customer-reviews-title-img-container left">
                    <img src={ coffeePic } alt="Cup of Coffee" />
                </div>
                <div className="customer-reviews-title-holder">
                    <h1>What People Say</h1>
                </div>
                <div className="customer-reviews-title-img-container right">
                    <img src={ kopiPic } alt="Kopi Brewing" />
                </div>
            </div>
            <div className="customer-reviews-body">
                <div className="customer-reviews-grid">
                    <div className="customer-reviews-panel">
                        <div className="customer-reviews-content">
                            <p>
                                "The rainbow bread at jie traditional bakery had 
                                to be the best bread we had these days"
                            </p>
                        </div>
                        <div className="customer-reviews-user">
                            <b>
                                Anonymous
                            </b>
                            <p>
                                Reviewed on Food Advisor
                            </p>
                        </div>
                    </div>
                    <div className="customer-reviews-panel">
                        <div className="customer-reviews-content">
                            <p>
                                "Happened to pass by this shop n reminded me of old
                                times. The aroma of freshly baked bread n the sight
                                of the workers busy at work brought back childhood
                                memories. Decided to buy a loaf. Price was higher
                                than outsideb ut when eaten when I reached home,
                                it was yummy. Spread butter on it and the thick loaf
                                with coffee. ...... yummy"
                            </p>
                        </div>
                        <div className="customer-reviews-user">
                            <b>
                                Helen H
                            </b>
                            <p>
                                Reviewed on TripAdvisor, 12 Apr 2018
                            </p>
                        </div>
                    </div>
                    <div className="customer-reviews-panel">
                        <div className="customer-reviews-content">
                            <p>
                                "The bus was v soft and floofy, coco filling
                                was joosy and sweet, I enjoyed it! Might be on par
                                with oishi's coco bun which is one of my fav places
                                for coco buns. Also, it's great that they didn't use 
                                orange sugar. I'm more partial to brown coco filling over
                                orange ones, bc I prefer the gula melaka taste over orange
                                sugar."
                            </p>
                        </div>
                        <div className="customer-reviews-user">
                            <b>
                                aggs & xi :D
                            </b>
                            <p>
                                Reviewed on Burpple, 14 Jun 2021
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews;
