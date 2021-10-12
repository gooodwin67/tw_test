import { createStore, combineReducers } from "redux";
import menuShowReducer from "./header-reducer";

let reducers = combineReducers({
    HeaderPage: menuShowReducer
})

let store = createStore(reducers);

export default store;