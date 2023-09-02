import React from "react";
import PropTypes from "prop-types";
import DetailsCard from "./DetailsCard";

const WeatherCard = ({ location, current, forecastday }) => {
  if (location.name && current.temp_c && forecastday) {
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
    } = forecastday[0];

    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center p-2">
            <p className="text-xl font-semibold">
              Forecast for {name}/{region}
            </p>
          </div>
          <div className="inline-flex items-center">
            <p className="font-semibold mx-2">Condition:</p>
            <div>{text}</div>
            <img src={icon} alt="Weather Icon" className="w-16 h-16 mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
          <DetailsCard label="Current Temperature" value={`${temp_c}°C`} />
          <DetailsCard label="Min Temperature" value={`${mintemp_c}°C`} />
          <DetailsCard label="Average Temperature" value={`${avgtemp_c}°C`} />
          <DetailsCard label="Max Wind Speed" value={`${maxwind_mph} mph`} />
          <DetailsCard
            label="Total Precipitation"
            value={`${totalprecip_mm} mm`}
          />
          <DetailsCard
            label="Average Visibility"
            value={`${avgvis_miles} miles`}
          />
          <DetailsCard label="Average Humidity" value={`${avghumidity}%`} />
          <DetailsCard
            label="Will it Rain"
            value={daily_will_it_rain ? "Yes" : "No"}
          />
          <DetailsCard
            label="Chance of Rain"
            value={`${daily_chance_of_rain}%`}
          />
          <DetailsCard label="UV Index" value={uv} />
          <DetailsCard label="Max Temperature" value={`${maxtemp_c}°C`} />
          <DetailsCard label="Sunrise" value={sunrise} />
          <DetailsCard label="Sunset" value={sunset} />
          <DetailsCard label="Moonrise" value={moonrise} />
          <DetailsCard label="Moonset" value={moonset} />
          <DetailsCard label="Moon Phase" value={moon_phase} />
          <DetailsCard
            label="Moon Illumination"
            value={`${moon_illumination}%`}
          />
          <DetailsCard label="Is Moon Up" value={is_moon_up ? "Yes" : "No"} />
          <DetailsCard label="Is Sun Up" value={is_sun_up ? "Yes" : "No"} />
          <DetailsCard label="Moon Phase" value={moon_phase} />
        </div>
      </div>
    );
  }
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
