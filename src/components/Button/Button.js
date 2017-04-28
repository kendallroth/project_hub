//File:     src/components/Button.js
//Purpose:  Button utility component

import React from 'react';
import PropTypes from 'prop-types'

import './Button.css';

const Button = ({ classes = '', text, onClick }) => {
	return (
		<button className={`button ${classes}`} onClick={onClick}>{text}</button>
	)
}

Button.propTypes = {
	classes: PropTypes.string,
	text: PropTypes.string.isrequired,
	onClick: PropTypes.func
};

export default Button
