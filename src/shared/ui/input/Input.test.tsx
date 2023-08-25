import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  it('calls the onFocus handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Input onFocus={handleClick} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.focus(inputElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});