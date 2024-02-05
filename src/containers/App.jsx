import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeoLocationRequest, fetchWeatherRequest } from "../actions";

function App() {
  const dispatch = useDispatch();

  const { data, error } = useSelector((state) => state.geolocationReducer);

  useEffect(() => {
    dispatch(fetchGeoLocationRequest());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(fetchWeatherRequest({ query: "india" }));
    } else if (data) {
      dispatch(fetchWeatherRequest({ query: data.geoIpData.cityName }));
    }
  }, [dispatch, data, error]);

  return (
    <div className="grid grid-cols-1">
      <div className="flex items-center justify-between py-6 px-4 gap-2 shadow-lg w-100 bg-indigo-500 overflow-hidden">
        <div className="flex flex-row items-centerfont-semibold text-lg text-white whitespace-nowrap">
          Weather App
        </div>
        <SearchBar />
      </div>
      <Weather />
    </div>
  );
}

export default App;
