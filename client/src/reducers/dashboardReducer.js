import {
  SETBOARD
} from '../actions/types';

const initialState = {
  board: {
    add_book: true
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETBOARD:
      return {
        ...state,
        board: action.payload,
      };
    default:
      return state;
  }
}
