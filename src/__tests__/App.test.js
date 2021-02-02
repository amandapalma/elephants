import React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import Home from '../components/home/Home';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('render App component without crashing', () => {
    shallow(<App />);
  });
  it('render Header component without crashing', () => {
    shallow(<Header />);
  });
  it('render Home component without crashing', () => {
    shallow(<Home />);
  });
});
