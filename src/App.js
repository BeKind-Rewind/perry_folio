import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About/index';
import Contact from './components/Contact/index';
import Portfolio from './components/Portfolio/index';
import Resume from './components/Resume/index';
// import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [categories] = useState([
    {
      name: "About"
    },
    {
      name: "Contact"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Resumé"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    < BrowserRouter basename="/perry_folio">
      <div>
        <Nav categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Home" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resumé" element={<Resume />} />
            <Route path="*" element={<About />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
