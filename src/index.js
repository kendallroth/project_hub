//File:     src/index.js
//Purpose:  Initialize and attach React App to DOM

import React from 'react';
import ReactDOM from 'react-dom';

import App from './modules/App';
import './index.css';

//Attach and render the App
ReactDOM.render(
	<App />,
	document.getElementById('root')
);

//Enable hot reloading with the 'create-react-app' template
if (module.hot) {
	module.hot.accept();
}
