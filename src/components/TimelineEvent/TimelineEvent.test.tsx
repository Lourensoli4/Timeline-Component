import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimelineEvent from './TimelineEvent';
import { TimelineEventProps } from '../../types/types';
import { Placement } from '../../types/types';

const renderTimelineEvent = (props: Partial<TimelineEventProps> = {}) => {
  const defaultProps: TimelineEventProps = {
    image: 'image-url',
    title: 'Event Title',
    position: 10,
    placement: Placement.Top,
    noDot: false,
    timelineText: '',
    ...props,
  };
  return render(<TimelineEvent {...defaultProps} />);
};

describe('TimelineEvent Component', () => {
  test('renders TimelineEvent component with top placement', () => {
    renderTimelineEvent({
      placement: Placement.Top,
      timelineText: 'In 1 year',
    });

    const event = screen.getByTestId('timeline-event');
    expect(event).toBeInTheDocument();
    expect(event).toHaveStyle({ left: '10%', bottom: '50px' });

    expect(screen.getByText('Event Title')).toBeInTheDocument();
    expect(screen.getByText('In 1 year')).toBeInTheDocument();
  });

  test('renders TimelineEvent component with bottom placement', () => {
    renderTimelineEvent({
      placement: Placement.Bottom,
      timelineText: 'In 2 years',
    });

    const event = screen.getByTestId('timeline-event');
    expect(event).toBeInTheDocument();
    expect(event).toHaveStyle({ left: '10%', top: '96px' });

    expect(screen.getByText('Event Title')).toBeInTheDocument();
    expect(screen.getByText('In 2 years')).toBeInTheDocument();
  });

  test('renders TimelineEvent component with alternate placement', () => {
    renderTimelineEvent({
      placement: Placement.Alternate,
      timelineText: 'In 3 years',
    });

    const event = screen.getByTestId('timeline-event');
    expect(event).toBeInTheDocument();
    expect(event).toHaveStyle({ left: '10%', top: '96px' });

    expect(screen.getByText('Event Title')).toBeInTheDocument();
    expect(screen.getByText('In 3 years')).toBeInTheDocument();
  });

  test('renders TimelineEvent component without dot', () => {
    renderTimelineEvent({ noDot: true });

    const dots = screen.queryAllByTestId('timeline-event__dot');
    expect(dots.length).toBe(0);
  });

  test('renders TimelineEvent component with image', () => {
    renderTimelineEvent({ image: 'image-url' });

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'image-url');
  });
});
