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

  const selectedCategories = categories.map(category => key={category});

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <form>
        <fieldset>
          <legend>Add Book</legend>
          <label>Book Title</label>
          <input type='text' id='book' className='book' />
          <br />
          <br />
          <select>
            <option>{selectedCategories}</option>
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
