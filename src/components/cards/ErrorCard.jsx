import React from "react";
import PropTypes from "prop-types";
import { Transition } from "@headlessui/react";

const ErrorCard = ({ error }) => {
  if (!error) return null;
  return (
    <Transition
      appear
      show={error !== null}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {(ref) => (
        <div
          ref={ref}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Error</h2>
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
      )}
    </Transition>
  );
};

ErrorCard.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    response: PropTypes.shape({
      status: PropTypes.number.isRequired,
    }),
  }),
};

export default ErrorCard;
