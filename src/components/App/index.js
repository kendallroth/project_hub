import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="app__body">
        <div className="app__description">
          <p>Manage personal development projects on a high level without detail clutter</p>
        </div>
        <p className="app__intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default App;
