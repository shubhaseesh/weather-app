import React from "react";
import PropTypes from "prop-types";

const ErrorCard = ({ error }) => {
  if (!error) return null;
  return (
    <div className="transition-opacity duration-500 opacity-100">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">
          Error Please Check The Details Entered!
        </h2>
        <p>
          <strong>Name:</strong> {error.name}
        </p>
        <p>
          <strong>Message:</strong> {error.message}
        </p>
        <p>
          <strong>Code:</strong> {error.code}
        </p>
        {error.response && (
          <p>
            <strong>Status:</strong> {error.response.status}
          </p>
        )}
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
