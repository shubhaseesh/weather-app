import React from "react";
import PropTypes from "prop-types";

const DetailsCard = ({ label, value }) => (
  <div className="inline-flex items-center bg-gray-100 p-4">
    <p className="font-semibold mr-2">{label}:</p>
    <div>{value}</div>
  </div>
);

DetailsCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};
export default DetailsCard;
