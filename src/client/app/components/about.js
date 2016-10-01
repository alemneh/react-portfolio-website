import React, { Component} from 'react';


class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'About Page'
    };
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
      </div>
    );
  }

}


export default AboutPage
