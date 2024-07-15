import React from 'react';
import Nav from '../src/components/Navigation'
import Howto from './pages/Howto';
import See from './pages/See';


function App() {

  return (
    <div className="App">

      <Nav />
      <See/>
      <Howto/>
      
    </div>

  );

}

export default App;
