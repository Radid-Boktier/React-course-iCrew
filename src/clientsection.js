import React from 'react';
import SVGw from './svgw';
import SVGx from './svgx';
import SVGy from './svgy';
import SVGz from './svgz';

const clients = [
    { name: "Melissa Tatcher", role: "Marketing Expert", img: "/images/team/team-01.png" },
    { name: "Stuard Ferrel", role: "Digital Marketer", img: "/images/team/team-02.png" },
    { name: "Eva Hudson", role: "Creative Designer", img: "/images/team/team-03.png" },
    { name: "Jackie Sanders", role: "Founder of Facebook", img: "/images/team/team-04.png" },
];

const ClientSection = () => {
    return (
        <section id="team" className="client-container">
            <div className="client-container-inner">
                <div className="client-header">
                    <span className="client-title">Our Team Members</span>
                    <h2 className="client-subtitle">Our Clients</h2>
                    <p className="client-description">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                </div>
                <div className="client-team">
                    {clients.map((client, index) => (
                        <div className="client-member-card" key={index}>
                            <div className="client-member-avatar">
                                <img src={client.img} alt={client.name} className="client-avatar-img" />
                                <span className="client-avatar-overlay-left"></span>
                                <span className="client-avatar-overlay-right"></span>
                            </div>
                            <h4 className="client-member-name">{client.name}</h4>
                            <p className="client-member-role">{client.role}</p>
                            <div className="client-social-icons">
                                <a href="https://www.google.com/" className="client-social-icon">
                                    <SVGx />
                                </a>
                                <a href="https://www.google.com/" className="client-social-icon">
                                    <SVGy />
                                </a>
                                <a href="https://www.google.com/" className="client-social-icon">
                                    <SVGz />
                                </a>
                                <a href="https://www.google.com/" className="client-social-icon">
                                    <SVGw /> {/* Ensure this is added where you want it */}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
