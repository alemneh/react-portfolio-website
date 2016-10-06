import React, { Component } from 'react';
import data from '../data/data';


class PortfolioPage extends Component {

  render() {
    const projects = data.profilePage;
    return (
      <div className="container">
        <h1 className="page-header">Portfolio</h1>
        <div className="well well-lg">
        <div className="row text-center">
          {projects.map(function(p, index){
              return (
                <div key={index} className="col-md-6 portfolio-item">
                  <h3>{p.title}</h3>
                  <p><strong>Tech Stack:</strong></p>
                  <i>{p.techStack}</i>
                  <br />
                  <a href={p.github} target="_blank"><i className="icon-github-sign"></i></a>
                  <a href={p.website ? p.website : p.github} target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
                </div>
              )

            })}
        </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
