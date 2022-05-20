import React from "react";
import { useParams } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import "./Result.css";

export const Result = () => {
	const {
		quizState: { result, totalScore },
	} = useQuiz();

	const { category } = useParams();

	return (
		<div className="result-wrapper">
			<div className="result-container">
				<div className="quiz-card">
					<div className="quiz-section-1">
						<h5>{category}</h5>
						<h3>Final Score : {totalScore}/50</h3>
					</div>

					{result.map((question, i) => {
						return (
							<div key={i} className="final-result">
								<h6 className="question">{question.question}</h6>
								<div className="quiz-section-2">
									<div className="options">
										{question.options.map((ele, index) => {
											return (
												<>
													<button
														key={index}
														className={`${
															ele.option === question.answer
																? "correct-option"
																: question.selectedOption === ele.option
																? "wrong-option"
																: ""
														}`}
													>
														{ele.option}
													</button>
												</>
											);
										})}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
