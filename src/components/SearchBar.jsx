import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherRequest } from "../actions/index";

const SearchBar = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherRequest({ query }));
    // setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex sm:flex-row sm:justify-end">
        <div className="relative ml-8 sm:mb-0">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-4 rounded focus:outline-none focus:border focus:border-blue-300"
            placeholder="Search City"
            value={query}
            ref={inputRef}
            onChange={handleSearch}
          />
        </div>
        <button
          type="submit"
          className="w-40sm:w-64 ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
