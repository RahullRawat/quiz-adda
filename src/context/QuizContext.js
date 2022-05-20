import { useContext, createContext, useReducer } from "react";
import { QuizReducer } from "../reducer/QuizReducer";

const QuizContext = createContext(null);

const defaultState = {
	questions: [],
	result: [],
	totalScore: 0,
};

const QuizProvider = ({ children }) => {
	const [quizState, quizDispatch] = useReducer(QuizReducer, defaultState);
	return (
		<QuizContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</QuizContext.Provider>
	);
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
