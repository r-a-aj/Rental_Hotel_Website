import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const PropertyItem = ({ property, addToCart }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    addToCart(property);
    navigate('/cart');
  };

  return (
    <div className="property-item">
      <img src={property.image} alt={property.name} className="property-image" />
      <div className="property-info">
        <h2>{property.name}</h2>
        <p>{property.location}</p>
        <p className="property-price">Rs. {property.price}.00 per night</p>
        <div className="amenities">
          {property.amenities.map((amenity, index) => (
            <span key={index} className="amenity">{amenity}</span>
          ))}
        </div>
        <button 
          className="book-room" 
          onClick={() => handleBookNow(property)}
        >
          Book a Room
        </button>
      </div>
    </div>
  );
};

export default PropertyItem;
