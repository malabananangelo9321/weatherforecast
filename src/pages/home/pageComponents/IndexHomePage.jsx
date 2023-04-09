import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Search from "../../../components/search/Search";
import "../css/homePage.css";
import { useNavigate } from "react-router-dom";
const IndexHomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [state, setState] = React.useState({
    search: "",
  });
  const onChangeText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onClickSearch = () => {
    navigate("/weather/" + state.search);
  };
  return (
    // * HOME CONTAINER START *
    <form onSubmit={onClickSearch}>
      <div className="landing-container">
        <p>{user.name}</p>
        <p>{`https://github.com/${user.nickname}`}</p>
        {/* SEARCH SECTION START */}

        <div className="search-section">
          <Search
            value={state.search}
            onChangeText={onChangeText}
            name="search"
            required={true}
          />
        </div>
        {/* SEARCH SECTION START */}
        {/* SEARCH BUTTON SECTION START */}
        <div className="search-button-section ">
          <button className="button-style" type="submit">
            Display Weather
          </button>
        </div>

        {/* SEARCH BUTTON SECTION START */}
      </div>
    </form>
    // * HOME CONTAINER END *
  );
};

export default IndexHomePage;
