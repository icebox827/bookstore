import { combineReducers } from 'redux';
import bookReducers from './book';

export default combineReducers({
    books: bookReducers,
});