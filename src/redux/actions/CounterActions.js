import * as types from './types';

export const increaseCount = payload => ({
  type: types.INCREASE_COUNT,
  payload,
});

export const decreaseCount = payload => ({
  type: types.DECREASE_COUNT,
  payload,
});
