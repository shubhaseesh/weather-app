import React from "react";
import PropTypes from "prop-types";

function WeatherDetailsCard({ name, value }) {
  return (
    <div className="flex flex-row justify-between border px-2 py-1 border-white rounded w-100 font-normal text-sm">
      <div className="flex items-start justify-start whitespace-nowrap">
        {name}
      </div>
      <div className="flex flex-row justify-center items-center">{value}</div>
    </div>
  );
}

WeatherDetailsCard.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
};
export default WeatherDetailsCard;
