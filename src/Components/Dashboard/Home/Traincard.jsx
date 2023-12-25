import React from 'react';
import './Traincard.css';

const Traincard = (props) => {
  return (
    <div className="traincard">
        <div className="traincard-data">
            <div className="traincard-data-up">Start Time</div>
            <div className="traincard-data-down">{props.start}</div>
        </div>
        <div className="traincard-data">
            <div className="traincard-data-up">End Time</div>
            <div className="traincard-data-down">{props.end}</div>
        </div>
        <div className="traincard-data">
            <div className="traincard-data-up">Vacancy</div>
            <div className="traincard-data-down">{props.vacancy}</div>
        </div>
        <div className="traincard-data">
            <div className="traincard-data-up">Fare</div>
            <div className="traincard-data-down">{props.fare}</div>
        </div>
        <button className="traincard-data-btn">
            BOOK
        </button>
    </div>
  )
}

export default Traincard