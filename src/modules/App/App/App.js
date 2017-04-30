//File:     /src/modules/App/App/App.js
//Purpose:  Main app container

import React from 'react';

import Log from 'utilities/Log';
import { Header, Footer } from 'modules/App';
import Sidebar from 'modules/Sidebar';
import Context from 'modules/Context';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		const projects = [{ id: 1, title: 'Project 1' }, { id: 2, title: 'Project 2' }, { id: 3, title: 'Project 3' }];

		this.state = {
			projects: projects,
			project: projects[0]
		};

		this.onProjectItemClick = this.onProjectItemClick.bind(this);

		//Set the app log level
		Log.setLogLevel('trace');
		Log.trace('App constructed and ready to render initially');
	}

	render() {
		return (
			<section className='app__container'>
				<Header />
				<section className='app__body'>
					<Sidebar projects={this.state.projects} onProjectItemClick={this.onProjectItemClick} />
					<Context project={this.state.project} />
				</section>
				<Footer />
			</section>
		);
	}

	onProjectItemClick(project) {
		Log.trace(`Set clicked Project: ${JSON.stringify(project)}`);
		this.setState({
			project: project
		});
	}
}

export default App;
