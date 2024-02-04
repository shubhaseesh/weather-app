import React from "react";
import PropTypes from "prop-types";

const DetailsCard = ({ name, value }) => (
  <div className="flex justify-between font-normal text-sm text-white items-center border-b p-2 w-full">
    <div className="px-3">
      <p>{name}</p>
    </div>
    <div className="px-4 mr-3">
      <p>{value}</p>
    </div>
  </div>
);

DetailsCard.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
};
export default DetailsCard;
