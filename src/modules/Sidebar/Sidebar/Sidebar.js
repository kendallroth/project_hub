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
		this.getFilteredProjects = this.getFilteredProjects.bind(this);
		this.onProjectsAddClick = this.onProjectsAddClick.bind(this);
	}

	render() {
		return (
			<section className='app__sidebar'>
				<SidebarActions
					filterBarValue={this.state.filterBarValue}
					onProjectsFilterTextChange={this.onProjectsFilterTextChange}
					onProjectsFilterClick={this.onProjectsFilterClick}
					onProjectsAddClick={this.onProjectsAddClick}
				/>
				<ProjectList projects={this.getFilteredProjects()} />
			</section>
		);
	}

	onProjectsFilterClick(event) {
		console.log('Project List Filter clicked');
	}

	onProjectsFilterTextChange(event) {
		//console.log(`Project Filter Value: ${event.target.value}`);
		this.setState({ filterBarValue: event.target.value });
	}

	getFilteredProjects() {
		const filterValue = this.state.filterBarValue.toLowerCase();
		const projects = this.props.projects;

		//Filter the list of projects if filter text has been provided
		if (filterValue !== '') {
			return projects.filter((project) => {
				return project.title.toLowerCase().includes(filterValue) ? true : false;
			});
		} else {
			return projects;
		}
	}

	onProjectsAddClick() {
		console.log('Add Project clicked');
	}
}

Sidebar.propTypes = {
	projects: PropTypes.array
};

export default Sidebar;
