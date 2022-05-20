import { Navbar } from "./components";
import { Home, Login, Questions, Result, Rules, Signup } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				theme="colored"
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/login" element={<Login />} /> */}
				{/* <Route path="/signup" element={<Signup />} /> */}
				<Route
					path="/rules/:category"
					element={
						// <RequireAuth>
						<Rules />
						// </RequireAuth>
					}
				/>
				<Route
					path="/questions/:category"
					element={
						// <RequireAuth>
						<Questions />
						// </RequireAuth>
					}
				/>
				<Route
					path="/result/:category"
					element={
						// <RequireAuth>
						<Result />
						// </RequireAuth>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
