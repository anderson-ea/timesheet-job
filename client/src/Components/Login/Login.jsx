import React, { useState } from "react";
import '../../App.css';
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";

import logo from "../../Assets/REDI-FINAL-Light-03.svg"

//import icons
import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"

const Login = () => {
  //use states to hold user inputs for login
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  //function to send what registration info the user has submitted
  const loginUser = (e) => {
    //prevent submitting
    e.preventDefault()
    
    Axios.post('http://localhost:3002/login', {
      //create variable to send to server
      LoginEmail: loginEmail,
      LoginPassword: loginPassword
    }).then((response) => {
      //if credentials don't match
      if (response.data.message) {
        navigateTo('/') //navigate back to same login page
      } else {
        navigateTo('/dashboard') //navigate to dashboard
      }
    })
  }

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="imgDiv flex column">
          <img src={logo} alt="logo"/>
          <div className="textDiv">
            <h1 className="title">Timesheet</h1>
            <div className="footerDiv flex">
              <span className="text">Don't have an account?</span>
              <Link to={'./register'}>
                <button className="btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="formDiv flex">
          <form action="" className="form grid">
            <span className="showMessage">Login Status will go here</span>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <FaUserShield className="icon"/>
                <input type="text" id="email" 
                  placeholder="Enter Email" onChange={event => 
                    setLoginEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon"/>
                <input autoComplete="on" type="password" id="password"
                  placeholder="Enter Password" onChange={event => 
                    setLoginPassword(event.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon"/>
            </button>
            <a href="/dashboard">dash</a>
            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login