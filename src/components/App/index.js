import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h2>ProjectHub</h2>
        </div>
        <section className="app__body">
          <div className="app__description">
            <p>Manage personal development projects on a high level without detail clutter</p>
          </div>
          <p className="app__intro">
            To get started, edit <code>src/App.js</code> and save to reload!
          </p>
        </section>
      </div>
    );
  }
}

export default App;
