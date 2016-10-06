import React, { Component} from 'react';
import data from '../data/data';

class AboutPage extends Component {


  render() {
    const about = data.aboutPage;
    return (
      <div id="home" className="">
        <h1 className="">Full Stack Software Developer</h1>
        <div className="row">
          <div className="">
            <img className="img-rounded" id="profilePic" src={about.imageUrl} alt="" />
          </div>
          <div className="">
            <p className="" id="bio">
              {about.bio}
            </p>
          </div>
        </div>
      </div>
    );
  }

}


export default AboutPage
