
import './App.css';
import Pokemon from './components/pokemon';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="App">
    <h1>Hold on to your butts. </h1>
    <Pokemon/>
    </div>
  );
}

export default App;
