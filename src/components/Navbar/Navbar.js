import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export const Navbar = () => {
	// const {
	// 	authState: { token },
	// 	logout,
	// 	authDispatch,
	// } = useAuth();

	const navigate = useNavigate();

	const logoutHandler = async () => {
		// await logout();
		authDispatch({ type: "LOGOUT" });
		navigate("/");
	};
	return (
		<div className="nav-bar">
			<div className="nav-brand-title">
				<Link to="/">QuizAdda</Link>
			</div>
			<div className="nav-links">
				{/* {token ? (
					<Link to="/" className="btn btn-nav" onClick={logoutHandler}>
						Logout
					</Link>
				) : (
					<Link to="/login" className="btn btn-nav">
						Login
					</Link>
				)} */}
				<Link to="/login" className="btn btn-nav">
					Login
				</Link>
			</div>
		</div>
	);
};
