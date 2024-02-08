import React from "react";
import { useSelector } from "react-redux";
import WeatherCardNew from "./cards/WeatherCardNew";
import ErrorCard from "./cards/ErrorCard";
import Loader from "./Loader";

const Weather = () => {
  const {
    data: {
      location,
      current,
      forecast: { forecastday },
    },
    error,
    loading,
  } = useSelector((state) => state.weatherReducer);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen items-center justify-center">
          <div className="h-full w-full p-1 m-auto">
            {error ? (
              <ErrorCard error={error} />
            ) : (
              <WeatherCardNew
                location={location}
                current={current}
                forecastday={forecastday}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
