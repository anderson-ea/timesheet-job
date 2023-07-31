import React, { useState } from 'react'

const SubmitHours = () => {
  const [startDate, setStartDate] = useState(new Date())

  const submitHours = () => {
    console.log(startDate)
  }

  return (
    <div className='flex column submitContainer'>
      <div className="dateContainer">
        <label>Date:</label> 
        <input type="datetime-local" id="meeting-time"
          name="meeting-time" value="2018-06-12T19:30"
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="timeContainer">
        <label>Hours Worked</label>
        <div className="flex fromToContainer">
          <label>from:</label>
          <input type="time" id="appt" name="appt"
          min="09:00" max="18:00" required></input>
          <label>to:</label>
          <input type="time" id="appt" name="appt"
          min="06:00" max="20:00" required></input>
        </div>
      </div>
      <div className="locationContainer">
        <label>Location:</label>
        <br />
        <select name="locations" id="locations">
          <option value="Elk Park Rd">Elk Park Rd</option>
          <option value="Little Gem">Little Gem</option>
          <option value="Peak View Park">Peak View Park</option>
          <option value="Residential">Residential</option>
          <option value="Village at Tamarac">Village at Tamarac</option>
        </select>
      </div>
      <div className="descriptionContainer">
        <label>Description:</label>
        <br /><textarea className="descriptionText" type="text"></textarea>
      </div>
      <button className="btn" type='submit' onClick={submitHours}>Submit</button>
    </div>
  )
}

export default SubmitHours