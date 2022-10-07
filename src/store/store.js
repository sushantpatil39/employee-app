//import { applyMiddleware } from 'redux';
//import { createBrowserHistory, History } from "history";
import { configureStore } from '@reduxjs/toolkit';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk';
import rootReducer from '../reducers';
 

//export const history = createBrowserHistory();

const initialState = {};

//const middleware = [thunk];

// combineReducers will be handled internally by configureStore
 

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer:rootReducer,
    initialState,
    //composeWithDevTools(applyMiddleware(...middleware)),
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;