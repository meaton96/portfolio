import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import AdminPanel from './AdminPanel';
import Portfolio from './Portfolio';

function App() {
  return (
      <div className="App">
       <Portfolio/>
      </div>
  );
}

export default App;
