//File:     src/components/IconButton.js
//Purpose:  IconButton utility component

import React from 'react';
import PropTypes from 'prop-types'

import './IconButton.css';

const IconButton = ({ classes = '', icon, text = '', onClick }) => {
	//TODO: Add conditional styling if button also has text

	return (
		<button className={`button ${classes}`} onClick={onClick}><i className={icon}></i></button>
	)
}

IconButton.propTypes = {
	classes: PropTypes.string,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string,
	onClick: PropTypes.func
};

export default IconButton
