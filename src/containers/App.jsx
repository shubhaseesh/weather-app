import SearchBar from "../components/SearchBar";
import WeatherComponent from "../components/Weather";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-around w-full h-[100px] bg-slate-100 shadow-lg">
        <div className="text-xl font-semibold text-gray-700">
          <h1>Weather App</h1>
        </div>
        <SearchBar />
      </div>
      <div className="flex flex-col justify-center h-full items-center m-10">
        <WeatherComponent />
      </div>
    </div>
  );
}

export default App;
