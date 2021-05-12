import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello there</p>
        <Button type="primary" size="large">
          I&apos;m an Ant button
        </Button>
      </header>
    </div>
  );
}

export default App;
