import React from 'react';
import './MyBookingCard.css';

const MyBookingCard = (props) => {

    async function handleCancel(){

    }

    return (
        <div className="bookingcard">
            <div className="bookingcard-data">
                <div className="bookingcard-data-1">
                    <div>Booking id: {props.id}</div>
                    <div>Booking Date: {props.fare}</div>
                </div>

                <div className="bookingcard-data-1">
                    <div>Travel Date: {props.traveldate}</div>
                    <div>Boarding Station: {props.start}</div>
                    <div>Destination Station: {props.end}</div>
                    {/* <div>Boarding Time: {props.starttime}</div> */}
                </div>

                
                <div className="bookingcard-data-2">
                    <div>Trip Status:</div>
                    <div>{props.status}</div>   
                </div>
                
            </div>

            {props.status === 'Upcoming' && (
                <button className="bookingcard-cancel"onClick={handleCancel()}>
                    CANCEL
                </button>
            )}
            
            
        </div>
    )
}

export default MyBookingCard;