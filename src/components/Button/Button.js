//File:     src/components/Button.js
//Purpose:  Button utility component

import React from 'react';
import PropTypes from 'prop-types'

import './Button.css';

const Button = ({ text, onClick }) => {
	return (
		<button className='button' onClick={onClick}>{text}</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	onCLick: PropTypes.func
};

export default Button
