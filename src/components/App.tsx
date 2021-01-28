import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import { Main } from '../styles/styled';
import Header from './Header';
import Home from './home/Home';
import ElephantList from './elephants/ElephantList';
import { useState, useEffect } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import { Elephant } from '../utils/types';
import ElephantPreview from './elephants/ElephantPreview';

export default function App() {
  const [info, setInfo] = useState<Elephant[]>([]);

  useEffect(() => {
    getDataFromApi().then((res) => {
      setInfo(res);
    });
  }, []);

  const renderElephantPreview = (props: any) => {
    const clickedId = props.match.params.id;

    const foundedElephant = info.find((item) => {
      return item.id === clickedId;
    });
    return <ElephantPreview clickedElephant={foundedElephant} />;
  };

  return (
    <Fragment>
      <Header></Header>
      <div></div>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route exact path="/" render={Home} /> */}
          <Route
            exact
            path="/elephants"
            render={() => <ElephantList elephants={info}></ElephantList>}
          />
          <Route
            exact
            path="/preview/:elephantId"
            render={renderElephantPreview}
          />
        </Switch>
      </Main>
    </Fragment>
  );
}
