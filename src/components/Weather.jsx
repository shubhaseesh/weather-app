import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import WeatherCardNew from "./cards/WeatherCardNew";
import ErrorCard from "./cards/ErrorCard";

const Weather = () => {
  const weatherInfo = useSelector((state) => state.weatherReducer);
  const { loading: pageLoading } = useSelector(
    (state) => state.geolocationReducer
  );
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
      <div className="flex h-screen items-center justify-center">
        {pageLoading || loading ? (
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

export default Weather;
