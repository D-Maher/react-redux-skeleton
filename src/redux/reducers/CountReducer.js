import * as types from '../actions/types';

const CountReducer = (state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.INCREASE_COUNT:
      return state + payload;
    case types.DECREASE_COUNT:
      return state - payload;
    default:
      return state;
  }
};

export default CountReducer;
