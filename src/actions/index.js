import { CREATE_BOOK, CHANGE_FILTER, REMOVE_BOOK } from './action';

const addBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

const filterBook = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { addBook, removeBook, filterBook };