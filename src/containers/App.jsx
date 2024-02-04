import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeoLocationRequest, fetchWeatherRequest } from "../actions";

function App() {
  const dispatch = useDispatch();

  const { data, error, loading } = useSelector(
    (state) => state.geolocationReducer
  );

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
    <div className="flex flex-col h-screen w-full">
      <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 h-16 sm:h-20 bg-matt shadow-lg w-100 bg-indigo-500">
        <div className="flex flex-row items-center gap-2 font-semibold text-lg text-white whitespace-nowrap ml-4">
          Weather App
        </div>
        <SearchBar />
      </div>
      <Weather loading={loading} />
    </div>
  );
}

export default App;
