import React, { useState } from "react";
import ViewHours from "./DashComponents/ViewHours";
import SubmitHours from "./DashComponents/SubmitHours";

const Dashboard = () => {
  const [toggle, setToggle] = useState(true)

  const switchToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="dashboard flex">
      <div className="flex column dashboardContainer">
        <div className="flex selectedContainer">
          <h2 className={toggle ? "selectedDash" : "notSelected"} onClick={switchToggle}>Submit</h2>
          <h2 className={!toggle ? "selectedDash" : "notSelected"} onClick={switchToggle}>View</h2>
        </div>
        {toggle ? <SubmitHours /> : <ViewHours />}
      </div>
    </div>
  )
}

export default Dashboard