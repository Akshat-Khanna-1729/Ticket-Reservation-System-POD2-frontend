import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyBookings.css';
import MyBookingCard from './MyBookingCard';

const MyBookings = () => {
  const [mybookingsData, setMybookingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:1010/pastBookings';

    // Define the user ID (modify this based on where you get the user ID)
    const userId = '123'; // Replace with the actual user ID

    // Make a GET request using Axios with the user ID as a query parameter
    axios.get(apiUrl, {
        params: {
          userId: userId
        }
      })
      .then(response => {
        setMybookingsData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []); // The empty dependency array ensures that this effect runs only once after the component mounts

  return (
    <div>
      <div className="mybookings-heading"> 
        <h1>YOUR BOOKINGS</h1>
      </div>
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div className="mybookings">  
          {mybookingsData.map(item => (
            <MyBookingCard 
              key={item.transaction_id}
              id={item.transaction_id}
              traveldate={item.travel_date}
              start={item.ticket_from_station} 
              end={item.ticket_to_station} 
              status={item.ticket_payment_status}
              fare={item.ticket_fare_amount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
