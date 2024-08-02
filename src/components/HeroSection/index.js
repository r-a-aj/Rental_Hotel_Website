import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../BookingForm/index';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/property-list');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover The Perfect Balance Of <br></br>Hospitality, Luxury And Comfort.</h1>
        <p>We are focused on providing clients with the highest level <br></br>of comfort and excellent affordable rates</p>
        <button type="button" className="hero-book-now" onClick={handleBookNow}>BOOK NOW</button>
      </div>
      <div className="booking-form-container">
        <BookingForm />
      </div>
    </section>
  );
};

export default HeroSection;
