import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greeting';

const rootStore = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(rootStore, {}, applyMiddleware(thunk, logger));

export default store;
