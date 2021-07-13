import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import GameField from './game-field';
import FinalPage from './final-page';
import Statistics from './statistics';
import Footer from './footer';
import { getCategories } from '../api/api';
import Category from '../models/category';

const App: React.FunctionComponent = () => {
  const [isGameMode, setIsGameMode] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [categories, setCategories] = useState([] as Category[]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Router>
        <Header
          handleChange={() => setIsGameMode(!isGameMode)}
          isGameMode={isGameMode}
          categories={categories}
        />
        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/final-page">
            <FinalPage mistakes={mistakes} />
          </Route>
          <Route path="/:category">
            <GameField isGameMode={isGameMode} countMistakes={setMistakes} />
          </Route>
          <Route path="/">
            <Main isGameMode={isGameMode} categories={categories} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
