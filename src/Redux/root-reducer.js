import { combineReducers } from "redux";
import weatherReducer from "./reducers";

const rootReducer = combineReducers({
    data: weatherReducer
})

export default rootReducer;