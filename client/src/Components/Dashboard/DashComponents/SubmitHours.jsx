import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const SubmitHours = () => {
  const [startDate, setStartDate] = useState(new Date())

  const submitHours = () => {
    console.log(startDate)
  }

  return (
    <div className='submitContainer'>
      <div className="dateContainer">
        Date: 
        <br /><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div className="timeContainer">
        Time:
        <br />time plugin maybe
      </div>
      <div className="locationContainer">
        Location:
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
        Description:
        <br /><textarea className="descriptionText" type="text"></textarea>
      </div>
      <button className="btn" type='submit' onClick={submitHours}>Submit</button>
    </div>
  )
}

export default SubmitHours