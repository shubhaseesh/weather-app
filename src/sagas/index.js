import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_WEATHER_REQUEST,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  FETCH_GEO_LOCATION_REQUEST,
  fetchGeoLocationSuccess,
  fetchGeoLocationFailure,
} from "../actions/index";

function* fetchWeather(action) {
  try {
    const { query } = action.payload;
    if (!query)
      throw new Error("Please enter a city name. City name cannot be empty.");
    let city = query.toLowerCase();
    const apiUrl = import.meta.env.VITE_SOURCE_URL;
    const key = import.meta.env.VITE_WEATHER_API_KEY;
    const response = yield call(axios.get, `${apiUrl}?key=${key}&q=${city}`);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error));
  }
}

function* fetchGeolocation() {
  try {
    const response = yield call(
      axios.get,
      `https://ipranger.eportal.click/api/v1.0.4/track`
    );
    yield put(fetchGeoLocationSuccess(response.data));
  } catch (error) {
    yield put(fetchGeoLocationFailure(error));
  }
}
function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}
function* geolocationSaga() {
  yield takeLatest(FETCH_GEO_LOCATION_REQUEST, fetchGeolocation);
}
function* rootSaga() {
  yield all([weatherSaga(), geolocationSaga()]);
}

export default rootSaga;
