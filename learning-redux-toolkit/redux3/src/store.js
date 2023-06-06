import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";
import { composeWithDevTools } from "redux-devtools-extension";

// import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

const store = legacy_createStore(rootReducer, composedEnhancer);

export default store;