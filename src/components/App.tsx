import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import { Main } from '../styles/styled';
import { Elephant } from '../utils/types';
import Header from './Header';
import Home from './home/Home';
import ElephantList from './elephants/ElephantList';
import getDataFromApi from '../services/getDataFromApi';
import ElephantPreview from './elephants/ElephantPreview';

export default function App() {
  const [info, setInfo] = useState<Elephant[]>([]);

  useEffect(() => {
    getDataFromApi().then((res) => {
      setInfo(res);
    });
  }, []);

  return (
    <Fragment>
      <Header></Header>

      <Main>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/elephants">
            <ElephantList elephants={info}></ElephantList>
          </Route>

          <Route exact path="/preview/:elephantId">
            <ElephantPreview elephants={info}></ElephantPreview>
          </Route>
        </Switch>
      </Main>
    </Fragment>
  );
}
