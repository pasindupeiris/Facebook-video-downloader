import React from 'react';
import Nav from '../src/components/Navigation'
import Home from './pages/Home';
import Howto from './pages/Howto';


function App() {

  return (
    <div className="App">

      <Nav />
      <Home />
      <Howto/>
    </div>

  );

}

export default App;
