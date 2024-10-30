import React from 'react';
import SVGaa from './svgaa'; // Import your SVG components
import SVGbb from './svgbb';

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
            <div className="contact-bg-dark"></div>
            <div className="contact-bg-light"></div>
            <div className="container px-4">
                <div className="contact-flex-container">
                    <div className="contact-info-container">
                        <div className="contact-title">
                            <span className="contact-subtitle">CONTACT US</span>
                            <h2 className="contact-header">
                                Let's talk about your problem.
                            </h2>
                        </div>
                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <SVGaa />
                                </div>
                                <div className="contact-details">
                                    <h5 className="contact-item-title">Our Location</h5>
                                    <p className="contact-item-description">
                                        401 Broadway, 24th Floor, Orchard Cloud View, London
                                    </p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <SVGbb />
                                </div>
                                <div className="contact-details">
                                    <h5 className="contact-item-title">How Can We Help?</h5>
                                    <p className="contact-item-description">info@yourdomain.com</p>
                                    <p className="contact-item-description">contact@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <h3 className="contact-form-header">Send us a Message</h3>
                        <form>
                            <div className="contact-form-group">
                                <label htmlFor="fullName" className="contact-label">Full Name*</label>
                                <input type="text" name="fullName" placeholder="Adam Gelius"
                                    className="contact-input" />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="email" className="contact-label">Email*</label>
                                <input type="email" name="email" placeholder="example@yourmail.com"
                                    className="contact-input" />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="phone" className="contact-label">Phone*</label>
                                <input type="text" name="phone" placeholder="+885 1254 5211 552"
                                    className="contact-input" />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="message" className="contact-label">Message*</label>
                                <textarea name="message" rows="1" placeholder="Type your message here"
                                    className="contact-textarea"></textarea>
                            </div>
                            <button type="submit" className="contact-submit-button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
