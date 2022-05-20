import { Response } from "miragejs";

export const getAllQuestionsHandler = function (schema, request) {
	return new Response(200, {}, { quizQuestions: this.db.quizQuestions });
};
