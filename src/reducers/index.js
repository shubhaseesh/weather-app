import { combineReducers } from 'redux'
import {RECEIVE_CITIES, REQUEST_CITIES} from '../actions'



function getCities(
  state = {
    isFetching: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_CITIES:
      return { ...state, isFetching: true }

    case RECEIVE_CITIES:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
      }
    default:
      return state
  }
}



const rootReducer = combineReducers({
  getCities,
})

export default rootReducer