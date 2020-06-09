import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders BeastBox header', () => {
	const { getByText } = render(<App />);
	const headerElement = getByText(/BeastBox/i);
	expect(headerElement).toBeInTheDocument();
});
