import React from 'react';
import './Trainlist.css';
import Traincard from './Traincard.jsx'
import trainData from './TrainData.js'

const Trainlist = () => {
  return (
    <div>
      {trainData.map(item => (
        <Traincard start={item.start} end={item.end} vacancy={item.vacancy} fare={item.fare}/>
      ))}
    </div>
  )
}

export default Trainlist