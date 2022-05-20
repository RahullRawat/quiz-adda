export const AuthReducer = (state, action) => {
	switch (action.type) {
		case "LOG_IN_EMAIL":
			return {
				...state,
				email: action.payload,
			};

		case "LOG_IN_PASSWORD":
			return {
				...state,
				password: action.payload,
			};

		case "LOG_IN":
			return {
				...state,
				token: action.payload.token,
				userData: action.payload.userData,
			};

		case "NAME":
			return {
				...state,
				firstName: action.payload,
			};

		case "SIGN_UP":
			return {
				...state,
				userData: action.payload.userData,
				token: action.payload.token,
			};

		case "SIGN_UP_EMAIL":
			return {
				...state,
				email: action.payload,
			};

		case "SIGN_UP_PASSWORD":
			return {
				...state,
				password: action.payload,
			};

		case "LOAD_TOKEN":
			return {
				...state,
				token: action.payload,
			};

		case "LOGOUT":
			return {
				...state,
				token: "",
			};

		default:
			return {
				state,
			};
	}
};
