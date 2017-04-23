//File:     /src/modules/Sidebar/SidebarActions/SidebarActions.js
//Purpose:  Sidebar Actions presentational component

import React from 'react';

import SearchBar from 'components/SearchBar';
import Button from 'components/Button';
import './SidebarActions.css';

const SidebarActions = () => {
	return (
		<div className='sidebar__actions'>
			<SearchBar />
			<Button text='^' />
			<Button text='+' />
		</div>
	);
}

export default SidebarActions;
