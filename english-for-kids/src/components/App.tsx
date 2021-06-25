import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import GameField from './game-field';

const App: React.FunctionComponent = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/:category" component={GameField} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </>
);

export default App;
