import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);


describe('Nav component', () => {
  // BASELINE TEST
  it('renders', () => {
    render(<Nav />);
  });
  // SNAPSHOT TEST
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    //value comparison

    expect(asFragment()).toMatchSnapshot();
  });

})

// describe('links are visible', () => {
//   it('inserts text into the links', () => {
//     const { getByTestId } = render(<Nav />);
//     expect(getByTestId('about')).toHaveTextContent('About me');
//   });
// })
