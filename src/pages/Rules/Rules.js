import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Rules.css";

export const Rules = () => {
	const { category } = useParams();
	return (
		<div className="rules-wrapper">
			<div className="rules-container">
				<h1>Rules of Quiz</h1>
				<div className="rules">
					<p className="md-text">1) Each right answer will score 10 points.</p>
					<p className="md-text">
						2) You cannot open another tab while attempting the quiz.
					</p>
					<p className="md-text">
						3) There is no negative marking for wrong answers.
					</p>
					<p className="md-text">
						4) Score will be displayed at the end of Quiz.
					</p>
					<p className="md-text">
						5) Once you select any option, all other remaining options will be
						disabled.
					</p>
					<p className="md-text">
						6) Next button will be disabled initially. It will enable only if
						you select any option.
					</p>
				</div>
				<div className="rules-btn">
					<Link to={`/questions/${category}`}>
						<button className="btn">Start Quiz</button>
					</Link>

					<Link to="/">
						<button className="btn">Go Back</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
