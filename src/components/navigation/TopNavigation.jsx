import React from "react";
import { Outlet } from "react-router-dom";
import "./css/topNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/fontawesome-free-solid";
const TopNavigation = () => {
  return (
    <div>
      <div className="top-nav">
        <FontAwesomeIcon icon={faCloud} className="top-icon" />
        <h2>Weather Forcast</h2>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default TopNavigation;
