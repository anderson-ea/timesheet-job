import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SubmitHours = () => {
  const [date, setDate] = useState('')
  const [hours, setHours] = useState(0)
  const [jobLocation, setJobLocation] = useState('Arrowhead')
  const [description, setDescription] = useState('')
  const [hoursStatusHolder, setHoursStatusHolder] = useState('message')
  const [hoursStatus, setHoursStatus] = useState('test')

  const submitHours = () => {
    console.log(date)
  }

  axios.post('http://localhost:3002/dashboard', {
    //create variable to send to server
    Date: date,
    Hours: hours,
    JobLocation: jobLocation,
    Description: description
  }).then((response) => {
    //if credentials don't match
    if (response.data.message) {
      navigateTo('/dashboard') //navigate back to same dashboard
      setLoginStatus(`Incorrect email or password`)
    } else {
      navigateTo('/dashboard') //navigate to dashboard
    }
  })

  useEffect (() => {
    if (hoursStatus !== '') {
      setHoursStatusHolder('showMessage') //show submission denied message
    }
  }, [hoursStatus])

  return (
    <div className='flex column submitContainer'>
      <div className="dateContainer">
        <label>Date:</label> 
        <input type="date" id="date"
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div className="timeContainer">
        <label>Hours Worked:</label>
        <input type="number" id="hoursWorked"
          onChange={(event) => setHours(event.target.value)}
        />
      </div>
      <div className="locationContainer">
        <label>Location:</label>
        <br />
        <select name="locations" id="locations"
          onClick={(event) => {setJobLocation(event.target.value)}}
        >
          <option value="Arrowhead">Arrowhead</option>
          <option value="Elk Park Rd">Elk Park Rd</option>
          <option value="Little Gem">Little Gem</option>
          <option value="Montrose">Montrose</option>
          <option value="M Lazy C Ranch">M Lazy C Ranch</option>
          <option value="Peak View Park">Peak View Park</option>
          <option value="Residential">Residential</option>
          <option value="Sweetwater">Sweetwater</option>
          <option value="Village at Tamarac">Village at Tamarac</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="descriptionContainer">
        <label>Description:</label>
        <br />
        <textarea className="descriptionText" 
          placeholder="Description of work done" type="text"
          onChange={(event) => {setDescription(event.target.value)}}
        >
        </textarea>
      </div>
      <button className="btn" type='submit' onClick={submitHours}>Submit Hours</button>
      <span className={hoursStatusHolder}>{hoursStatus}</span>
    </div>
  )
}

export default SubmitHours