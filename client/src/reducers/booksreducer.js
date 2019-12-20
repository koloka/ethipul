import {
  GET_BOOKS,
  GET_BOOK,
  GET_BOOK_ID
} from '../actions/types';

const initialState = {
  books: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
