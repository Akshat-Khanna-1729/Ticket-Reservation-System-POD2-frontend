import React from 'react'
import logo from '../../Assets/logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  async function save(event) {
    event.preventDefault();
    try{
      await axios.post("API URL", {
        email: email,
        password: password,  
      }).then((res) =>{
        if(res.data.message == "Email not exists"){
          alert("Email does not exist");
        }
        else if(res.data.message == "Login success"){
          navigate('/home');
        }
        else{
          alert("Email and password do not match");
        }
      }, fail => {
        console.error(fail);
      });
    }catch(err){
      alert(err);
    }
  
  }


  return (
    <div className="login-wrapper">
      <div className="login-wrapper-login">

        <div className="login-wrapper-login-box">
          <h2>LOGIN</h2>
            <form>
              <div className= "form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
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
              <button className= "btn" type="submit" onClick={save}>LOGIN</button>

              <Link to="/signup">
                <button className= "btn">NEW USER REGISTRATION</button>
              </Link>
              
            </form>
        </div>   
      </div>


      <div className="login-wrapper-logo">
        <img src={logo} alt="logo display"/>
      </div>

      
    </div>
    
  )
}

export default Login

