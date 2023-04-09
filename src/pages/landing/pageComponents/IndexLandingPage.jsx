import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/landing.css";
const IndexLandingPage = () => {
  const { loginWithRedirect } = useAuth0();
  const onLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        redirect_uri: "http://localhost:3000/#/home",
      },
    });
  };
  return (
    // * LANDING CONTAINER START *
    <div className="landing-container">
      {/* LANDING ITEM START */}
      <div className="landing-item">
        {/* WELCOME GREETING ITEM START */}
        <div>
          <p>Hello World!</p>
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
          <button className="button-style" onClick={onLogin}>
            Login
          </button>
        </div>
        {/* LOGIN ITEM BUTTON END */}
      </div>
      {/* LANDING ITEM END */}
    </div>
    // * LANDING CONTAINER END *
  );
};

export default IndexLandingPage;
