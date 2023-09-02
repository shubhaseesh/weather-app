import React from "react";

const Loader = () => {
  return (
    <div
      className="inline-block w-8 h-8 rounded-full border-4 border-current border-r-transparent align-[0.125em] animate-[spin_1.5s_linear_infinite] text-gray-700"
      role="status"
    >
      <span className="absolute m-0 h-0 w-0 overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]"></span>
    </div>
  );
};

export default Loader;
