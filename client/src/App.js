import React from 'react';

import See from './pages/See';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Down from './pages/Down';


function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<See/>} />
          <Route path="/video" element={<Down/>} />
        </Routes>
      </Router>


    </div>

  );

}

export default App;
