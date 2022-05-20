import { Server, Model, RestSerializer } from "miragejs";

import {
	loginHandler,
	signupHandler,
} from "./backend/controllers/AuthController";

import { getAllQuestionsHandler } from "./backend/controllers/QuizController";

import { users } from "./backend/db/users";
import { quizQuestions } from "./backend/db/quizQuestions";

export function makeServer({ environment = "development" } = {}) {
	const server = new Server({
		serializers: {
			application: RestSerializer,
		},
		environment,
		// TODO: Use Relationships to have named relational Data
		models: {
			user: Model,
			quizQuestion: Model,
		},

		seeds(server) {
			server.logging = false;
			users.forEach((item) =>
				server.create("user", {
					...item,
				})
			);

			quizQuestions.forEach((item) => {
				server.create("quizQuestion", item);
			});
		},

		routes() {
			this.namespace = "api";
			// auth routes (public)
			this.post("/auth/signup", signupHandler.bind(this));
			this.post("/auth/login", loginHandler.bind(this));

			this.get("/questionsData", getAllQuestionsHandler.bind(this));
		},
	});
	return server;
}
