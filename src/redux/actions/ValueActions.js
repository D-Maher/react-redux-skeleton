import * as types from './types';

export const changeValue = payload => ({
  type: types.CHANGE_VALUE,
  payload,
});
