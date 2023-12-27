import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import axios from 'axios';
 
const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });
 
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const start=window.localStorage.getItem('start');
  const end=window.localStorage.getItem('end');
  const date=window.localStorage.getItem('date');
  const startTime=window.localStorage.getItem('startTime');
  const fare=window.localStorage.getItem('fare');
  const numberofpassengers=window.localStorage.getItem('numberofpassengers');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1010/payment', {
        "user_id":123,
        "ticket_fare_amount": fare,
        "ticket_payment_method": paymentMethod.toUpperCase(),
        "ticket_payment_status":'Paid',
        "ticket_from_station":start,
        "ticket_to_station":end,
        "travel_date":date,
        "no_of_passengers":numberofpassengers,
        "credit_card_no": formData.cardNumber,
      });
      alert("Your ticket has been booked! Happy journey :)");
      navigate("/mybookings")
    } catch (error) {
      if(error.response.status === 400){
        alert("Please enter a valid card number");
      }
      else if(error.response.status === 402){
        alert("Payment was failed. Please try again");
      }
      
    }
  };
 
  return (
    <div className="payment">
        <h1>Confirm Booking</h1>
       
        <div className="payment-details">
 
          <div className="payment-details-date">
            <div>Date:</div>
            <h3>{date}</h3>  
          </div>
         
 
          <div className="payment-details-stations">
 
         
 
            <div classname="payment-details-stations-list">
              <div>Boarding Station</div>
              <h2>{start}</h2>
              <h2>{startTime}</h2>
            </div>
 
            <div classname="payment-details-stations-list">
              <div>Destination Station</div>
              <h2>{end}</h2>
              <h2></h2>
            </div>
 
          </div>
 
          <form  className="payment-form" onSubmit={handleSubmit}>
 
            <div>
              <div>Total Fare:</div>
              <h3>{fare}</h3>
             
            </div>
 
            <h3>
              Choose Payment Method
            </h3>
 
            <div>
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={handlePaymentChange}
                />
                Card Payment
              </label>
            </div>
 
            <div>
              <label>
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentChange}
                />
                Cash Payment
              </label>
            </div>
 
            {paymentMethod === 'card' && (
              <div className="card-details">
                <label>
                  Card Number: {" "}
                  <input
                    maxLength={16}
                    type="integer"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Expiry: {" "}
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  CVV: {" "}
                  <input
                    maxLength={3}
                    type="password"
                    name="cardCvv"
                    value={formData.cardCvv}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            )}
 
            <button type="submit" className="submit">Pay</button>
          </form>
        </div>
 
    </div>
  )
}
 
export default Payment