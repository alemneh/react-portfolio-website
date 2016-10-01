import React, { Component } from 'react';
import AboutPage from './about';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isApp: true
    };
  }

  render() {
    return (
      <div>
        <AboutPage />
      </div>
    );
  }

}

export default App
