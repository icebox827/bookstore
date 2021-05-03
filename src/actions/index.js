import { CREATE_BOOK, DELETE_BOOK } from './action';

const addBook = book => ({
    type: CREATE_BOOK,
    payload: book,
});

const deleteBook = book => ({
    type: DELETE_BOOK,
    payload: book,
});

export { addBook, deleteBook };