import { combineReducers, createStore } from "redux";
import filmpageReducer from "./filmpageReducer";
import moviepageReducer from "./moviepageReducer";
import navbarReducer from "./navbarReducer";

const reducers = combineReducers({
    navbar : navbarReducer,
    filmPage : filmpageReducer,
    moviePage : moviepageReducer
});

const store = createStore(reducers);
window.store = store
export default store;