import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import WeatherCard from "./cards/WeatherCard";
import ErrorCard from "./cards/ErrorCard";

const Weather = () => {
  const {
    data: {
      location,
      current,
      forecast: { forecastday },
    },
    loading,
    error,
  } = useSelector((state) => state.weatherReducer);

  return (
    <div className="">
      {error && <ErrorCard error={error} />}
      {!error && loading && <Loader />}
      {!error && !loading && forecastday && (
        <WeatherCard
          location={location}
          current={current}
          forecastday={forecastday}
        />
      )}
      {!error && !loading && !forecastday && <p>Please search any city</p>}
    </div>
  );
};

export default Weather;
