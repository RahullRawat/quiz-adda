import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import "./Authentication.css";

export const Login = () => {
	const { authState, authDispatch, logIn } = useAuth();
	const { email, password } = authState;

	const logInHandler = (e) => {
		e.preventDefault();
		if (email && password) {
			logIn();
		} else {
			toast.warning("Please Fill All Details");
		}
	};

	const guestLoginHandler = (e) => {
		e.preventDefault();
		authDispatch({ type: "LOG_IN_EMAIL", payload: "test@gmail.com" });
		authDispatch({ type: "LOG_IN_PASSWORD", payload: "test123" });
	};
	return (
		<section className="login-container">
			<div className="login">
				<h1 className="login-title md-text">Login</h1>
				<form className="login-form sm-text">
					<label htmlFor="email">Email </label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Enter Email"
						value={email}
						onChange={(e) =>
							authDispatch({ type: "LOG_IN_EMAIL", payload: e.target.value })
						}
						autoComplete="off"
					/>

					<label htmlFor="password">Password </label>
					<input
						id="password"
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) =>
							authDispatch({ type: "LOG_IN_PASSWORD", payload: e.target.value })
						}
						autoComplete="off"
					/>
					<Link to="#" className="forgot-password">
						Forgot Your Password ?
					</Link>
					<button
						type="submit"
						onClick={logInHandler}
						className="btn btn-login"
					>
						Login
					</button>
					<button className="btn btn-guest-login" onClick={guestLoginHandler}>
						Guest Login
					</button>

					<div className="no-account">
						Don't have an account ? <Link to="/signup">Sign Up </Link>
					</div>
				</form>
			</div>
		</section>
	);
};
