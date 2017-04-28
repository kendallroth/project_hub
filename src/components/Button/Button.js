//File:     src/components/Button.js
//Purpose:  Button utility component

import React from 'react';
import PropTypes from 'prop-types'

import './Button.css';

const Button = ({ type = 'text', classes = '', icon = '', text, onClick }) => {
	let innerHTML = '';

	switch(type) {
		case 'icon':
			innerHTML = <i className={icon}></i>;
			break;
		case 'both':
			innerHTML = <span><i className={icon} style={{marginRight: '0.25rem'}}></i>{text}</span>;
			break;
		case 'text':
		default:
			innerHTML = text;
			break;
	}

	return (
		<button className={`button ${classes}`} onClick={onClick}>{innerHTML}</button>
	)
}

Button.propTypes = {
	classes: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func
};

export default Button
