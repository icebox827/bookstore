import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index'

const BookForm = ({ addBook }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]

  const selectedCategories = categories.map(category => <option key={category}>{category}</option>);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

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
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <br />
          <label className="form-label">Select a category</label>
          <select
            className="option"
            id="category"
            name="category"
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            {selectedCategories}
          </select>
          <button type='submit' className="btn">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
}

export default connect(null, {addBook})(BookForm);
