import React, { useContext, useEffect, useState } from "react"
import '../../App.css'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import AuthContext from "../../context/AuthProvider" // setAuth when login babyyyy

import logo from "../../Assets/REDI-FINAL-Light-03.svg"

//import icons
import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"

const Login = () => {
  //hold user context
  const { setAuth } = useContext(AuthContext)

  //use states to hold user inputs for login
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')

  //function to send what registration info the user has submitted
  const loginUser = (e) => {
    //prevent submitting
    e.preventDefault()
    
    axios.post('http://localhost:3002/login', {
      //create variable to send to server
      LoginEmail: loginEmail,
      LoginPassword: loginPassword
    }).then((response) => {
      //if credentials don't match
      if (response.data.message) {
        navigateTo('/') //navigate back to same login page
        setLoginStatus(`Incorrect email or password`)
      } else {
        setAuth(response.data[0])
        navigateTo('/dashboard') //navigate to dashboard
      }
    })
  }

  useEffect(() => {
    if (loginStatus !== '') {
      setStatusHolder('showMessage') //show login message
      setTimeout(() => {
        setStatusHolder('message') //hide it after 4s
      }, 4000)
    }
  }, [loginStatus])

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
            <span className={statusHolder}>{loginStatus}</span>
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