import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ViewHours = () => {
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  const [dateStatus, setDateStatus] = useState('')
  const [dateStatusHolder, setDateStatusHolder] = useState('message')

  const userID = localStorage.getItem('user')

  useEffect (() => {
    if (dateStatus !== '') {
      setDateStatusHolder('showMessage') //no dates found message
    }
  }, [dateStatus])

  const checkDates = (e) => {
    e.preventDefault()

    axios.get('http://localhost:3002/checkDates', {
      FromDate: fromDate,
      ToDate: toDate,
      UserID: userID
    }).then((response) => {
      if (response.data.message) {
        console.log('no results')
        setDateStatus('No results found')
      } else {console.log(response)}
    })
    // return(
    //   <div className="date-row">
    //     <div className="date-c1">{date}</div>
    //     <div className="date-c2">{location}</div>
    //     <div className="date-c3">{hours}</div>
    //   </div>
    // )
  }

  return (
    <form className='viewContainer' onSubmit={checkDates}>
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
      <span className={dateStatusHolder}>{dateStatus}</span>
    </form>
  )
}

export default ViewHours