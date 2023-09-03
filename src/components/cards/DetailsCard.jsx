import React from "react";
import PropTypes from "prop-types";

const DetailsCard = ({ label, value }) => (
  <div className="inline-flex items-center h-20 border shadow-md bg-gray-100 p-4">
    <p className="text-red-700 font-bold mr-2">{label} -</p>
    <p className="font-bold">{value}</p>
  </div>
);

DetailsCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};
export default DetailsCard;
