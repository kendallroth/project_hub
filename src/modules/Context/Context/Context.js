//File:     /src/modules/App/Context/Context.js
//Purpose:  App Header presentational component

import React from 'react';

import { ContextActions } from 'modules/Context';
import './Context.css';

const Context = ({ project }) => {
	return (
		<section className='app__context'>
			<ContextActions project={project} />
			<h2>{project.title}</h2>
		</section>
	);
}

export default Context;
