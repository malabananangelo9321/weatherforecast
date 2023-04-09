import React from "react";
import "./css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
const renderEqualProps = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};
const Search = (props) => {
  const { value, onChangeText, name, ...param } = props;
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="input-icon-search" />
      <input
        className="input-search"
        value={value}
        onChange={onChangeText}
        name={name}
        required={param.required}
      />
    </div>
  );
};

export default React.memo(Search, renderEqualProps);
