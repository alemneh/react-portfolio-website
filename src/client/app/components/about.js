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
        <h1>Full Stack Software Developer</h1>
        <img src="./resources/alem_profile_pic.jpg" />
        <p>
          I am a driven full-stack software developer
          with an educational background in economics,
          statistics, and marketing. Who is passionate
          about identifying problems and providing
          solutions through test and behavioral driven
          code. Proficient: JavaScript, Angular.js, Node.js,
           Express.js, MongoDB, HTML, CSS, Mocha/Chai
        </p>
      </div>
    );
  }

}


export default AboutPage
