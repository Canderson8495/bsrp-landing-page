import React from 'react';
import './App.css';
import { NavigationBar } from './components/NavigationBar-Dark';
import { Masthead } from './components/Masthead';
import { Icons } from './components/Icons';

function App() {
  return (
          <React.Fragment>
          <NavigationBar/>
          <Masthead/>
          <Icons/>
          </React.Fragment>
  );
}

export default App;
