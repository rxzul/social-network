import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tehnologies />
    </div>
  );
}

const Header = () => {
    return (
        <div className="menu">
            <a href="">Item 1</a>
            <a href="">Item 2</a>
            <a href="">Item 3</a>
        </div>
    );
}

const Tehnologies = () => {
    return (
        <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
        </ul>
    )
}

export default App;
