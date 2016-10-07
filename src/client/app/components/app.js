import React, { Component } from 'react';
import NavBar from './navbar';
import data from '../data/data';

class App extends Component {

  render() {
    const data = data;
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }

}

export default App
