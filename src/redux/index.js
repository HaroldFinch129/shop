import {combineReducers, createStore} from "redux";
import laptopReducer from "./reducer/laptopReducer";


const rootReducer = combineReducers({
    laptop : laptopReducer,
});

const store = createStore(rootReducer);

export default store;