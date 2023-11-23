import React from "react";
import AboutUsHeader from "./about-us-header/AboutUsHeader";
import FounderSection from "./founder-section/FounderSection";
import FeatureSection from "./features/FeatureSection";
import Timeline from "./timeline/Timeline";
import Footer from "../../footer/Footer";
import './AboutUs.css';

function AboutUs () {
    return (
        <div className="about-us-page-container">
            <AboutUsHeader />
            <FounderSection />
            <FeatureSection />
            {/* <Timeline /> */}
            <Footer />
        </div>
    )
}

export default AboutUs;