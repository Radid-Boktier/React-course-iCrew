import React from 'react';
import MySVG from './mysvg';
import './index.css'; // Import your CSS file

const HeroSection = () => {
    return (
        <div id="home" className="hero-section">
            <div className="container">
                <div className="flex-container">
                    <div className="text-center">
                        <h1 className="hero-title">
                            We'll build the house of your dreams
                        </h1>
                        <p className="hero-description">
                            We have 9000+ reviews, and our customers trust our properties and quality products.
                        </p>
                        <ul className="button-list">
                            <li>
                                <a 
                                    href="https://links.tailgrids.com/play-download" 
                                    className="button primary"
                                >
                                    Book Now
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://github.com/tailgrids/play-tailwind" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="button secondary"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="image-container">
                        <img 
                            src="/images/hero/hero-image.png" 
                            alt="hero" 
                            className="hero-image" 
                        />
                        <div className="svg-background left">
                            <MySVG/>
                        </div>
                        <div className="svg-background right">
                            <MySVG/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
