//File:     /src/modules/App/App/App.js
//Purpose:  Main app container

import React from 'react';

import { Header, Footer } from 'modules/App';
import { ProjectListItem } from 'modules/Projects';
import Button from 'components/Button';
import './App.css';

const listItem = { title: 'Test' };

const App = () => {
	return (
		<section className="app">
			<Header />
			<section className="app__body">
				<div className="app__description">
					<p>Manage personal development projects on a high level without detail clutter</p>
				</div>
				<p className="app__intro">
					To get started, edit <code>src/App.js</code> and save to reload!
					<br />
					<Button text='Click Me!' onClick={() => console.log('Button clicked')} />
				</p>
				<ProjectListItem project={ listItem } />
			</section>
			<Footer />
		</section>
	);
}

export default App;
