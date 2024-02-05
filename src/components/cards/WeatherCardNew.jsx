import React from "react";
import PropTypes from "prop-types";
import WeatherDetailsCard from "./WeatherDetailsCard";
import DetailsCard from "./DetailsCard";
import { IoLocationSharp } from "react-icons/io5";
function WeatherCardNew({ location, current, forecastday }) {
  const {
    date,
    day: {
      maxtemp_c,
      mintemp_c,
      avgtemp_c,
      maxwind_kph,
      totalprecip_mm,
      daily_will_it_rain,
      avgvis_km,
      avghumidity,
      daily_chance_of_rain,
    },
    astro: {
      sunrise,
      sunset,
      moonrise,
      moonset,
      moon_phase,
      moon_illumination,
    },
  } = forecastday[0];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-100 rounded-xl overflow-hidden shadow-md">
      {/* -----------1------------ */}
      <div className="flex flex-col justify-normal content-center text-white w-full h-100 p-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-row justify-between content-center gap-x-2">
          <div className="flex flex-row justify-between gap-10 w-full">
            <div className="flex flex-col">
              <div className="flex flex-row w-100 items-center gap-1 text-lg whitespace-nowrap">
                <IoLocationSharp />
                <p>
                  {location.name}&#x2C;
                  {`${location.region ? ` ${location.region},` : ""} `}
                  {location.country}
                </p>
              </div>
              <div className="whitespace-nowrap text-sm px-1">
                {current.condition.text}
              </div>
            </div>
            <div className="flex flex-row justify-center items-start">
              <div className="h-16 w-16">
                <img src={current.condition.icon} alt="condition" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-100 mb-1">
          <div className="text-5xl">{`${current.temp_c}°C`}</div>
        </div>
        <h3>Weather details</h3>
        <div className="grid grid-cols-1 gap-2">
          <WeatherDetailsCard
            name={"Feels like"}
            value={`${current.feelslike_c}°C`}
          />
          <WeatherDetailsCard
            name={"Humidity"}
            value={`${current.humidity}%`}
          />
          <WeatherDetailsCard
            name={"Pressure"}
            value={`${current.pressure_mb}mb`}
          />
          <WeatherDetailsCard
            name={"Visibility"}
            value={`${current.vis_km}km`}
          />
          <WeatherDetailsCard name={"UV"} value={`${current.uv}`} />
          <WeatherDetailsCard
            name={`${current.wind_dir} Wind`}
            value={`${current.wind_kph}km/h`}
          />
        </div>
      </div>
      {/* ------------2----------- */}
      <div className="flex w-full bg-pink-500">
        <div className="p-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailsCard name={"Date"} value={new Date(date).toDateString()} />
            <DetailsCard
              name={"Minimum Temperature"}
              value={`${mintemp_c}°C`}
            />
            <DetailsCard
              name={"Average Temperature "}
              value={`${avgtemp_c}°C`}
            />
            <DetailsCard
              name={"Maximum Wind Speed"}
              value={`${maxwind_kph}km/h`}
            />
            <DetailsCard
              name={"Total Precipitation"}
              value={`${totalprecip_mm}mm`}
            />
            <DetailsCard name={"Average Visibility"} value={`${avgvis_km}km`} />
            <DetailsCard name={"Average Humidity"} value={`${avghumidity}%`} />
            <DetailsCard
              name={"Will it Rain"}
              value={daily_will_it_rain === 1 ? "Yes" : "No"}
            />
            <DetailsCard
              name={"Chance of Rain"}
              value={`${daily_chance_of_rain}%`}
            />
            <DetailsCard
              name={"Maximum Temperature"}
              value={`${maxtemp_c}°C`}
            />
            <DetailsCard name={"Sunrise "} value={sunrise} />
            <DetailsCard name={"Sunset "} value={sunset} />
            <DetailsCard name={"Moonrise "} value={moonrise} />
            <DetailsCard name={"Moonset "} value={moonset} />
            <DetailsCard name={"Moon Phase"} value={moon_phase} />
            <DetailsCard name={"Moon Illumination"} value={moon_illumination} />
          </div>
        </div>
      </div>
    </div>
  );
}

WeatherCardNew.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    region: PropTypes.string,
  }),
  current: PropTypes.shape({
    temp_c: PropTypes.number,
    humidity: PropTypes.number,
    pressure_mb: PropTypes.number,
    wind_dir: PropTypes.string,
    wind_kph: PropTypes.number,
    vis_km: PropTypes.number,
    uv: PropTypes.number,
    feelslike_c: PropTypes.number,
    condition: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  }),
  forecastday: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.shape({
        maxtemp_c: PropTypes.number,
        mintemp_c: PropTypes.number,
        avgtemp_c: PropTypes.number,
        maxwind_kph: PropTypes.number,
        totalprecip_mm: PropTypes.number,
        daily_will_it_rain: PropTypes.number,
        avgvis_km: PropTypes.number,
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
        moon_illumination: PropTypes.number,
        is_moon_up: PropTypes.number,
        is_sun_up: PropTypes.number,
      }),
    })
  ),
};

export default WeatherCardNew;
