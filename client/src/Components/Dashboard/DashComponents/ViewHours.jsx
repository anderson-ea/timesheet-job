import React from 'react'

const ViewHours = () => {
  return (
    <div className='viewContainer'>
      <div className="dateContainer">
        Select Dates:
        <div className="flex fromToContainer">
          <div className="fromDate">from:</div>
          <div className="toDate">to: empty input div here with stuff</div>
        </div>
        <button className="btn" type='submit'>View Hours</button> 
      </div>
      <div className="hoursContainer">list out dates and hours here in a table or larger calendar</div>
    </div>
  )
}

export default ViewHours