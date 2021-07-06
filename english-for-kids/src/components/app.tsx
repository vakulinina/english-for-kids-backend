import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import GameField from './game-field';
import FinalPage from './final-page';
import Statistics from './statistics';
import Footer from './footer';

const App: React.FunctionComponent = () => {
  const [isGameMode, setIsGameMode] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  return (
    <>
      <Router>
        <Header handleChange={() => setIsGameMode(!isGameMode)} isGameMode={isGameMode} />
        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/final-page">
            <FinalPage mistakes={mistakes} />
          </Route>
          <Route path="/:category">
            <GameField isGameMode={isGameMode} countMistakes={setMistakes} />
          </Route>
          <Route path="/">
            <Main isGameMode={isGameMode} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
