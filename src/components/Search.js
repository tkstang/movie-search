import React from 'react';
import PropTypes from 'prop-types'
import '../styles/Search.scss';


const Search = ({ setSearch }) => {

  const handleChange = (value) => {
    // add debouncing
    setSearch(value);
  }
  return (
    <div className="search">
      <input className="search-input"
        type="text"
        name="movie-title"
        placeholder="Enter a movie title to search..."
        name="search"
        onChange={event => handleChange(event.target.value)}
      />
    </div>
  )
}

Search.propTypes = {
  setSearch: PropTypes.func
}

export default Search;
