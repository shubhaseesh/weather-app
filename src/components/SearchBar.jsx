import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherRequest } from "../actions/index";
import { Popover } from "@headlessui/react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherRequest({ query: query }));
    setQuery("");
  };

  return (
    <Popover className="relative">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-end">
          <div className="relative">
            <input
              type="text"
              className="w-64 py-2 pl-10 pr-4 rounded-md focus:outline-none focus:border focus:border-blue-300"
              placeholder="Search city"
              value={query}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
          </div>
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Search
          </button>
        </div>
      </form>
    </Popover>
  );
};

export default SearchBar;
