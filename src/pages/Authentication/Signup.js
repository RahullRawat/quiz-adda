import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import "./Authentication.css";

export const Signup = () => {
	const { authState, authDispatch, signUp } = useAuth();
	const { firstName, email, password } = authState;

	const signUpHandler = (e) => {
		e.preventDefault();
		if (firstName && email && password) {
			signUp();
		} else {
			toast.warning("Please Fill All Details");
		}
	};
	return (
		<section className="login-container">
			<div className="login">
				<h1 className="login-title md-text">Signup</h1>
				<form className="login-form sm-text" onSubmit={signUpHandler}>
					<label htmlFor="name">Name</label>
					<input
						id="firstName"
						type="text"
						placeholder="Enter Name"
						name="firstName"
						value={firstName}
						onChange={(e) =>
							authDispatch({ type: "NAME", payload: e.target.value })
						}
						autoComplete="off"
					/>

					<label htmlFor="email">Email </label>
					<input
						id="email"
						type="email"
						placeholder="Enter Email"
						name="email"
						value={email}
						onChange={(e) =>
							authDispatch({ type: "SIGN_UP_EMAIL", payload: e.target.value })
						}
						autoComplete="off"
					/>

					<label htmlFor="password">Password </label>
					<input
						id="password"
						type="password"
						placeholder="Enter password"
						name="password"
						value={password}
						onChange={(e) =>
							authDispatch({
								type: "SIGN_UP_PASSWORD",
								payload: e.target.value,
							})
						}
						autoComplete="off"
					/>

					<div className="term-condition">
						<input id="term-condition" type="checkbox" />
						<label htmlFor="term-condition">
							I accept all terms & conditions
						</label>
					</div>

					<button type="submit" className="btn btn-login">
						Signup
					</button>

					<div className="no-account">
						Already have an account ? <Link to="/login">Login </Link>
					</div>
				</form>
			</div>
		</section>
	);
};
