import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { id, title, category } = book
  return (
    <div>
      <table>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </table>
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired
}

export default Book;