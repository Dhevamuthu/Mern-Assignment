// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/login';
import { loginFields } from './components/login';

function App() {
  return (
      <>
        <Header />
        <Body/>
        <Footer />
      </>
  );
}

export default App;
