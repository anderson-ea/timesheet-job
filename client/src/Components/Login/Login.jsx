import React from "react";
import '../../App.scss';
import { Link, NavLink } from "react-router-dom"

import logo from "./Assets/REDI-FINAL-Light-03.svg"

//import icons
import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"

const Login = () => {
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
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon"/>
                <input type="text" id="username" placeholder="Enter Username"/>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon"/>
                <input autoComplete="on" type="password" id="password" placeholder="Enter Password"/>
              </div>
            </div>
            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon"/>
            </button>

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