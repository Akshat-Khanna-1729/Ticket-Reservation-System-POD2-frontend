import React from 'react';
import './MyBookings.css';
import MyBookingCard from './MyBookingCard';
import MyBookingsData from './MyBookingsData.js';

const MyBookings = () => {
  return (
    <div>
      <div className="mybookings-heading"> 
        <h1>YOUR BOOKINGS</h1>
      </div>
      <div className="mybookings">  
        {MyBookingsData.map(item => (
          <MyBookingCard 
            id= {item.id}
            bookingdate={item.bookingdate}
            traveldate={item.traveldate}
            start={item.start} 
            end={item.end} 
            status={item.status}/>
        ))}
      </div>
    </div>
  )
}

export default MyBookings