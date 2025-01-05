// Import action constants
import {FETCH_ERROR,FETCH_LOADING,FETCH_SUCCESS} from "../actions/fetchActions"

// Initial state
const INITIAL_STATE = { isLoading: false, data: [], error: null };

// Define reducer function
export const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, isLoading: true, error: null }; // Set loading state
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, data: action.payload, error: null }; // Set data and stop loading
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload }; // Set error and stop loading
    default:
      return state; // Return unchanged state for unhandled actions
  }
};
