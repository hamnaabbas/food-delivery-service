import React, { useState } from 'react';
import './checkout.css';
const Checkout = ({ cart=[], onBack }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      alert('Please fill in all the required fields.');
      return;
    }

    setOrderPlaced(true);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <h2>Order Confirmed!</h2>
        <p>Thank you, {userDetails.name}, for your order.</p>
        <p>A confirmation email has been sent to {userDetails.email}.</p>
        <button onClick={onBack}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>
                ${item.price.toFixed(2)} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
      </div>

      {/* User Details Form */}
      <div className="user-details">
        <h3>Shipping Information</h3>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

      {/* Payment Method */}
      <div className="payment-method">
        <h3>Payment Method</h3>
        <label>
          <input
            type="radio"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={handlePaymentChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="debitCard"
            checked={paymentMethod === 'debitCard'}
            onChange={handlePaymentChange}
          />
          Debit Card
        </label>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={handlePaymentChange}
          />
          PayPal
        </label>
      </div>

      {/* Actions */}
      <div className="actions">
        <button onClick={onBack}>Back to Menu</button>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
