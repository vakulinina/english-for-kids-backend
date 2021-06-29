import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import GameField from './game-field';

const App: React.FunctionComponent = () => {
  const [isGameMode, setIsGameMode] = useState(false);

  return (
    <>
      <Router>
        <Header handleChange={() => setIsGameMode(!isGameMode)} isGameMode={isGameMode} />
        <Switch>
          <Route path="/:category">
            <GameField isGameMode={isGameMode} />
          </Route>
          <Route path="/">
            <Main isGameMode={isGameMode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
