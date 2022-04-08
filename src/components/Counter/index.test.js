import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './index';

test('renders Basic component', () => {
    render(<Counter />);
    const counterWrapper = screen.getByTestId('counter');
    expect(counterWrapper).toBeTruthy();
});

test('handleIncrement been called', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment');
    expect(incrementButton).toBeTruthy();
    expect(screen.getByTestId('value').textContent).toBe("0");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('value').textContent).toBe("1");
});

test('handleDecrement been called', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement');
    expect(decrementButton).toBeTruthy();
    expect(screen.getByTestId('value').textContent).toBe("0");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId('value').textContent).toBe("-1");
});
  