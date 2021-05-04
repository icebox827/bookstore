import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <div className="book-container flex">
      <div className="title-container ">
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">Author</div>
        <div className="btns flex">
          <p>Comments</p>
          <button type="button" onClick={() => handleRemoveBook(book)}>
            Remove
          </button>
          <p>Edit</p>
        </div>
      </div>
      <div className="right-container flex"> 
      <div className="progress-panel flex">
        <div className="progress" />
        <div className="progress-details v-flex">
          <h2>
            {id}
            %
          </h2>
          <p>Completed</p>
        </div>
        </div>

        <div className="chapter-container ">
          <div className="chapter">CURRENT CHAPTER</div>
          <div className="chapter-title">CHAPTER 4: &quot;A Whale Story&quot;</div>
          <button type="submit" className="progress-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func,
}

export default Book;