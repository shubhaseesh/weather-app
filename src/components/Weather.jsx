import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import WeatherCardNew from "./cards/WeatherCardNew";
import ErrorCard from "./cards/ErrorCard";
import PropTypes from "prop-types";

const Weather = ({ loading }) => {
  const weatherInfo = useSelector((state) => state.weatherReducer);
  if (weatherInfo && weatherInfo.data && weatherInfo.data.location) {
    const {
      data: {
        location,
        current,
        forecast: { forecastday },
      },
      error,
      loading: l,
    } = weatherInfo;

    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        {l || loading ? (
          <Loader />
        ) : (
          <div className="h-full w-full p-2 m-auto">
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
        )}
      </div>
    );
  }
};

Weather.propTypes = {
  loading: PropTypes.bool,
};

export default Weather;
