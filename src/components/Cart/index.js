import React from 'react';
import './index.css';

const Cart = ({ cart, removeFromCart, updateQuantity, onCheckout, onBackToPropertyList }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const extraMembers = item.quantity > 2 ? item.quantity - 2 : 0;
      return total + item.price + extraMembers * 1000;
    }, 0);
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className='cart-img-container'>
            <img className="cart-img" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp" alt="cart"/>
        <p>Hotel booking is empty</p>
    </div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: Rs. {item.price}</p>
                <p>
                  No. of Members: 
                  <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                </p>
                <button type="button"  className= "remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: Rs. {calculateTotal()}</h3>
            <button type="button"  className= "paynow-button" onClick={onCheckout}>Pay Now</button>
            <button type="button"  className= "back-button" onClick={onBackToPropertyList}>Back</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
