//File:     /src/modules/Sidebar/SidebarActions/SidebarActions.js
//Purpose:  Sidebar Actions presentational component

import React from 'react';

import FilterBar from 'components/FilterBar';
import IconButton from 'components/IconButton';
import './SidebarActions.css';

const SidebarActions = ({ filterBarValue, onProjectsFilterTextChange, onProjectsFilterClick, onProjectsAddClick }) => {
	return (
		<div className='sidebar__actions'>
			<FilterBar
				filterBarValue={filterBarValue}
				onFilterTextChange={onProjectsFilterTextChange}
				onFilterButtonClick={onProjectsFilterClick}
			/>
			<IconButton type='round' classes='button--add' icon='fi-plus' onClick={onProjectsAddClick} />
		</div>
	);
}

export default SidebarActions;
