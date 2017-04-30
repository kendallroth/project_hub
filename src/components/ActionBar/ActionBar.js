//File:		src/components/ActionBar/ActionBar.js
//Purpose:	Container component for a Bar of actions

import React from 'react';
import PropTypes from 'prop-types';

import './ActionBar.css';

const ActionBar = ({ className, children }) => {
	return (
		<div className={`actions-bar ${className}`}>
			{children}
		</div>
	);
};

ActionBar.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired
};

export default ActionBar;
