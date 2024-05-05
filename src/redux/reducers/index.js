// reducers/index.js
import { combineReducers } from "redux";
import jobReducer from "./JobReducer";

const rootReducer = combineReducers({
  jobListing: jobReducer,
});

export default rootReducer;
