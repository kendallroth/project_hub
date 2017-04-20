//File:     src/modules/Projects/ProjectListItem/ProjectListItem.js
//Purpose:  ProjectListItem component to display a single project

import React from 'react';
import PropTypes from 'prop-types';

import './ProjectListItem.css';

const ProjectListItem = ({ project }) => {
	return (
		<li className='project-list__item'>{project.title}</li>
	);
};

ProjectListItem.propTypes = {
	project: PropTypes.object.isRequired
};

export default ProjectListItem;
