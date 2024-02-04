export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const FETCH_GEO_LOCATION_REQUEST = "FETCH_GEO_LOCATION_REQUEST";
export const FETCH_GEO_LOCATION_SUCCESS = "FETCH_GEO_LOCATION_SUCCESS";
export const FETCH_GEO_LOCATION_FAILURE = "FETCH_GEO_LOCATION_FAILURE";

export const fetchWeatherRequest = (query) => ({
  type: FETCH_WEATHER_REQUEST,
  payload: query,
});

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchGeoLocationRequest = () => ({
  type: FETCH_GEO_LOCATION_REQUEST,
  payload: null,
});
export const fetchGeoLocationSuccess = (data) => ({
  type: FETCH_GEO_LOCATION_SUCCESS,
  payload: data,
});

export const fetchGeoLocationFailure = (error) => ({
  type: FETCH_GEO_LOCATION_FAILURE,
  payload: error,
});
