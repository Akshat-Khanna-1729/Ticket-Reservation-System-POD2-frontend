import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Navbar from './Components/Dashboard/Navbar';
import Home from './Components/Dashboard/Home/Home';
import Profile from './Components/Dashboard/Profile';
import MyBookings from './Components/Dashboard/MyBookings/MyBookings';
import ContactUs from './Components/Dashboard/ContactUs';
import Book from './Components/Dashboard/Home/Book/Book.jsx';
import "./App.css";
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';

function App() {

  // const { isAuthenticated} = useContext(AuthContext);
  const isAuthenticated = true;

  return (
    <div>
      <Router>
        <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/signup' element = {<Signup/>}/>  
          <Route path = '/home' element ={isAuthenticated?(

            <div className="container1">
              <Navbar/>
              <Home/>
            </div>
            ): (<div><Navigate to= "/"/></div>)}/>

          <Route path = '/home/booking' element = {
            <div className="container1">
              <Navbar/>
              <Book/>
            </div>
          }/>

          <Route path = '/profile' element = {
            <div className="container1">
              <Navbar/>
              <Profile/>
            </div>
          }/>
          <Route path = '/mybookings' element = {
            <div className="container1">
              <Navbar/>
              <MyBookings/>
            </div>
          }/>

          <Route path = '/contactus' element = {
            <div className="container1">
              <Navbar/>
              <ContactUs/>
            </div>
          }/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
