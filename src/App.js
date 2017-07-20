import React, { Component } from 'react';
import CardList from './components/cardList';
import UpdateButt from './components/updateButt';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Initial React Application</h2>
            </div>
            <CardList />
            <UpdateButt />
          </div>
        );
    }
}

export default App;
