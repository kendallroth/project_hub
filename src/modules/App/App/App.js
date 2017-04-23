//File:     /src/modules/App/App/App.js
//Purpose:  Main app container

import React from 'react';

import { Header, Footer, Sidebar, Context } from 'modules/App';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [{ id: 1, title: 'Project 1' }, { id: 2, title: 'Project 2' }, { id: 3, title: 'Project 3' }]
		};
	}

	render() {
		return (
			<section className="app__container">
				<Header />
				<section className="app__body">
					<Sidebar projects={this.state.projects} />
					<Context />
				</section>
				<Footer />
			</section>
		);
	}
}

export default App;
