import * as redux from "redux";

// import counter reducer function here
import { timerReducer } from "./redux/reducers/timerReducer";
import { combineReducers } from "redux";
import { counterReducer } from "./redux/reducers/counterReducer";

// combine the reducer functions here
const result = combineReducers({
  timer: timerReducer,
  counter: counterReducer
});
// add the root reducer function to store here
export const store = redux.createStore(result);
