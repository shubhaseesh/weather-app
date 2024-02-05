import React from "react";
import PropTypes from "prop-types";

const ErrorCard = ({ error }) => {
  if (!error) return null;
  const {
    response: {
      data: {
        error: { message },
      },
    },
  } = error;
  return (
    <div className="flex items-center justify-center">
      <div className="text-red-700 px-4 py-2">
        <p>{message}</p>
      </div>
    </div>
  );
};

ErrorCard.propTypes = {
  error: PropTypes.shape({
    response: PropTypes.shape({
      data: PropTypes.shape({
        error: PropTypes.shape({
          message: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default ErrorCard;
