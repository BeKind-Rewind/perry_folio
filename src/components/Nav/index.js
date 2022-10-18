import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  // {
  //   name: "About me",
  //   description:
  //     "Who am I?",
  // },
  // {
  //   name: "Contact",
  //   description:
  //     "Reach out:",
  // },
  // {
  //   name: "Portfolio",
  //   description:
  //     "My developer works",
  // },
  // {
  //   name: "Resumé",
  //   description: "Download my resumé."
  // }

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);



  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Perry
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
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