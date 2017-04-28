//File:     src/modules/Projects/ProjectListItem/ProjectListItem.js
//Purpose:  ProjectListItem component to display a single project

import React from 'react';
import PropTypes from 'prop-types';

import './ProjectListItem.css';

const ProjectListItem = ({ project, onClick }) => {
	return (
		<li className='project-list__item' onClick={onClick}>{project.title}</li>
	);
};

ProjectListItem.propTypes = {
	project: PropTypes.object.isRequired,
	onClick: PropTypes.func
};

export default ProjectListItem;
