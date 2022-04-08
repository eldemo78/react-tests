import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Basic from './index'

test('renders Basic component', () => {
  render(<Basic />);
  const inputWrapper = screen.getByTestId('inputWrapper');
  expect(inputWrapper).toBeTruthy();
});

test('onchange is working', () => {
  render(<Basic />);
  const inputElement = screen.getByTestId('inputElement');
  fireEvent.change(inputElement, {target: {value: "valor"}});
  expect(inputElement.value).toBe("valor")
});

test('useState is been called', () => {
  const setStateMock = jest.fn();
  const useStateMock = (useState) => [useState, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);
  render(<Basic />);
  const inputElement = screen.getByTestId('inputElement');
  fireEvent.change(inputElement, {target: {value: "valor"}});
  expect(setStateMock).toHaveBeenCalledWith("valor");
});