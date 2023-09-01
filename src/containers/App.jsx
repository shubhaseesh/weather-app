import { useEffect } from "react";
import Dropdown from "../components/SearchBar";
import WeatherComponent from "../components/WeatherComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherRequest } from "../actions/index";
import Loader from "../components/Loader";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weatherReducer);
  console.log({ data, loading, error });
  useEffect(() => {
    // dispatch(fetchWeatherRequest({ query: "india" }));
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-around w-full h-[100px] bg-slate-100 shadow-lg">
        <div className="text-xl font-semibold text-gray-700">
          <h1>Weather App</h1>
        </div>
        <Dropdown />
      </div>
      <div className="flex flex-col justify-center h-full items-center m-10">
        {loading && (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        )}
        {error ? (
          <div className="flex justify-center items-center">
            Something went wrong!
          </div>
        ) : (
          <div>
            {data ? (
              <div>
                <WeatherComponent data={data} />
              </div>
            ) : (
              <div>
                <h2>Please search any city</h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
