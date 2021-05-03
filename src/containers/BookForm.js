import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index'

const BookForm = ({ addBook }) => {
  const [book, setBook] = useState({
    title: '',
    category: '',
    id: Math.floor((Math.random() * 10000) + 1),
  });
  
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

  const selectedCategories = categories.map(category => <option key={category}>{category}</option>);
  const { title, category } = book;

  const handleChange = e => {
    setBook({
      ...book,
      [e.target.value]: e.target.value,
    });
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
    <div>
      <form>
        <fieldset>
          <legend>Add Book</legend>
          <label className="form-label">Book Title</label>
          <input 
            type='text' 
            id='text'
            className='inputbook'
            placeholder="Please enter the book title" 
            onChange={handleChange}
            value={title}
          />
          <br />
          <br />
          <label className="form-label">Select a category</label>
          <select
            className="option"
            id="category"
            name="category"
            onClick={handleChange}
            value={category}
          >
            {selectedCategories}
          </select>
          <button type='submit' onClick={handleSubmit} className="btn">
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
