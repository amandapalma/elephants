import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import ElephantList from './elephants/ElephantList';
import ElephantPreview from './elephants/ElephantPreview';
import Footer from './Footer';
import { Main } from '../styles/styled';
import { Container } from '@material-ui/core';

export default function App() {
  return (
    <Container>
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
      <Footer></Footer>
    </Container>
  );
}
