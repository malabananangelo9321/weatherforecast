import React from "react";

import "../css/landing.css";
const IndexLandingPage = () => {
  return (
    // * LANDING CONTAINER START *
    <div className="landing-container">
      {/* LANDING ITEM START */}
      <div className="landing-item">
        {/* WELCOME GREETING ITEM START */}
        <div>
          <p>
            Welcome to the weather forecast web application. Please login with
            your
          </p>
          <p>
            Github user to use the application and view te weather in your city.
          </p>
        </div>
        {/* WELCOME GREETING ITEM END */}
        {/* LOGIN ITEM BUTTON START */}
        <div>
          <button className="button-style">Login</button>
        </div>
        {/* LOGIN ITEM BUTTON END */}
      </div>
      {/* LANDING ITEM END */}
    </div>
    // * LANDING CONTAINER END *
  );
};

export default IndexLandingPage;
