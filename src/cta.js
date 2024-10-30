import React from 'react';
import SVGr from './svgr';
import SVGs from './svgs';
import './index.css'; 

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-section-inner">
                    <div className="cta-text-container">
                        <h2 className="cta-heading">
                            <span>What Are You Looking For?</span>
                            <span className="cta-subheading">
                                Get Started Now
                            </span>
                        </h2>
                        <p className="cta-description">
                            There are many variations of passages of Lorem Ipsum but the
                            majority have suffered in some form.
                        </p>
                        <a href="javascript:void(0)" className="cta-button">
                            Let's have a meeting
                        </a>
                    </div>
                </div>
            </div>
            <div className="cta-svg-container">
                <span className="cta-svg-left">
                    <SVGr />
                </span>
                <span className="cta-svg-right">
                    <SVGs />
                </span>
            </div>
        </section>
    );
};

export default Cta;
