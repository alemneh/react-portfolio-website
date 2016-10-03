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
      <div id="home" className="">
        <h1 className="">Full Stack Software Developer</h1>
        <div className="row">
          <div className="">
            <img className="img-rounded" id="profilePic" src="./resources/alem_profile_pic.jpg" alt="" />
          </div>
          <div className="">
            <p className="" id="bio">
              I am a driven full-stack software developer with an educational background in economics, statistics, and marketing.
              Who is passionate about identifying problems and providing solutions through test and behavioral driven code.
              Proficient: JavaScript, Angular.js, Node.js, Express.js, MongoDB, HTML, CSS, Mocha/Chai
            </p>
          </div>
        </div>
      </div>
    );
  }

}


export default AboutPage
