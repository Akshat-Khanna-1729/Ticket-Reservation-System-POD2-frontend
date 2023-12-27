import React from 'react';
import './Trainlist.css';
import Traincard from './Traincard.jsx'

const Trainlist = ({trainData, start, end, date,  startTime, fare, numberofpassengers}) => {
  
  return (
    <div>
      {trainData.map(item => (
        <Traincard name = {item.trainName} start={start} date={date} startTime={startTime} end={end}  fare={fare} numberofpassengers={numberofpassengers}/>
      ))}
    </div>
  )
}

export default Trainlist;