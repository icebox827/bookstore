import { CREATE_BOOK, FILTER_BOOK, REMOVE_BOOK } from './action';

const addBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

const filterBook = filter => ({
  type: FILTER_BOOK,
  payload: filter
});

export { addBook, removeBook, filterBook };