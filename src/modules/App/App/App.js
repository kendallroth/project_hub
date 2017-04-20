//File:     /src/modules/App/App/App.js
//Purpose:  Main app container

import React from 'react';

import { Header, Footer } from 'modules/App';
import Sidebar from 'modules/Sidebar';
import Button from 'components/Button';
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
			<section className="app">
				<Header />
				<section className="app__body">
					<div className="app__description">
						<p>Manage personal development projects on a high level without detail clutter</p>
						<br />
						<Button text='Click Me!' onClick={() => console.log('Button clicked')} />
					</div>
					<Sidebar projects={this.state.projects} />
				</section>
				<Footer />
			</section>
		);
	}
}

export default App;
