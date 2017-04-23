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

		this.state = {};
	}

	render() {
		return (
			<section className='app__sidebar'>
				<SidebarActions />
				<ProjectList projects={this.props.projects} />
			</section>
		);
	}
}

Sidebar.propTypes = {
	projects: PropTypes.array
};

export default Sidebar;
