import React from "react";
import HistorySection from "./history-section/HistorySection";
import Timeline from "./timeline/Timeline";
import Footer from "../../footer/Footer";
import './AboutUs.css';

function AboutUs () {
    return (
        <div className="about-us-page-container">
            <HistorySection />
            <Timeline />
            <Footer />
        </div>
    )
}

export default AboutUs;