import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import "./Questions.css";

export const Questions = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selected, setSelected] = useState();
	const [optionDisabled, setOptionDisabled] = useState(false);
	const [btnDisabled, setBtnDisabled] = useState(true);

	const {
		quizState: { questions },
		quizDispatch,
	} = useQuiz();

	const { category } = useParams();
	const navigate = useNavigate();

	const currentQuiz = questions.find(
		(quizCategory) => quizCategory.category === category
	);

	const question = currentQuiz.questions[currentQuestion].question;
	const options = currentQuiz.questions[currentQuestion].options;
	const answer = currentQuiz.questions[currentQuestion].answer;

	const nextQuestionHandler = () => {
		setCurrentQuestion(currentQuestion + 1);
		setOptionDisabled(false);
		setBtnDisabled(true);
	};

	const optionClickHandler = (option) => {
		setSelected(option);
		setOptionDisabled(true);
		setBtnDisabled(false);
		quizDispatch({
			type: "RESULT",
			payload: {
				question,
				options,
				answer,
				selectedOption: option,
			},
		});
	};
	return (
		<div className="quiz-container">
			<div className="quiz-card">
				<div className="quiz-section-1">
					<h3>Question : {currentQuestion + 1}/5</h3>
				</div>

				<h6 className="question">
					{currentQuiz.questions[currentQuestion].question}
				</h6>
				<div className="quiz-section-2">
					<div className="options">
						{currentQuiz.questions[currentQuestion].options.map(
							(ele, index) => {
								return (
									<button
										key={index}
										onClick={() => optionClickHandler(ele.option)}
										className={`${selected === ele.option ? "selected" : ""}`}
										disabled={optionDisabled}
									>
										{ele.option}
									</button>
								);
							}
						)}
					</div>
				</div>

				<div className="btn-container">
					<button className="btn btn-primary" onClick={() => navigate("/")}>
						Quit
					</button>
					{currentQuestion === 4 ? (
						<button
							className="btn btn-primary"
							onClick={() => navigate(`/result/${category}`)}
						>
							View Result
						</button>
					) : (
						<button
							className="btn btn-primary"
							disabled={btnDisabled}
							onClick={nextQuestionHandler}
						>
							Next
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
