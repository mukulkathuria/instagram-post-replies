import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers/postReducer/postReducer';

const reducers = combineReducers({
  postReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
