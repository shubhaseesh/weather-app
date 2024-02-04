import {
  FETCH_GEO_LOCATION_FAILURE,
  FETCH_GEO_LOCATION_REQUEST,
  FETCH_GEO_LOCATION_SUCCESS,
} from "../actions/index";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const geolocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GEO_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GEO_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_GEO_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
