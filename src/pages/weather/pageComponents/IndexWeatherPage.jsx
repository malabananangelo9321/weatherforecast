import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "../../../components/table/Table";
import {
  apiKeyOpenWeatherMap,
  apiOpenWeatherMap,
} from "../../../utils/ApiUtils";
import "./css/weather.css";
import axios from "axios";
import moment from "moment";
const width = window.innerWidth;
const IndexWeatherPage = () => {
  const { search } = useParams();
  const [state, setState] = React.useState({
    theadData: [
      { name: "Date (mm/dd/yyyy)", header: "date" },
      { name: "Temp(F)", header: "temp" },
      { name: "Description", header: "description" },
      { name: "Main", header: "main" },
      { name: "Pressure", header: "pressure" },
      { name: "Humidity", header: "humidity" },
    ],
    dataList: [],
  });
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };
  React.useEffect(() => {
    getWeather();
    const header = [
      { name: "Date (mm/dd/yyyy)", header: "date" },
      { name: "Temperature(F)", header: "temp" },
    ];
    if (width < 780) {
      setState((prev) => ({ ...prev, theadData: header }));
    }
  }, []);
  const getWeather = async () => {
    // GET WEATHER DATA START
    try {
      const res = await axios.get(
        `${apiOpenWeatherMap}weather?q=${search}&units=metric&appid=${apiKeyOpenWeatherMap}`
      );
      const weatherStatus = [
        {
          date: moment(new Date()).format("MM/DD/YYYY"),
          temp: convertCelciusTotFahrenheit(res.data?.main.temp),
          description: res.data?.weather[0].description,
          main: res.data?.weather[0].main,
          pressure: res.data?.main.pressure,
          humidity: res.data?.main.humidity,
        },
      ];
      setState((prev) => ({
        ...prev,
        dataList: weatherStatus,
      }));
    } catch (error) {
      alert(
        "WARNING, " + String(error.response.data.message).toLocaleUpperCase()
      );
    }

    // GET WEATHER DATA End
  };
  const convertCelciusTotFahrenheit = (celcius) => {
    // FORMULA FOR CONVERTING CELCIUS TO FAHRENHEIT
    const ans = (celcius * 9) / 5 + 32;
    return parseFloat(ans).toFixed(2);
  };
  return (
    // * WEATHER CONTAINER START *
    <div className="landing-container">
      <div className="landing-item">
        {/* TABLE COMPONENT START */}
        <Table header={state.theadData} dataList={state.dataList} />
        {/* TABLE COMPONENT END */}
        {/* BACK BUTTON SECTION START */}
        <div className="search-button-section button-back">
          <button className="button-style" onClick={onBack}>
            Back
          </button>
        </div>
      </div>

      {/* BACK BUTTON SECTION START */}
    </div>
    // * WEATHER CONTAINER END *
  );
};

export default IndexWeatherPage;
