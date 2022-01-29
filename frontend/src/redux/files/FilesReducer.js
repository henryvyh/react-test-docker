import { FILES_TYPE } from "./FilesTypes";

const initialState = {
	files: [],
};
export default function filesReducer(state = initialState, action) {
	switch (action.type) {
		case FILES_TYPE.SET_FILES:
			return {
				...state,
				files: action.payload,
			};
		default:
			return state;
	}
}
