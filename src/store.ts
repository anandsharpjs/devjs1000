import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  },
};

const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(reducer, initialState);
export default store;
