import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk }from 'redux-thunk'; // Ensure correct import
import taskReducer from './reducers/taskReducer';

// Combine all your reducers here if you have more
const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
