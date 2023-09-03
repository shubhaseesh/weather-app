import React from "react";
import PropTypes from "prop-types";

const DetailsCard = ({ label, value }) => (
  <div className="inline-flex items-center border bg-gray-100 p-4">
    <p className="text-red-700 font-bold hover:bold hover:text-lg mr-2">{label} -</p>
    <p className="font-bold">{value}</p>
  </div>
);

DetailsCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};
export default DetailsCard;
