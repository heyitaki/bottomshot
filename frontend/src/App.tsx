import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentPrice, setCurrentPrice] = useState('???');

  useEffect(() => {
    fetch('/getPrices').then(res => res.json()).then(data => {
      setCurrentPrice(data.prices);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          current prices: {currentPrice}
        </p>
      </header>
    </div>
  );
}

export default App;
