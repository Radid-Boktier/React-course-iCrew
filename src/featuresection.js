import React from 'react';
import './index.css'; // Import your CSS file
import SVGa from './svga'; // Import your SVG components
import SVGb from './svgb';
import SVGc from './svgc';
import SVGd from './svgd';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                {/* Header Section */}
                <div className="header-container">
                    <span className="feature-title">Features</span>
                    <h2 className="feature-heading">Main Features Of Play</h2>
                    <p className="feature-description">
                        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                    </p>
                </div>
                {/* Feature Cards Section */}
                <div className="flex-container">
                    <FeatureCard 
                        SVGComponent={SVGa} 
                        title="Premium Property Listings" 
                        description="Discover an array of hand-picked properties that meet the highest standards of luxury and comfort." 
                    />
                    <FeatureCard 
                        SVGComponent={SVGb} 
                        title="Personalized Property Matching" 
                        description="Our advanced matching system pairs you with properties that align with your specific needs and desires." 
                    />
                    <FeatureCard 
                        SVGComponent={SVGc} 
                        title="Expert Guidance and Support" 
                        description="Benefit from the expertise of our dedicated team of real estate professionals." 
                    />
                    <FeatureCard 
                        SVGComponent={SVGd} 
                        title="Virtual Tours" 
                        description="Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home." 
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ SVGComponent, title, description }) => {
    return (
        <div className="feature-card">
            <div className="icon-container">
                <span className="icon-background"></span>
                <SVGComponent />
            </div>
            <h4 className="feature-card-title">{title}</h4>
            <p className="feature-card-description">{description}</p>
            <a href="https://www.google.com/" className="learn-more">
                Learn More
            </a>
        </div>
    );
};

export default FeaturesSection;
