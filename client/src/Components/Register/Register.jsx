import React, { useEffect, useState } from "react"
import '../../App.css'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import logo from "../../Assets/REDI-FINAL-Light-03.svg"

//import icons
import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"
import {MdMarkEmailRead} from "react-icons/md"

const Register = () => {
  
  //useStates for input values
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [regStatusHolder, setRegStatusHolder] = useState('message')
  const [registerStatus, setRegisterStatus] = useState('')
  const navigateTo = useNavigate()

  //function to send what registration info the user has submitted
  const createUser = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3002/register', {
      // create variable to send to server
      Email: email,
      UserName: userName,
      Password: password
    }).then((response) => {
      //if user already exists
      if (response.data.message == 'Email already exists') {
        setRegisterStatus('Email already exists')
      } else {
        navigateTo('/')
      }
    })
  }

  useEffect(() => {
    if (registerStatus !== '') {
      setRegStatusHolder('showMessage') //show login message
      setTimeout(() => {
        setRegStatusHolder('message') //hide it after 4s
      }, 4000)
    }
  }, [registerStatus])

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="imgDiv flex column">
          <img src={logo} alt="logo"/>
          <div className="textDiv">
            <h1 className="title">Timesheet</h1>
            <div className="footerDiv flex">
              <span className="text">Already have an account?</span>
              <Link to={'/'}>
                <button className="btn">Login</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="formDiv flex">
          <form action="" className="form grid">
            <span className={regStatusHolder}>{registerStatus}</span>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon"/>
                <input autoComplete="on" type="text" id="email" placeholder="Enter Email"
                  onChange={(event) => {setEmail(event.target.value)}}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Full Name</label>
              <div className="input flex">
                <FaUserShield className="icon"/>
                <input type="text" id="username" placeholder="Enter First and Last Name"
                  onChange={(event) => {setUserName(event.target.value)}}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon"/>
                <input autoComplete="on" type="password" id="password" placeholder="Enter Password"
                  onChange={(event) => {setPassword(event.target.value)}}
                />
              </div>
            </div>
            <button type="submit" className="btn flex" 
              onClick={createUser}
            >
              <span>Register</span>
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

export default Register