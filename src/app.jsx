import './app.css';

import React from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Habits />
    </>
  );
};

export default App;
