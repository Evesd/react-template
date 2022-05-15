import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import './App.less';

import About from './views/About';
import Router from './router';
import { history } from './router/history';

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
