import { createStore, combineReducers } from "redux";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
    HeaderPage: headerReducer
})

let store = createStore(reducers);

export default store;