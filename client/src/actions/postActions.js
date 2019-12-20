import axios from 'axios';
import { GET_POSTS } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getPosts = () => (dispatch, getState) => {
  axios
    .get('/api/posts',  tokenConfig(getState))
    .then(res =>{
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    }
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
