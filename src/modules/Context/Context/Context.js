//File:     /src/modules/App/Context/Context.js
//Purpose:  App Header presentational component

import React from 'react';

import './Context.css';

const Context = ({ project }) => {
	return (
		<section className='app__context'>
			<h2>{project.title}</h2>
		</section>
	);
}

export default Context;
