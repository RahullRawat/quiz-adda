import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
// import { useAuth } from "../../context/AuthContext";
import "./Home.css";

export const Home = () => {
	const navigate = useNavigate();
	// const {
	// 	authState: { token },
	// } = useAuth();
	const {
		quizState: { questions },
		quizDispatch,
	} = useQuiz();

	const startQuizHandler = (category) => {
		// if (token) {
		navigate(`/rules/${category}`);
		quizDispatch({ type: "RESET" });
		// } else {
		// navigate("/login");
		// }
	};

	const fetchQuestions = async () => {
		try {
			const response = await axios.get("/api/questionsData");
			if (response.status === 200) {
				quizDispatch({
					type: "QUESTIONS",
					payload: response.data.quizQuestions,
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchQuestions();
	}, []);

	return (
		<div className="home-container">
			<div className="hero-text-container">
				<h1>Game of Knowledge.</h1>
			</div>

			<div className="category-container">
				{questions.map((quiz) => {
					return (
						<div className="card card-overlay card-shadow" key={quiz.category}>
							<img src={quiz.categoryImg} alt="card-example" />
							<h1 className="text-overlay">{quiz.category}</h1>
							<div className="card-content">
								<p>Take this quiz to test yourself</p>
								<span>5 Questions</span>
							</div>
							<button
								className="btn btn-primary"
								onClick={() => startQuizHandler(quiz.category)}
							>
								Play Now
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
