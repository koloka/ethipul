import {
  GET_BOOK, DELETE_BOOK, LOAD_BOOK, ADD_BOOK, EDIT_BOOK
} from '../actions/types';

const initialState = {
  book: [],
  isbook: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
        loading: false
      };
    case DELETE_BOOK:
      return {
        ...state,
        book: state.book.filter(book => book.id != action.payload),
        deleted: true,
        isbook: false
      };
    case LOAD_BOOK:
      return {
        ...state,
        isbook: true
      };
    case ADD_BOOK:
      return {
        ...state,
        book_added: action.payload,
        isbook_add:true
      };
    case EDIT_BOOK:
      return {
        ...state,
        updated: true,
        book_updated: action.payload
      };
    default:
      return state;
  }
}
