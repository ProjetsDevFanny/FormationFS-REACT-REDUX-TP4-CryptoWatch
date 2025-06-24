import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";

// On combine les reducers
export default combineReducers({
  stable: stableReducer,
  list: listReducer,
  // ... autres reducers
});
