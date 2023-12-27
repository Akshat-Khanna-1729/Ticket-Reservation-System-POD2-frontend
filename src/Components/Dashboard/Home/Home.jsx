import React,{useState} from 'react';
import './Home.css';
import axios from 'axios';
import Trainlist from './Trainlist';
import Traincard from './Traincard';

const Home = () => {
  
  const [user] = useState("");
  const [searchtrains, setSearchTrains] = useState(false);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [date, setDate] = useState('');
  const [numberofpassengers, setNumberOfPassengers] = useState(1);
  const [time, setTime] = useState('');

  async function save(event) {
    event.preventDefault();
    setSearchTrains(true);
    try{
      await axios.post("API URL", {
        start: start,
        end: end,
        date: date,
        numberofpassengers: numberofpassengers,
        time: time,  
      }).then((res) =>{
        if(res.data.message == "Trains found"){
          setSearchTrains(true);
        }
        else{
          alert("No trains available");
        }
      }, fail => {
        console.error(fail);
      });
    }catch(err){
      alert(err);
    }
  
  }

  return (
    <div className="home-container">

      <div className="home-container-search">
        <h1>WELCOME, {user}</h1>
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
                onChange={(event) => setDate(event.target.value)}
              />
              </div>
            </div>
            

            <button className= "search-btn" type="submit" onClick={save}>SEARCH</button>
          </form>
        </div>

      </div>

      <div className="home-container-trains">
        <div>
          {searchtrains && <Trainlist/>}
        </div>
      </div>

    </div>
  )
}

export default Home