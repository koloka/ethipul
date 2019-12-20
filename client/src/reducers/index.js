import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import postReducer from './postReducer';
import booksreducer from './booksreducer';
import bookreducer from './bookreducer';
import dashboardreducer from './dashboardReducer';

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  post: postReducer,
  books: booksreducer,
  book: bookreducer,
  dashboard: dashboardreducer
});
