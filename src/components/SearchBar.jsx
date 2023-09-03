import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherRequest } from "../actions/index";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherRequest({ query }));
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex sm:flex-row sm:justify-end">
        <div className="relative sm:mb-0">
          <input
            type="text"
            className="w-full sm:w-64 py-2 pl-10 pr-4 rounded-md focus:outline-none focus:border focus:border-blue-300"
            placeholder="Search city"
            value={query}
            onChange={handleSearch}
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
