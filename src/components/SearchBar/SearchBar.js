//File:     /src/components/SearchBar/SearchBar.js
//Purpose:  SearchBar presentational component

import React from 'react';

import './SearchBar.css';

const SearchBar = () => {
	return (
		<input type='text' className='searchbar' placeholder='Search Projects...' />
	);
}

export default SearchBar;
