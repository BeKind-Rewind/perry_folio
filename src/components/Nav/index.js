import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);



  return (
    <header className="flex-row px-1">
      <h1>
        <a className="title flex-row px-1" href="/perry_folio">
          Amanda Perry
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                <Link className={`${currentCategory.name === category.name && 'navActive'}`} to={category.name}>{capitalizeFirstLetter(category.name)}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;