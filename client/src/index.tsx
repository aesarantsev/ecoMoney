import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

import configureStore from "./store/configureStore";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
