//File:     /src/components/SearchBar/SearchBar.js
//Purpose:  SearchBar presentational component

import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = ({ value, placeholder = 'Search...', onChange }) => {
	return (
		<input type='text' value={value} className='search-bar' placeholder={placeholder} onChange={onChange} />
	);
}

SearchBar.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

export default SearchBar;
