import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loader = () => {
  return (
    <div
      className="align-[0.125em] animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <BiLoaderAlt />
    </div>
  );
};

export default Loader;
