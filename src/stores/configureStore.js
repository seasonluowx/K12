'use strict';

import { createStore, applyMiddleware ,combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';//引入异步操作
import asyncActionCallbackMiddleware from '../utils/asyncActionCallbackMiddleware';
import promiseMiddleware from '../utils/promiseMiddleware'

import rootReducer from '../reducers';

const logger = createLogger({
    predicate: (getState, action) => false,
    collapsed: true,
    duration: true,
    colors: {
        prevState: () => `#FFEB3B`,
        nextState: () => `#4CAF50`,
    },
    diff: true,
});

let middlewares = [
    thunk,
    promiseMiddleware,
    reduxPromiseMiddleware,
    asyncActionCallbackMiddleware,
    logger,
]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//配置store信息
export default function configureStore(initialState){
    //创建store
    const store=createStoreWithMiddleware(rootReducer,initialState);

    return store;
}