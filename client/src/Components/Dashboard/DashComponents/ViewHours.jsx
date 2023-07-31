import React from 'react'

const ViewHours = () => {
  return (
    <div className='viewContainer'>
      <div className="dateContainer">
        <label>Select Dates:</label>
        <div className="flex fromToContainer">
          <label>from:</label>
          <label>to:</label>
        </div>
        <button className="btn" type='submit'>View Hours</button> 
      </div>
      <div className="hoursContainer">list out dates and hours here in a table or larger calendar</div>
    </div>
  )
}

export default ViewHours