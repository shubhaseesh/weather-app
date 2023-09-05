import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_WEATHER_REQUEST,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../actions/index";

function* fetchWeather(action) {
  try {
    const { query } = action.payload;
    if (!query)
      throw new Error("Please enter a city name. City name cannot be empty.");
    let city = query.toLowerCase();
    const apiUrl = import.meta.env.VITE_SOURCE_URL;
    const response = yield call(axios.get, `${apiUrl}${city}`);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

function* rootSaga() {
  yield all([weatherSaga()]);
}

export default rootSaga;
