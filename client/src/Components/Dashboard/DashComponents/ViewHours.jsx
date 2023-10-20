import axios from 'axios'
import React, { useState } from 'react'

const ViewHours = () => {
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()

  const userID = localStorage.getItem('user')

  const checkDates = () => {
    axios.get('http://localhost:3002/checkDates', {
      FromDate: fromDate,
      ToDate: toDate,
      UserID: userID
    })
  }
  return(
    <div className="date-row">
      <div className="date-c1">{date}</div>
      <div className="date-c2">{location}</div>
      <div className="date-c3">{hours}</div>
    </div>
  )

  return (
    <form className='viewContainer'>
      <div className="dateContainer">
        <label>Select Dates:</label>
        <div className="fromToContainer">
          <label>from:</label>
          <input type="date" id="fromDate"
            onChange={(event) => setFromDate(event.target.value)}
          />
          <br />
          <label>to:</label>
          <input type="date" id="toDate"
            onChange={(event) => setToDate(event.target.value)}
          />
        </div>
        <button className="btn" type='submit'>View Hours</button> 
      </div>
      <div className="hoursContainer">
        
      </div>
    </form>
  )
}

export default ViewHours