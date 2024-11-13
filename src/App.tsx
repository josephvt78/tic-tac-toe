import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Square() {
  
  const [value, setValue] = useState<string | null>(null);
  
  function handleClick() {
    setValue('X');
  }
  
  return <button className="square" onClick={handleClick}>{value}</button> 
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
