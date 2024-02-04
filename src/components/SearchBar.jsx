import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherRequest } from "../actions/index";

const SearchBar = () => {
  const { error } = useSelector((state) => state.weatherReducer);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    if (error) {
      inputRef.current.select();
    }
  }, [error]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherRequest({ query }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex sm:flex-row sm:justify-end">
        <div className="relative ml-8 sm:mb-0">
          <input
            type="text"
            className="py-1 pl-4 pr-4 rounded focus:outline-none w-40 sm:w-full"
            placeholder="Search City"
            value={query}
            ref={inputRef}
            onChange={handleSearch}
          />
        </div>
        <button
          type="submit"
          className="w-40sm:w-64 ml-2 px-4 py-1 bg-pink-500 text-white rounded focus:outline-none focus:ring focus:border-green-400"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
