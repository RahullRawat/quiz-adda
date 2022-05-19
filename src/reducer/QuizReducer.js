export const QuizReducer = (state, action) => {
	switch (action.type) {
		case "QUESTIONS": {
			return {
				...state,
				questions: action.payload,
			};
		}

		case "RESULT": {
			const { question, options, answer, selectedOption } = action.payload;
			let score = state.totalScore + (answer === selectedOption ? 10 : 0);
			return {
				...state,
				result: [
					...state.result,
					{ question, options, selectedOption, answer },
				],
				totalScore: score,
			};
		}

		case "RESET": {
			return {
				...state,
				result: [],
				totalScore: 0,
			};
		}

		default:
			return {
				state,
			};
	}
};
