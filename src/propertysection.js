import React from 'react';
import SVGe from './svge';
import SVGf from './svgf';

const properties = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Modern Design Villa',
        price: '$3000.00 /M',
        bedrooms: 3,
        bathrooms: 2
    },
    {
        id: 2,
        image: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/287178462.jpg?k=a8040428e3a79831e463ecc22b3f7364e25ec9c4d6157a10b41f1b58bedb2389&o=&hp=1',
        title: 'Luxury Country House',
        price: '$4500.00 /M',
        bedrooms: 4,
        bathrooms: 3
    },
    {
        id: 3,
        image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1268255948767524183/original/970f4f34-1fbb-4b85-80f8-b8a13f549a41.jpeg?im_w=1200',
        title: 'Cozy City Apartment',
        price: '$2500.00 /M',
        bedrooms: 2,
        bathrooms: 1
    },
    {
        id: 4,
        image: 'https://cdn.onekindesign.com/wp-content/uploads/2021/10/Charming-Family-Home-Design-Ron-Farris-Architect-01-1-Kindesign.jpg',
        title: 'Charming Cottage',
        price: '$2200.00 /M',
        bedrooms: 3,
        bathrooms: 2
    },
    {
        id: 5,
        image: 'https://img.freepik.com/premium-photo/elegant-beachfront-property-with-luxurious-beach-house_943281-51815.jpg?w=996',
        title: 'Elegant Beach House',
        price: '$5000.00 /M',
        bedrooms: 5,
        bathrooms: 4
    }
];

const PropertySection = () => {
    return (
        <section className="property-section">
            <div className="property-container">
                <div className="header-content">
                    <span className="title">Properties</span>
                    <h2 className="heading">Grab your Dream Property</h2>
                    <p className="description">
                        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                    </p>
                </div>

                <div className="property-grid">
                    {properties.map(property => (
                        <div key={property.id} className="property-card">
                            <img src={property.image} alt={property.title} className="property-image" />
                            <div className="property-details">
                                <h4 className="property-title">{property.title}</h4>
                                <div className="property-price">{property.price}</div>
                            </div>
                            <div className="property-info">
                                <div className="info-item">
                                    <SVGe />
                                    <p><span className="info-bold">{property.bedrooms}</span> Bedrooms</p>
                                </div>
                                <div className="info-item">
                                    <SVGf />
                                    <p><span className="info-bold">{property.bathrooms}</span> Bathrooms</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertySection;
