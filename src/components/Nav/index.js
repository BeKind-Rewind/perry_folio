import React from 'react';

function Nav() {
  const categories = [
    {
      name: "Portfolio",
      description:
        "My developer works",
    },
    { name: "Resumé", description: "Download my resumé." }
  ];

  function categorySelected() {
    console.log("hello")
  }

  return (
    <header>
      <h2>
        <a href="/">
          Perry
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={categorySelected}>
                {/* setting a key for the outermost element (required) */}
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* <span role="img" aria-label="camera"> 📸</span> */

export default Nav;