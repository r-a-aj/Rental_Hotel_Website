import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Header = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/property-list');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="https://images.squarespace-cdn.com/content/v1/61d64c2d48b89234685d2373/b96915b7-8cfb-4b73-adab-0f302524469b/Feathers+Hotel+logo_website-04.png" alt="Star Hotels" /> {/* Replace with your logo image */}
        <span className='hotel-name'>FEATHERS HOTEL</span>
      </div>
      <nav className="nav">
        <a href className='home'>Home</a>
        <a href='/property-list'>Rooms and Suites</a>
        <a href>Facilities</a>
        <a href>Contact Us</a>
      </nav>
      <button type="button" className="book-now" onClick={handleBookNow}>BOOK NOW</button>
    </header>
  );
};

export default Header;
