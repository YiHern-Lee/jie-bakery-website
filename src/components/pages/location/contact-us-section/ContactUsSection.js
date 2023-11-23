import React from "react";
import "./ContactUsSection.css"

function ContactUsSection () {
    return (
        <div className="contact-us-section">
            <div className="contact-us-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-us-banner-container">
                <div className="contact-us-banner">
                    <div className="contact-us-info-section">
                        <div className="contact-us-info-header">
                            <h1>Email</h1>
                        </div>
                        <div className="contact-us-info-body">
                            <p>thebreadshop@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-us-info-section">
                        <div className="contact-us-info-header">
                            <h1>Phone</h1>
                        </div>
                        <div className="contact-us-info-body">
                            <p>6581 7461</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection;
