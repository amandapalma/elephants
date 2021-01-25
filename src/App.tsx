import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Main } from './styled';
import Header from './Header';
import Home from './Home';
import Elephants from './Elephants';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/elephants" render={Elephants} />
        </Switch>
      </Main>
    </div>
  );
}

export default App;
