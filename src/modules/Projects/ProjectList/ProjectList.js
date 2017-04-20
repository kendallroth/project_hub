//File:     src/modules/Projects/ProjectList/ProjectList.js
//Purpose:  ProjectList component to display a list of projects

import React from 'react';
import PropTypes from 'prop-types';

import { ProjectListItem } from 'modules/Projects';
import './ProjectList.css';

//Map the projects to a list of ProjectListItem components
const listProjects = (projects) => {
	return projects.map((project) => {
		return <ProjectListItem key={project.id} project={project} />;
	});
};

const ProjectList = ({ projects }) => {
	return (
		<ul className='project-list'>
			{ listProjects(projects) }
		</ul>
	);
};

ProjectList.propTypes = {
	projects: PropTypes.array
};

export default ProjectList;
