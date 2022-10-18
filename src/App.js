import React, { useState } from 'react';
import Nav from './components/Nav'
import Gallery from './components/Gallery';
import Footer from './components/Footer';



function App() {
  const [categories] = useState([
    {
      name: "About me",
      description:
        "Who am I?",
    },
    {
      name: "Contact",
      description:
        "Reach out:",
    },
    {
      name: "Portfolio",
      description:
        "My developer works",
    },
    {
      name: "Resumé",
      description: "Download my resumé."
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
