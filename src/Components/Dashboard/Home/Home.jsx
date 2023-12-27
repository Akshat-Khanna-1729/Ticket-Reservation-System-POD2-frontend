import React,{useState} from 'react';
import './Home.css';
import axios from 'axios';
import Trainlist from './Trainlist';
import { useAuth } from '../../../Context/AuthContext';

const Home = () => {
  
  const {user} = useAuth();
  const [searchtrains, setSearchTrains] = useState(false);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [date, setDate] = useState('');
  const [numberofpassengers, setNumberOfPassengers] = useState(1);
  const [time, setTime] = useState('');
  const [trainData, setTrainData] = useState([]);
  
    const extractNumber = (code) => {
      // Use regular expression to extract the numeric part
      const matches = code.match(/\d+/);
      
      // Check if there is a match
      if (matches) {
        // Convert the matched string to a number
        const numericPart = parseInt(matches[0], 10);
        return numericPart;
      } else {
        // Handle the case where there is no numeric part
        return null;
      }
    }
  const calculateFare = () => {
      const startNumber = extractNumber(start);
      const endNumber = extractNumber(end);
      return (endNumber - startNumber)*numberofpassengers*100;
  }
  const formatTime = (selectedTime) => {
    const [hours, minutes] = selectedTime.split(':');
    const roundedHours = Math.ceil((parseInt(minutes) / 60) + parseInt(hours)) % 24;
    return `T${roundedHours}`;
  };

  const formattedTime = formatTime(time);

  const parseFormattedTime = (formattedTime) => {
    const hour = formattedTime.slice(1);
    return `${hour}:00`;
  };

  const travelTime = parseFormattedTime(formattedTime);

  async function save(event) {
    event.preventDefault();
    setSearchTrains(true);
    
    try {
      
      const response = await axios.get(`http://localhost:1010/train/search?time=${formattedTime}&station_code=${start}`, {
      });
      console.log(response.data);
      setSearchTrains(true);
      setTrainData(response.data);
    } catch (err) {
      console.error(err);
      alert("Error while fetching data");
    }
  
  }

  return (
    <div className="home-container">

      <div className="home-container-search">
        <h1>WELCOME, {user.firstname}</h1>
        <h1>BOOK YOUR TICKETS NOW!</h1>

        <div className="home-container-search-form">
          <form>
            <div className="home-container-search-form-stations">
              <div className= "search-form">
              <label>Enter Boarding Station</label>
              <input
                type="text"
                id="start"
                placeholder="Boarding Station"
                value={start}
                onChange={(event) => setStart(event.target.value)}
              />
              </div>
            
              <div className= "search-form">
              <label>Enter Destination</label>
              <input
                type="text"
                id="end"
                placeholder="Destination Station"
                value={end}
                onChange={(event) => setEnd(event.target.value)}
              />
              </div>
            </div>
            
            <div className="home-container-search-form-stations">
              <div className= "search-form">
              <label>Date of travel</label>
              <input
                type="date"
                id="date"
                placeholder="Enter Date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
              </div>

              <div className= "search-form">
              <label>Number of Passengers</label>
              <input
                type="number"
                max={5}
                min={1}
                id="numberofpassengers"
                placeholder="Enter the Number of Passengers"
                value={numberofpassengers}
                onChange={(event) => setNumberOfPassengers(event.target.value)}
              />
              </div>
            </div>

            <div className="home-container-search-form-stations">
              <div className= "search-form">
              <label>Time of travel</label>
              <input
                type="time"
                id="time"
                placeholder="Enter Time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
              </div>
            </div>
            

            <button className= "search-btn" type="submit" onClick={save}>SEARCH</button>
          </form>
        </div>

      </div>

      <div className="home-container-trains">
        <div>
          {searchtrains && <Trainlist trainData={trainData} start={start} end={end} date={date} startTime={travelTime} fare={calculateFare()} numberofpassengers={numberofpassengers}/>}
        </div>
      </div>

    </div>
  )
}

export default Home