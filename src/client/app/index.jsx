import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/app';
import AboutPage from './components/about';
import PortfolioPage from './components/portfolio';
import ContactPage from './components/contact';


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={AboutPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
    </Route>
  </Router>, document.getElementById('app')
);
