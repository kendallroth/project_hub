//File:		src/modules/Context/ContextActions/ContextActionb.js
//Purpose:  ContextActions presentational component

import React from 'react';

import IconButton from 'components/IconButton';
import './ContextActions.css';

const ContextActions = () => {
	return (
		<div className='context__actions actions-bar'>
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
		</div>
	);
};

export default ContextActions;
