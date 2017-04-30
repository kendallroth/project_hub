//File:		src/modules/Context/ContextActions/ContextActionb.js
//Purpose:  ContextActions presentational component

import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/IconButton';
import ActionBar from 'components/ActionBar';
import './ContextActions.css';

const ContextActions = ({ project }) => {
	return (
		<ActionBar className='context__actions'>
			<div className='button-group actions--left'>
				<IconButton icon='fi-pencil' />
				<IconButton icon='fi-archive' />
				<IconButton icon='fi-trash' />
			</div>
			<div className='button-group actions--right'>
				<IconButton icon='fi-info' />
				<IconButton icon='fi-download' />
				<IconButton icon='fi-star' />
			</div>
		</ActionBar>
	);
};

ContextActions.propTypes = {
	project: PropTypes.object
};

export default ContextActions;
