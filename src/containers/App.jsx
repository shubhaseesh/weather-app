import { useState } from "react";
import Dropdown from "../components/Dropdown";

function App() {
  // const apiKey = import.meta.env.VITE_URL;
  // console.log(apiKey)
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-around w-full h-[100px] bg-slate-100 shadow-lg">
          <div className="text-xl font-semibold text-gray-700">
            <h1>Weather App</h1>
          </div>
          <Dropdown />
        </div>
      </div>
    </>
  );
}

export default App;
