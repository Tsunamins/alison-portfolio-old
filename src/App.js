import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './Nav';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
  }
}

export default App;
