import axios from 'axios';
import { GET_BOOKS, BOOKS_LOADING, GET_BOOK_ID, GET_BOOK } from './types';
import { returnErrors } from './errorActions';

export const getBooks = () => dispatch => {
  axios
    .get('/api/books')
    .then(res =>
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};



export const setBooksLoading = () => {
  return {
    type: BOOKS_LOADING
  };
};
