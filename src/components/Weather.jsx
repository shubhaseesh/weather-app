import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import WeatherCard from "./cards/WeatherCard";
import ErrorCard from "./cards/ErrorCard";

const Weather = () => {
  const weatherInfo = useSelector((state) => state.weatherReducer);
  if (weatherInfo && weatherInfo.data && weatherInfo.data.location) {
    const {
      data: {
        location,
        current,
        forecast: { forecastday },
      },
      error,
      loading,
    } = weatherInfo;

    return (
      <div className="flex justify-center items-center w-full ">
        {error ? (
          <ErrorCard error={error} />
        ) : loading ? (
          <Loader />
        ) : (
          <WeatherCard
            location={location}
            current={current}
            forecastday={forecastday}
          />
        )}
      </div>
    );
  }
};

export default Weather;
