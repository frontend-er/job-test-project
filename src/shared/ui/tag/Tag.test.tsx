import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('<Tag />', () => {
  it('should render', () => {
    render(<Tag color='#333' name='Super tag' />);
    const tagElement = screen.getByText('Super tag');
    expect(tagElement).toBeInTheDocument();
  });
});
