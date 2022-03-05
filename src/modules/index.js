import { combineReducers } from "redux";
import todo from "./todo";
import count from "./count";

const rootReducer = combineReducers({
    count,
    todo,
});

export default rootReducer;
