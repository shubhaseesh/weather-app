import React from "react";
import PropTypes from "prop-types";

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
          {/* Row 1 */}
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Current Temprature:</p>
            <div>{temp_c}</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Min Temperature:</p>
            <div>{mintemp_c}°C</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Average Temperature:</p>
            <div>{avgtemp_c}°C</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Max Wind Speed:</p>
            <div>{maxwind_mph} mph</div>
          </div>
          {/* Row 2 */}
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Total Precipitation:</p>
            <div>{totalprecip_mm} mm</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Average Visibility:</p>
            <div>{avgvis_miles} miles</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Average Humidity:</p>
            <div>{avghumidity}%</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Will it Rain:</p>
            <div>{daily_will_it_rain ? "Yes" : "No"}</div>
          </div>
          {/* Row 3 */}
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Chance of Rain:</p>
            <div>{daily_chance_of_rain}%</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">UV Index:</p>
            <div>{uv}</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Max Temperature:</p>
            <div>{maxtemp_c}°C</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Sunrise:</p>
            <div>{sunrise}</div>
          </div>
          {/* Row 4 */}
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Sunset:</p>
            <div>{sunset}</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Moonrise:</p>
            <div>{moonrise}</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Moonset:</p>
            <div>{moonset}</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Moon Phase:</p>
            <div>{moon_phase}</div>
          </div>
          {/* Row 5 */}
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Moon Illumination:</p>
            <div>{moon_illumination}%</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Is Moon Up:</p>
            <div>{is_moon_up ? "Yes" : "No"}</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Is Sun Up:</p>
            <div>{is_sun_up ? "Yes" : "No"}</div>
          </div>
          <div className="inline-flex items-center bg-gray-100 p-4">
            <p className="font-semibold mr-2">Moon Phase:</p>
            <div>{moon_phase}</div>
          </div>
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
