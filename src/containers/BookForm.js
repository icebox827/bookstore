import React from 'react'
import PropTypes from 'prop-types'

const BookForm = () => {
  const category = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]
  // const selectedCategory = 
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
            <option></option>
          </select>
          <button type='submit' value='submit'>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default BookForm;
