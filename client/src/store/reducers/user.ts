import {Action, Reducer} from 'redux'
import { IUser, IUserState } from "../../entities/user";
import { LOGIN_USER, LOGOUT_USER, SET_USER, RESET_USER } from "../actions/user";

const initialState: IUserState = {
  isAuth: false,
  user: {} as IUser,
};

export default function user(state: IUserState = initialState, action: any):IUserState {
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: action.user,
        isAuth: true,
      };
    case LOGOUT_USER:
      return {
        isAuth: false,
        user: {} as IUser,
      };
    case SET_USER:
      return {
        user: action.user,
        isAuth: true,
      };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
}
