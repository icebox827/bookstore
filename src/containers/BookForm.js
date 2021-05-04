import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index'

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi'
];

const BookForm = ({ addBook }) => {
  const [book, setBook] = useState({
    title: '',
    category: '',
    id: Math.floor((Math.random() * 100) + 1),
  });

  const selectedCategories = categories.map(category => <option key={category} value={category}>{category}</option>);

  const handleChange = e => {
    setBook(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBook(book)
    setBook({
      id: book.id + 1,
      title: '',
      category:'',
    });
  };

  return (
    <div className="form-container v-flex">
      <form id="form" className="form flex" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="form-heading">Add Book</legend>
          <label className="form-label">Book Title</label>
          <input 
            type='text' 
            id='text'
            name="title"
            className="title-field"
            placeholder="Please enter the book title" 
            onChange={handleChange}
            value={book.title}
          />
          <br />
          <br />
          <label className="form-label">Select a category</label>
          <select
            className="category-field"
            id="category"
            name="category"
            onChange={handleChange}
            value={book.category}
          >
            {selectedCategories}
          </select>
          <button type='submit'  className="add-btn">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    addBook: () => {
      dispatch(addBook());
    },
  }
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
