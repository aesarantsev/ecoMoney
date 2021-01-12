import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from 'history';

import user from "./user";
import categories from './categories'

import { AppStateType } from "../../entities";

export default (history: History<any>) =>
  combineReducers<AppStateType>({
    router: connectRouter(history),
    user,
    categories,
  });