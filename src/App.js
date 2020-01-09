import React from 'react';
import {
  HashRouter,
  Route
} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Terms from './components/Terms';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Route path="/" exact component={ Home } />
          <Route path="/home" component={ Home } />
          <Route path="/terms" component={ Terms } />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
