import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './views/About';

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/About page/i);
  expect(linkElement).toBeInTheDocument();
});
