import axios from "axios";
// export const URL = "http://192.168.1.43:4000/api/";
export const URL = "https://back-toolbox.herokuapp.com/api/";

export const axiosChallenge = axios.create({
	baseURL: URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 5000,
});

// interceptor for response
axiosChallenge.interceptors.response.use(
	(response) => successResponse(response),
	(error) => failedResponse(error)
);
// response
const successResponse = async (response) => {
	return response;
};
const failedResponse = (error) => {
	throw error;
};
