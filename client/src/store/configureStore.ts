import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { History } from 'history';

import CreateRootReducer from "./reducers/index";

export default function configureStore(history: History, initialState = {}) {
  const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const middlewares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV !== "production") {
    const logger = createLogger({ collapsed: true, diff: true });
    middlewares.push(logger);
  }

  return createStore(
    CreateRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
