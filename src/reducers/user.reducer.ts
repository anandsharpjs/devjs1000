import { useNavigate } from "react-router-dom";

//user reducer

//types declaration
type ActionType = {
  type: string;
  payload: any;
};

type StateType = {
  user: { username: string; password: string };
  isLoggedIn: boolean;
};

export const userReducer = (state: any = {}, action: ActionType) => {
  //switch statement
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, user: action.payload, isLoggedIn: true };
    case "USER_LOGOUT":
      return { ...state, user: null, isLoggedIn: false };
    default:
      return state;
  }
};
