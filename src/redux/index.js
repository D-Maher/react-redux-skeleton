import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import {
  CountReducer,
  ValueReducer,
} from './reducers';

export * from './actions';

const reducer = combineReducers({
  count: CountReducer,
  value: ValueReducer,
});

const logger = createLogger({
  colors: {
    title: () => '#26619C',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
});

const configureStore = (initialState = {}) => ({
  ...createStore(
    reducer,
    initialState,
    applyMiddleware(logger),
  ),
});

export const store = configureStore();
