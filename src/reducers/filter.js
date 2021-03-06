import { FILTER_BOOK } from '../actions/action';

const filterReducer = (state='All', action) => {
  switch (action.type) {
    case FILTER_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
