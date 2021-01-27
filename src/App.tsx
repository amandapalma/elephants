import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Main } from './styled';
import Header from './Header';
import Home from './Home';
import ElephantList from './ElephantList';
import { useState, useEffect } from 'react';
import getDataFromApi from './getDataFromApi';
import { Elephant } from './types';
import ElephantPreview from './ElephantPreview';

export default function App() {
  const [info, setInfo] = useState<Elephant[]>([]);

  useEffect(() => {
    getDataFromApi().then((res) => {
      setInfo(res);
    });
  }, []);

  const renderElephantPreview = (props: any) => {
    // console.log(typeof props);
    console.log(props);
    const clickedId = props.match.params.id;

    const foundedElephant = info.find((item) => {
      return item.id === clickedId;
    });
    return <ElephantPreview clickedElephant={foundedElephant} />;
  };

  return (
    <Fragment>
      <Header></Header>
      <Main>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route
            exact
            path="/elephants"
            render={() => <ElephantList elephants={info}></ElephantList>}
          />
          <Route exact path="/preview/:id" render={renderElephantPreview} />
        </Switch>
      </Main>
    </Fragment>
  );
}
