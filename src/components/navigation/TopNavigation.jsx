import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./css/topNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faPowerOff } from "@fortawesome/fontawesome-free-solid";
import { useAuth0 } from "@auth0/auth0-react";

const TopNavigation = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();
  const onLogout = () => {
    logout(window.location.origin + "/#/");
  };
  const onRoute = (route) => {
    let newRoute = route;
    // Add String /default Parameter in URL if route is /weather
    if (newRoute == "/weather") {
      newRoute = `${route}/default`;
    }
    navigate(newRoute);
  };
  const navigations = isAuthenticated
    ? [
        { name: "Home", route: "/" },
        { name: "Weather", route: "/weather" },
      ]
    : [];

  return (
    <div>
      <div className="top-nav">
        <div className="top-nav-item">
          <FontAwesomeIcon icon={faCloud} className="top-icon" />
          <h2>Weather Forcast</h2>
        </div>

        <div className="top-nav-item">
          <ul>
            {navigations.map((val) => {
              return (
                <li key={val.name} onClick={() => onRoute(val.route)}>
                  <a className="nav-color">{val.name}</a>
                </li>
              );
            })}
          </ul>
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
