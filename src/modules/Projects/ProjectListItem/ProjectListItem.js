//File:     src/modules/Projects/ProjectListItem/ProjectListItem.js
//Purpose:  ProjectListItem component to display a single project

import React from 'react';
import PropTypes from 'prop-types';

const ProjectListItem = ({ project }) => {
	return (
		<div>{project.title}</div>
	);
};

ProjectListItem.propTypes = {
	project: PropTypes.object.isRequired
};

export default ProjectListItem;
