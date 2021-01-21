import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard';
import useReview from './hooks/myHook';


function App() {
  return (
    <Fragment>
      <Navbar />
      <Dashboard />
    </Fragment>
  );
}

export default App;
