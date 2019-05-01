import React, { Component } from 'react';
import Townhall from '../src/compnents/townhall';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
    <Router>
        <Switch>
        <Route exact path='/' component={Townhall} />
        <Route path='/contact' component={''} />
        <Route path='/about' component={''} />
    </Switch>
      </Router>
    );
  }
}
export default App;
