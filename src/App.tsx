import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Dashboard />
    </Fragment>
  );
}

export default App;
