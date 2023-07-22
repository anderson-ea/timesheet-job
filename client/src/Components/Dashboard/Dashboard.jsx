import React from "react";
import Body from "./DashComponents/Body";
import SideBar from "./DashComponents/SideBar";

const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <div className="dashboardContainer">
        <SideBar />
        <Body />
        This is Dashboard Page
        <a href="/">Logout</a>
      </div>
    </div>
  )
}

export default Dashboard