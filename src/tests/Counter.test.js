// import necessary react testing library helpers here
// import the Counter component here

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  // const { getByText } = render(<Counter />);
  // expect(getByText('Counter')).toBeInTheDocument();

  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  // const { getByTestId } = render(<Counter />);
  // expect(getByTestId('count')).toHaveTextContent('0');

  render(<Counter />);
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent('0');

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const incButton = screen.getByText('+');
  const countElem = screen.getByTestId('count');
  fireEvent.click(incButton);
  expect(countElem).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decButton = screen.getByText('-');
  const countElem = screen.getByTestId('count');
  fireEvent.click(decButton);
  expect(countElem).toHaveTextContent('-1');
});
