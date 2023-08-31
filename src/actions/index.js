export const REQUEST_CITIES = "REQUEST_CITIES";
export const RECEIVE_CITIES = "RECEIVE_CITIES";

export function requestCities(cities) {
  return {
    type: REQUEST_CITIES,
    cities,
  };
}

export function receiveCities(cities, payload) {
  return {
    type: RECEIVE_CITIES,
    cities,
    payload,
  };
}
