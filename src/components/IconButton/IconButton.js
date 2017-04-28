//File:     src/components/IconButton.js
//Purpose:  IconButton utility component

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './IconButton.css';

const IconButton = ({ type, classes = '', icon, text = '', onClick }) => {
	//TODO: Add conditional styling if button also has text
	const btnClasses = ClassNames('button', classes, {
		'button--round': type === 'round'
	});

	return (
		<button className={btnClasses} onClick={onClick}><i className={icon}></i></button>
	)
}

IconButton.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.string,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string,
	onClick: PropTypes.func
};

export default IconButton
