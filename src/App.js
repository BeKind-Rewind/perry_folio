import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About'
import Nav from './components/Nav'
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Contact></Contact>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
