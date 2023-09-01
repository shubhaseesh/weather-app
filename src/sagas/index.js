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
    const apiUrl = import.meta.env.VITE_SOURCE_URL;
    const response = yield call(axios.get, `${apiUrl}${query}`);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

function* rootSaga() {
  yield all([weatherSaga()]);
}

export default rootSaga;
