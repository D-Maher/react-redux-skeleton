import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import {
  CountReducer,
  ValueReducer,
} from './reducers';
import rootSaga from './sagas';

export * from './actions';

const reducer = combineReducers({
  count: CountReducer,
  value: ValueReducer,
});

const sagaMiddleware = createSagaMiddleware();

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
    applyMiddleware(sagaMiddleware, logger),
  ),
});

export const store = configureStore();
sagaMiddleware.run(rootSaga);
