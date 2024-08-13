import React, { useState } from 'react';
import './PaymentProcessing.css';

const PaymentProcessing = ({ eventDetails, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulating payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      // In a real application, you would make an API call to your payment processor here
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-processing">
      <h2>Payment Processing</h2>
      <div className="event-summary">
        <h3>Event Summary</h3>
        <p>Event: {eventDetails.name}</p>
        <p>Date: {eventDetails.date}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="payment-method">
          <h3>Select Payment Method</h3>
          <label>
            <input
              type="radio"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="debit"
              checked={paymentMethod === 'debit'}
              onChange={handlePaymentMethodChange}
            />
            Debit Card
          </label>
        </div>

        {paymentMethod && (
          <div className="card-details">
            <h3>Enter Card Details</h3>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              required
            />
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
            />
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              required
            />
            <input
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleInputChange}
              placeholder="Name on Card"
              required
            />
          </div>
        )}

        <button type="submit" disabled={isProcessing || !paymentMethod}>
          {isProcessing ? 'Processing...' : `Pay $${totalAmount}`}
        </button>
      </form>

      {paymentStatus === 'success' && (
        <div className="payment-status success">
          Payment processed successfully!
        </div>
      )}

      {paymentStatus === 'error' && (
        <div className="payment-status error">
          Error processing payment. Please try again.
        </div>
      )}
    </div>
  );
};

export default PaymentProcessing;