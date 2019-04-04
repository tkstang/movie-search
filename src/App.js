import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import page1 from './data/test-data-page-1.json';


class App extends Component {
  render() {
    console.log(page1);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
