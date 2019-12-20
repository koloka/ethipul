import { SETBOARD } from './types';
import { returnErrors } from './errorActions';

export const setBoard = (show) => dispatch => {
  var toShow = {
    add_book: false,
    show_book: false
  };
  if(show=="add_book"){
    toShow.add_book = true;
  }else if(show=="show_book"){
    toShow.show_book = true;
  };
  dispatch({
    type: SETBOARD,
    payload: toShow
  })
};
