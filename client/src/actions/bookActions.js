import axios from 'axios';
import { GET_BOOK, DELETE_BOOK, LOAD_BOOK, ADD_BOOK, EDIT_BOOK } from './types';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';


export const getBook = (id) => (dispatch, getState) => {
  axios
    .get('/api/books/'+id)
    .then(res =>{
      dispatch({
        type: GET_BOOK,
        payload: res.data
      });
      if(res.data.length === 1){
        dispatch({
          type: LOAD_BOOK
        });
      }
    }
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const delBook = (id) => (dispatch, getState) => {
  axios
    .delete('/api/books/'+id, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_BOOK,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};


export const addBook = (body) => (dispatch, getState) => {
  axios
    .post('/api/books', body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_BOOK,
        payload: body
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editBook = (body, id) => (dispatch, getState) => {
  axios
    .put('/api/books/'+id, body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: EDIT_BOOK,
        payload: body
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};



