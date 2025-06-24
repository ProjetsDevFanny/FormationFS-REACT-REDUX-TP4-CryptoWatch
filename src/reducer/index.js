import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";

// On combine les reducers
export default combineReducers({
  stable: stableReducer,
  // ... autres reducers
});
