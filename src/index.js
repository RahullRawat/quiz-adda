import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { QuizProvider } from "./context/QuizContext";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<QuizProvider>
					<App />
				</QuizProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
