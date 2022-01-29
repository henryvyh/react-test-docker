import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filesReducer from "./files/FilesReducer";

const middleWare = [thunk];
const rootReducer = combineReducers({
	filesReducer,
});
const store = createStore(rootReducer, applyMiddleware(...middleWare));
export default store;
