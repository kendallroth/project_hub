//File:     /src/modules/Sidebar/SidebarActions/SidebarActions.js
//Purpose:  Sidebar Actions presentational component

import React from 'react';

import FilterBar from 'components/FilterBar';
import Button from 'components/Button';
import './SidebarActions.css';

const SidebarActions = ({ filterBarValue, onProjectsFilterTextChange, onProjectsFilterClick }) => {
	return (
		<div className='sidebar__actions'>
			<FilterBar
				filterBarValue={filterBarValue}
				onFilterTextChange={onProjectsFilterTextChange}
				onFilterButtonClick={onProjectsFilterClick}
			/>
			<Button text='+' />
		</div>
	);
}

export default SidebarActions;
