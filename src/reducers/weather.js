import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "../actions/index";

const initialState = {
  data: {
    location: null,
    current: null,
    forecast: {
      forecastday: [
        {
          date: null,
          date_epoch: null,
          day: null,
          astro: null,
          hour: null,
        },
      ],
    },
  },
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          location: { ...action.payload.location },
          current: { ...action.payload.current },
          forecast: {
            forecastday: [...action.payload.forecast.forecastday],
          },
        },
        error: null,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};