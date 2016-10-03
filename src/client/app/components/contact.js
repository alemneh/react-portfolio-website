import React, { Component } from 'react';

class ContactPage extends Component {
  render() {
    return (
      <div id="contact" className="container">
      <h1 className="page-header">Contact</h1>
        <div className="row">
          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/alemneh" target="_blank"><i className="icon-linkedin-sign"></i></a>
          </div>
          <div className="col-md-4">
            <a href="https://github.com/alemneh" target="_blank"><i className="icon-github-sign"></i></a>
          </div>
          <div className="col-md-4">
            <a href="https://twitter.com/alemnehasefa" target="_blank"><i className="icon-twitter-sign"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
