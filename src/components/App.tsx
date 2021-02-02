import React, { Fragment } from 'react';
// import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import { Main } from '../styles/styled';
// import { Elephant } from '../utils/types';
import Header from './Header';
import Home from './home/Home';
import ElephantList from './elephants/ElephantList';
// import getDataFromApi from '../services/getDataFromApi';
import ElephantPreview from './elephants/ElephantPreview';

export default function App() {
  return (
    <Fragment>
      <Header></Header>

      <Main>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/elephants">
            <ElephantList></ElephantList>
          </Route>

          <Route exact path="/preview/:eName">
            <ElephantPreview></ElephantPreview>
          </Route>
        </Switch>
      </Main>
    </Fragment>
  );
}
