import React, { Component } from 'react';
import data from '../data/data';

import PortfolioItem from './portfolio-item';


class PortfolioPage extends Component {
  renderProjects() {
    return data.profilePage.map(function(p, index){
        return (
          <PortfolioItem key={index} projects={p} />
        )
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header">Portfolio</h1>
        <div className="well well-lg">
        <div className="row text-center">
          {this.renderProjects()}
        </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
