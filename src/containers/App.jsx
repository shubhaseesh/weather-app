import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import { useDispatch } from "react-redux";
import { fetchWeatherRequest } from "../actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherRequest({ query: "india" }));
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 h-16 sm:h-20 bg-black shadow-lg">
        <div className="text-slate-100 ml-4">
          <p className="whitespace-nowrap text-sm font-semibold md:text-xl sm:whitespace-normal text-white">
            Weather App
          </p>
        </div>
        <SearchBar />
      </div>
      <div className="flex flex-col flex-grow justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8">
        <Weather />
      </div>
    </div>
  );
}

export default App;
