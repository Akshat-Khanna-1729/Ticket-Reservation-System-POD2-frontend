import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import logo from '../../Assets/logo.png';
import './Signup.css';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function save(event) {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('firstname', firstname);
    formdata.append('lastname', lastname);
    formdata.append('email', email);
    formdata.append('password', password);

    for(const [key,value] of formdata.entries()) {
      console.log(`${key}: ${value}`);
    }
    
    try{
      await axios.post("http://localhost:1010/registration/adduser", formdata, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      }).then((res)=>{
          console.log(res.data);
          navigate('/home');
      }, fail =>{
        if(fail.response.data === "User already exists"){
          alert("User already exists. Please login");
          navigate('/');
        }
        console.error(fail.response.data);
      });
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