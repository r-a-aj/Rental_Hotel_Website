import React, { useState } from 'react';
import './index.css';

const Checkout = ({ cart, onBackToCart }) => {
  const [form, setForm] = useState({ name: '', email: '', cardNumber: '', expiry: '', cvv: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const totalCost = cart.reduce((total, property) => total + property.price * property.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!form.name) errors.name = 'Name is required';
    if (!form.email) errors.email = 'Email is required';
    if (!form.cardNumber) errors.cardNumber = 'Card Number is required';
    if (!form.expiry) errors.expiry = 'Expiry date is required';
    if (!form.cvv) errors.cvv = 'CVV is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="checkout">
      {submitted ? (
        <div className="checkout-confirmation">
          <h2>Thank you for your booking!</h2>
          <p>Your booking has been confirmed. You will receive an email with the details shortly.</p>
          <button onClick={onBackToCart}>Back to Booking</button>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
          </div>
          <div className="form-group">
            <label>Expiry Date:</label>
            <input
              type="text"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
            />
            {errors.expiry && <p className="error">{errors.expiry}</p>}
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
            />
            {errors.cvv && <p className="error">{errors.cvv}</p>}
          </div>
          <div className="form-summary">
            <p>Total Cost: Rs. {totalCost.toFixed(2)}</p>
          </div>
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="back-button" onClick={onBackToCart}>Back to Cart</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
