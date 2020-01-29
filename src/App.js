import React from 'react';
import logo from './logo.svg';
import './App.css';

function Text(props) {
/*
{
  color: "green"
  value: "Andy"
}
*/

//const styleObj = {
//  color: props.color
//}
return <span style = {{color: props.color}}>{props.value}</span>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, <Text color = "green" value = "Andy"></Text>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
