import React, { Component } from 'react';

class PortfolioItem extends Component {
  render() {
    const project = this.props.projects;
    return (
      <div className="col-md-6 portfolio-item">
        <h3>{project.title}</h3>
        <p><strong>Tech Stack:</strong></p>
        <i>{project.techStack}</i>
        <br />
        <a href={project.github} target="_blank"><i className="icon-github-sign"></i></a>
        <a href={project.website ? project.website : project.github} target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
      </div>
    );
  }
}

export default PortfolioItem;
