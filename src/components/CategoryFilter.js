import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({filterChange}) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]

  const selectedCategories = categories.map(category => ( 
    <option key={category} value={category === 'ALL' ? '' : category}  >
      {category}
    </option>
  ));

  return (
    <div>
      <form className="form-control">
        <label className="label">Category Filter</label>
        <select 
          className="option" 
          id="category" 
          name="category" 
          onChange={e => filterChange(e.target.value)}
        >
          {selectedCategories}
        </select>
      </form>
    </div>
  )

};

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;