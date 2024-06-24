import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timeline from './Timeline';
import '@testing-library/jest-dom/extend-expect';

describe('Timeline Component', () => {
  test('renders all timeline events with correct props', () => {
    render(<Timeline />);

    // Check for all event titles
    expect(screen.getByText("Baby's birth")).toBeInTheDocument();
    expect(screen.getByText('New home')).toBeInTheDocument();
    expect(screen.getByText('Holiday')).toBeInTheDocument();
    expect(screen.getByText('Emergency fund')).toBeInTheDocument();
    expect(screen.getByText('Debt free')).toBeInTheDocument();
    expect(screen.getByText('Retire')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Make a contribution to my community through philanthropy'
      )
    ).toBeInTheDocument();

    // Check for all event images
    expect(screen.getByAltText("Baby's birth")).toBeInTheDocument();
    expect(screen.getByAltText('New home')).toBeInTheDocument();
    expect(screen.getByAltText('Holiday')).toBeInTheDocument();
    expect(screen.getByAltText('Emergency fund')).toBeInTheDocument();
    expect(screen.getByAltText('Debt free')).toBeInTheDocument();
    expect(screen.getByAltText('Retire')).toBeInTheDocument();

    // Check for the timeline text
    expect(screen.getByText('In 1 year and 9 months')).toBeInTheDocument();
    expect(screen.getByText('In 3 years and 2 months')).toBeInTheDocument();
    expect(screen.getByText('In 3 years and 5 months')).toBeInTheDocument();
    expect(screen.getByText('In 4 years and 9 months')).toBeInTheDocument();
    expect(screen.getByText('Ultimately')).toBeInTheDocument();
  });

  test('renders the right amount of TimelineEvent components', () => {
    render(<Timeline />);
    const events = screen.getAllByTestId('timeline-event');

    // Check if all events are rendered
    expect(events.length).toBe(7);
  });
});
