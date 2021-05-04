import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, filterBook } from '../actions/index';

const BookList = ({ books, removeBook, filter, filterBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  }
  console.log(books)
  const bookItems = () => createFilter().map(book => (
    <Book key={book.id} book={book} handleRemove={handleRemoveBook} />
  ));

  const handleFilterChange = filter => {
    filterBook(filter);
  };

  const createFilter = () => {
    if (filter !== 'All') {
      return books.filter(book => book.category === filter);
    }
    return books;
  }
  
  return (
    <div className="list-container v-flex">
      <CategoryFilter filterChange={handleFilterChange} />
      <table className="table">
        <tbody>{bookItems()}</tbody>
      </table>
    </div>
  )
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => {
  return {
    removeBook: () => {
      dispatch(removeBook());
    },
    filterBook: (book) => {
      dispatch(filterBook(book))
    },
  }
};

export default  connect(mapStateToProps, mapDispatchToProps)(BookList);