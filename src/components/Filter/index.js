import React from 'react';
import './index.css';

const Filter = () => {
  return (
    <div className="filter">
      <h3>Filters</h3>
      <button className="reset-button">RESET</button>
      <div className="filter-section">
        <h4>Your Budget</h4>
        <input type="range" min="1000" max="10000" />
        <div className="budget-inputs">
          <input type="text" value="1000" readOnly />
          <span>to</span>
          <input type="text" value="10000" readOnly />
        </div>
      </div>
      <div className="filter-section">
        <h4>Amenities</h4>
        <div className="checkbox">
          <input type="checkbox" id="wifi" />
          <label htmlFor="wifi">Free WiFi</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="breakfast" />
          <label htmlFor="breakfast">Continental Breakfast</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
