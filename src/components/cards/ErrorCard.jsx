import React from "react";
import PropTypes from "prop-types";

const ErrorCard = ({ error }) => {
  if (!error) return null;
  return (
    <div className="transition-opacity duration-500 opacity-100">
      <div className="text-red-700 px-4 py-2">
        <p>
          {error.message !==
          "Please enter a city name. City name cannot be empty."
            ? "The city could not be found. Please enter a valid city name."
            : error.message}
        </p>
      </div>
    </div>
  );
};

ErrorCard.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string,
    message: PropTypes.string,
    code: PropTypes.string,
    response: PropTypes.shape({
      status: PropTypes.number,
    }),
  }),
};

export default ErrorCard;
