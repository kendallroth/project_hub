//File:     /src/modules/Sidebar/Sidebar/Sidebar.js
//Purpose:  Sidebar component to handle Sidebar actions and display

import React from 'react';
import PropTypes from 'prop-types';

import { ProjectList } from 'modules/Projects';
import { SidebarActions } from 'modules/Sidebar';
import './Sidebar.css';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filterBarValue: ''
		};

		//Bind class functions
		this.onProjectsFilterTextChange = this.onProjectsFilterTextChange.bind(this);
		this.onProjectsFilterClick = this.onProjectsFilterClick.bind(this);
	}

	render() {
		return (
			<section className='app__sidebar'>
				<SidebarActions
					filterBarValue={this.state.filterBarValue}
					onProjectsFilterTextChange={this.onProjectsFilterTextChange}
					onProjectsFilterClick={this.onProjectsFilterClick}
				/>
				<ProjectList projects={this.props.projects} />
			</section>
		);
	}

	onProjectsFilterClick(event) {
		console.log('Project List Filter clicked');
	}

	onProjectsFilterTextChange(event) {
		console.log(event.target.value);
		this.setState({ filterBarValue: event.target.value });
	}
}

Sidebar.propTypes = {
	projects: PropTypes.array
};

export default Sidebar;
