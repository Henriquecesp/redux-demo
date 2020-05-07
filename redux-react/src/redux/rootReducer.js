import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import breadReducer from "./bread/breadReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  bread: breadReducer,
  user: userReducer,
});

export default rootReducer;
