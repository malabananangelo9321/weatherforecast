import React from "react";
import { Outlet } from "react-router-dom";
import "./css/topNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faPowerOff } from "@fortawesome/fontawesome-free-solid";
import { useAuth0 } from "@auth0/auth0-react";
const TopNavigation = () => {
  const { isAuthenticated, logout } = useAuth0();
  const onLogout = () => {
    logout(window.location.origin + "/#/");
    console.log(window.location.origin);
  };

  return (
    <div>
      <div className="top-nav">
        <div className="top-nav-item">
          <FontAwesomeIcon icon={faCloud} className="top-icon" />
          <h2>Weather Forcast</h2>
        </div>

        <div className="top-nav-item">
          {isAuthenticated ? (
            <div onClick={onLogout} className="button-logout">
              <FontAwesomeIcon icon={faPowerOff} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default TopNavigation;
