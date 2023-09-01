import React from "react";
import PropTypes from "prop-types";

const WeatherCard = ({ location, current, forecastday }) => {
  console.log({ location, current, forecastday });
  if (!location || !current || !forecastday) {
    return null;
  }
  const { name, region } = location;
  const { temp_c } = current;
  const {
    day: {
      maxtemp_c,
      mintemp_c,
      avgtemp_c,
      maxwind_mph,
      totalprecip_mm,
      daily_will_it_rain,
      avgvis_miles,
      avghumidity,
      daily_chance_of_rain,
      uv,
      condition: { text, icon },
    },
    astro: {
      sunrise,
      sunset,
      moonrise,
      moonset,
      moon_phase,
      moon_illumination,
      is_moon_up,
      is_sun_up,
    },
  } = forecastday;
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <h2 className="text-2xl font-semibold mb-2">
        Weather forecast for {name}/{region}
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <p>Max Temperature: {maxtemp_c}°C</p>
          <p>Min Temperature: {mintemp_c}°C</p>
          <p>Average Temperature: {avgtemp_c}°C</p>
          <p>Max Wind Speed: {maxwind_mph} mph</p>
          <p>Total Precipitation: {totalprecip_mm} mm</p>
        </div>
        <div className="w-full md:w-1/2">
          <p>Average Visibility: {avgvis_miles} miles</p>
          <p>Average Humidity: {avghumidity}%</p>
          <p>Will it Rain: {daily_will_it_rain ? "Yes" : "No"}</p>
          <p>Chance of Rain: {daily_chance_of_rain}%</p>
          <p>UV Index: {uv}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Condition: {text}</p>
        <img src={icon} alt="Weather Icon" className="w-16 h-16" />
      </div>
      <div className="mt-4">
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
        <p>Moonrise: {moonrise}</p>
        <p>Moonset: {moonset}</p>
        <p>Moon Phase: {moon_phase}</p>
        <p>Moon Illumination: {moon_illumination}%</p>
        <p>Is Moon Up: {is_moon_up ? "Yes" : "No"}</p>
        <p>Is Sun Up: {is_sun_up ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    region: PropTypes.string,
  }),
  current: PropTypes.shape({
    temp_c: PropTypes.number,
  }),
  forecastday: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.shape({
        maxtemp_c: PropTypes.number,
        mintemp_c: PropTypes.number,
        avgtemp_c: PropTypes.number,
        maxwind_mph: PropTypes.number,
        totalprecip_mm: PropTypes.number,
        daily_will_it_rain: PropTypes.number,
        avgvis_miles: PropTypes.number,
        avghumidity: PropTypes.number,
        daily_chance_of_rain: PropTypes.number,
        uv: PropTypes.number,
        condition: PropTypes.shape({
          text: PropTypes.string,
          icon: PropTypes.string,
        }),
      }),
      astro: PropTypes.shape({
        sunrise: PropTypes.string,
        sunset: PropTypes.string,
        moonrise: PropTypes.string,
        moonset: PropTypes.string,
        moon_phase: PropTypes.string,
        moon_illumination: PropTypes.string,
        is_moon_up: PropTypes.number,
        is_sun_up: PropTypes.number,
      }),
    })
  ),
};

export default WeatherCard;
