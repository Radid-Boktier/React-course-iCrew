import React from 'react';
import SVGo from './svgo';
import SVGp from './svgp';
import SVGq from './svgq';
import './index.css';

const AboutSection = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-row">
                    <div className="text-container">
                        <div className="text-box">
                            <h2>Innovative Tools for Real Estate Excellence</h2>
                            <p>
                                The main ‘thrust’ is to focus on educating our clients on how to best navigate the real estate market
                                with interactive guides and personalized consultations led by industry experts.
                                <br /><br />
                                The main ‘thrust' is to focus on educating attendees on how to
                                best protect highly vulnerable business applications with
                                interactive panel.
                            </p>
                            <a href="https://www.google.com/" className="know-more-btn">
                                Know More
                            </a>
                        </div>
                    </div>

                    <div className="image-container">
                        <div className="about-img">
                            <img src="/images/about/about-image-01.jpg" alt="about image" />
                        </div>
                        <div className="about-img small-img">
                            <img src="/images/about/about-image-02.jpg" alt="about image" />
                        </div>
                        <div className="experience">
                            <div className="experience-content">
                                <span className="experience-number">09</span>
                                <span className="experience-text">We have</span>
                                <span className="experience-subtext">Years of experience</span>
                            </div>
                            <span className="svg-left"><SVGo /></span>
                            <span className="svg-right"><SVGp /></span>
                            <span className="svg-bottom"><SVGq /></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
