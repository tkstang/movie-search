import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import '../styles/Search.scss';

const API_KEY = '403ffcb3b4481da342203f94fb6e937e';
const API_URL = 'https://api.themoviedb.org/3/search/movie';
const QUERY_URL = `${API_URL}?api_key=${API_KEY}&query=`;

const Search = ({ setSearch }) => {

  const handleChange = debounce((value) => {
    value === '' ? setSearch('') : setSearch(`${QUERY_URL}${value}`);
  }, 300)

  return (
    <div className="search">
      <input className="search-input"
        type="text"
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
