import React from 'react';
import SVGt from './svgt';
import SVGu from './svgu';
import SVGv from './svgv';

import './index.css'; 
const Faq = () => {
    return (
        <section className="faq-container">
            <div className="faq-inner-container">
                <div className="faq-flex-wrapper">
                    <div className="faq-full-width">
                        <div className="faq-header">
                            <span className="faq-subtitle">FAQ</span>
                            <h2 className="faq-title">Any Questions? Look Here</h2>
                            <p className="faq-description">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faq-flex-wrapper">
                    <div className="faq-column">
                        <div className="faq-item">
                            <div className="faq-icon">
                                <SVGt />
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-item-title">Is TailGrids Well-documented?</h3>
                                <p className="faq-item-description">
                                    It takes 2-3 weeks to get your first blog post ready. That
                                    includes the in-depth research & creation of your monthly
                                    content ui/ux strategy that we do writing your first blog
                                    post.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-icon">
                                <SVGt />
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-item-title">Is TailGrids Well-documented?</h3>
                                <p className="faq-item-description">
                                    It takes 2-3 weeks to get your first blog post ready. That
                                    includes the in-depth research & creation of your monthly
                                    content ui/ux strategy that we do writing your first blog
                                    post.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="faq-column">
                        <div className="faq-item">
                            <div className="faq-icon">
                                <SVGt />
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-item-title">Is TailGrids Well-documented?</h3>
                                <p className="faq-item-description">
                                    It takes 2-3 weeks to get your first blog post ready. That
                                    includes the in-depth research & creation of your monthly
                                    content ui/ux strategy that we do writing your first blog
                                    post.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-icon">
                                <SVGt />
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-item-title">Is TailGrids Well-documented?</h3>
                                <p className="faq-item-description">
                                    It takes 2-3 weeks to get your first blog post ready. That
                                    includes the in-depth research & creation of your monthly
                                    content ui/ux strategy that we do writing your first blog
                                    post.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="faq-svg-left">
                    <SVGu />
                </span>
                <span className="faq-svg-right">
                    <SVGv />
                </span>
            </div>
        </section>
    );
};

export default Faq;
