import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  const renderComponent = () => render(<App />);

  it('should render the main app component', () => {
    renderComponent();
    expect(screen.getByTestId('app-component')).toBeTruthy();
  });
});
