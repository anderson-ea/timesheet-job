import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const SubmitHours = () => {
  const [date, setDate] = useState('')
  const [hours, setHours] = useState(null)
  const [jobLocation, setJobLocation] = useState('Arrowhead')
  const [description, setDescription] = useState('')
  const [formStatusHolder, setFormStatusHolder] = useState('message')
  const [formStatus, setFormStatus] = useState('')
  const userID = localStorage.getItem('user')

  const incompleteForm = !date || !hours || !description || !jobLocation

  useEffect (() => {
    if (formStatus !== '') {
      setFormStatusHolder('showMessage') //show submission denied message
    }
  }, [formStatus])

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/dashboard', {
      //create variable to send to server
      UserID: userID,
      Date: date,
      Hours: hours,
      JobLocation: jobLocation,
      Description: description,
    }).then((response) => {
      //if date has already been entered by user
      if (response.data.message) {
        setFormStatus('Hours for this date already exist.')
      } else {
        console.log('data logged')
      }
    })
  }

  return (
    <form className='flex column submitContainer' id='form' onSubmit={e => submitForm(e.target.value)}>
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
        <textarea className="descriptionText" maxLength={300}
          placeholder="Describe work done. 300 max characters" type="text"
          onChange={(event) => {setDescription(event.target.value)}}
        >
        </textarea>
      </div>
      <button 
        form='form'
        type='submit'
        disabled={incompleteForm}
        className={!incompleteForm ? 'btn' : 'btnIncomplete'} 
      >Submit Hours
      </button>
      {incompleteForm && <div><i>all fields required</i></div>}
      <span className={formStatusHolder}>{formStatus}</span>
    </form>
  )
}

export default SubmitHours