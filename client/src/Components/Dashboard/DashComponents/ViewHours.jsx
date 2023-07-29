import React from 'react'

const ViewHours = () => {
  return (
    <div className='viewContainer'>
      <div className="dateContainer">
        Dates:
        <div className="flex fromToContainer">
          <div className="fromDate">from:</div>
          <div className="toDate">to:</div>
        </div> 
      </div>
      <div className="hoursContainer">list out dates and hours here in a table or larger calendar</div>
    </div>
  )
}

export default ViewHours