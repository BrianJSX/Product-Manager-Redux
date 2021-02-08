import React, { Component } from 'react';
import Menu from './components/Menu/Menu';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
        <Menu></Menu>
          {/* Page */}
           {this.showRoutes(routes)}
        </Router>
      </div>
    );
  }

  //show router
  showRoutes = (routes) => {
    let result = null;
    result = routes.map((route, index) => {
      return (
        <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
      );
    });
    return <Switch>{result}</Switch>;
  }

}

export default App;
