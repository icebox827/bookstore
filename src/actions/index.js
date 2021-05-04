import { CREATE_BOOK, FILTER_BOOK, REMOVE_BOOK } from './action';

const addBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

const filterBook = book => ({
  type: FILTER_BOOK,
  payload: book
});

export { addBook, removeBook, filterBook };