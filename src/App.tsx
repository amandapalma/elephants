import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Main } from './styled';
import Header from './Header';
import Home from './Home';
import Elephants from './Elephants';
import { useState, useEffect } from 'react';
import axios from 'axios';

// interface Info {
//   _id: string;
//   name: string;
//   image: string;
//   sex: string;
//   dob: string;
//   dod: string;
//   species: string;
//   wikilink: string;
//   note: string;
// }

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get(`https://elephant-api.herokuapp.com/elephants`).then((res) => {
      res.data.map((item: any) => {
        return setInfo(item);
      });
    });
  }, []);
  // console.log(typeof info);
  console.log(info);

  return (
    <Fragment>
      <div></div>
      <Header></Header>
      <Main>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route
            exact
            path="/elephants"
            render={() => <Elephants></Elephants>}
            // render={() => <Elephants elephants={info}></Elephants>}
          />
        </Switch>
      </Main>
    </Fragment>
  );
};

export default App;
