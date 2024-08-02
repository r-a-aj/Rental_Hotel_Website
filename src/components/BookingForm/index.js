import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const BookingForm = () => {
  const navigate = useNavigate();

  const handleCheckRates = (event) => {
    event.preventDefault();
    navigate('/property-list');
  };

  return (
    <div className="booking-form">
      <h2>Scared you can't afford it?</h2>
      <p>Don't worry, our hotel offers the best affordable rates you can ever find.</p>
      <form onSubmit={handleCheckRates}>
        <input type="text" placeholder="dd-mm-yyyy" />
        <input type="text" placeholder="dd-mm-yyyy" />
        <input type="text" placeholder="Guests" />
        <input type="text" placeholder="Children" />
        <button type="submit">CHECK RATES</button>
      </form>
    </div>
  );
};

export default BookingForm;
