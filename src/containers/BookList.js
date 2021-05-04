import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, filterBook } from '../actions/index';

const BookList = ({ books, removeBook, filter, filterBook }) => {
  let bookItems = [...books];

  bookItems = books.map(book => (
    <Book key={book.id} book={book} handleRemove={handleRemoveBook} />
  ));

  const handleRemoveBook = book => {
    removeBook(book);
  }

  const handleFilterChange = filter => {
    filterBook(filter);
  };

  if (filter) {
    bookItems = bookItems.filter(book => book.category === filter);
  }

  return (
    <div>
      <CategoryFilter filterChange={handleFilterChange} />
      <table className="table">
        <tr>
          <th scope="col">Book ID</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Remove</th>
        </tr>
        <tr>
          <td>{bookItems}</td>
        </tr>
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
  books: state.books
});

const mapDispatchToProps = dispatch => {
  return {
    removeBook: () => {
      dispatch(removeBook());
    },
    filterBook: () => {
      dispatch(filterBook())
    },
  }
};

export default  connect(mapStateToProps, mapDispatchToProps)(BookList);