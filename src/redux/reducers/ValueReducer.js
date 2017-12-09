import * as types from '../actions/types';

const ValueReducer = (state = 1, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CHANGE_VALUE:
      return payload;
    default:
      return state;
  }
};

export default ValueReducer;
