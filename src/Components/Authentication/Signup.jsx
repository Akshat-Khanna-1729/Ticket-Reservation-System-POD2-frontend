import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import logo from '../../Assets/logo.png';
import './Signup.css';

const Signup = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function save(event) {
    event.preventDefault();
    try{
      await axios.post("API URL", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,  
      });
      alert("Successfully Registered");
    }catch(err){
      alert(err);
    }
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-wrapper-login">
        <div className="signup-wrapper-login-box">
          <h2>SIGN UP</h2>
          <form>
            <div className= "form-group">
              <label></label>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
              />
            </div>
            

            <div className= "form-group">
              <label></label>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
              />
            </div>

            <div className= "form-group">
              <label></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className= "form-group">
              <label></label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button className= "btn" type="submit" onClick={save}>REGISTER</button>
          </form>

        </div>

        
      </div>


      <div className="login-wrapper-logo">
        <img src={logo} alt="logo display"/>
      </div>


    </div>
  )
}

export default Signup