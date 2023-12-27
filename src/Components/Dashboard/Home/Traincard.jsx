import React from 'react';
import './Traincard.css';
import { useNavigate } from 'react-router-dom';

const Traincard = ({name, start, end, date,  startTime, fare, numberofpassengers}) => {
    const navigate = useNavigate();
    const handleBookClick=(e)=>{
        e.preventDefault();
        window.localStorage.setItem('name',name);
        window.localStorage.setItem('start',start);
        window.localStorage.setItem('end',end);
        window.localStorage.setItem('date',date);
        window.localStorage.setItem('startTime',startTime);
        window.localStorage.setItem('fare',fare);
        window.localStorage.setItem('numberofpassengers',numberofpassengers);
        navigate('/payment');
        // window.location.replace('/payment');
    }
  return (
    <div className="traincard">
        <div className="traincard-data">
            <div className="traincard-data-up">Train Name</div>
            <div className="traincard-data-down">{name}</div>
        </div>
        <div className="traincard-data">
            <div className="traincard-data-up">Start Time</div>
            <div className="traincard-data-down">{startTime}</div>
        </div>
        <div className="traincard-data">
            <div className="traincard-data-up">Fare</div>
            <div className="traincard-data-down">{fare}</div>
        </div>
        <button className="traincard-data-btn" onClick={(e)=>handleBookClick(e)}>
            BOOK
        </button>
    </div>
  )
}

export default Traincard