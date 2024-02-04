import { combineReducers } from "redux";
import { weatherReducer } from "./weather";
import { geolocationReducer } from "./geo-location";

const rootReducer = combineReducers({
  weatherReducer,
  geolocationReducer,
});

export default rootReducer;
