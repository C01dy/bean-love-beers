import {createStore, applyMiddleware} from "redux";
import {reducer} from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk, logger));