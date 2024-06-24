import './TimelineEvent.scss';
import { TimelineEventProps } from '../../types/types';

const TimelineEvent: React.FC<TimelineEventProps> = ({
  image,
  title,
  placement,
  position,
  noDot,
  timelineText,
}) => {
  const containerStyle = {
    left: `${position}%`,
    ...(placement === 'top' && { bottom: '50px' }),
    ...(placement === 'bottom' || placement === 'alternate'
      ? { top: '96px' }
      : {}),
  };

  return (
    <div
      className='timeline-event'
      style={containerStyle}
      data-testid='timeline-event'
    >
      {placement === 'top' && (
        <div>
          <div className='timeline-event__arrow timeline-event__arrow--top' />
          <div className='timeline-event__connecting-line timeline-event__connecting-line--top' />
          {!noDot && (
            <div
              className='timeline-event__dot timeline-event__dot--outside-top'
              data-testid='timeline-event__dot'
            >
              <div className='timeline-event__dot timeline-event__dot--inside-top' />
            </div>
          )}
          {timelineText && (
            <div className='timeline-event__timeline-text-container timeline-event__timeline-text-container--top'>
              <p className='timeline-event__timeline-text timeline-event__timeline-text--top'>
                {timelineText}
              </p>
            </div>
          )}
        </div>
      )}
      <img src={image} alt={title} />
      <div className='timeline-event__title-container'>
        <p className='timeline-event__title'>{title}</p>
      </div>
      {placement === 'bottom' && (
        <div>
          <div className='timeline-event__arrow timeline-event__arrow--bottom' />
          <div className='timeline-event__connecting-line timeline-event__connecting-line--bottom' />
          {!noDot && (
            <div
              className='timeline-event__dot timeline-event__dot--outside-bottom'
              data-testid='timeline-event__dot'
            >
              <div className='timeline-event__dot timeline-event__dot--inside-bottom' />
            </div>
          )}
          {timelineText && (
            <div className='timeline-event__timeline-text-container timeline-event__timeline-text-container--bottom'>
              <p className='timeline-event__timeline-text timeline-event__timeline-text--bottom'>
                {timelineText}
              </p>
            </div>
          )}
        </div>
      )}
      {placement === 'alternate' && (
        <div>
          <div className='timeline-event__arrow timeline-event__arrow--alternate' />
          <div className='timeline-event__connecting-line timeline-event__connecting-line--alternate' />
          {!noDot && (
            <div
              className='timeline-event__dot timeline-event__dot--outside-bottom'
              data-testid='timeline-event__dot'
            >
              <div className='timeline-event__dot timeline-event__dot--inside-bottom' />
            </div>
          )}
          {timelineText && (
            <div className='timeline-event__timeline-text-container timeline-event__timeline-text-container--alternate'>
              <p className='timeline-event__timeline-text timeline-event__timeline-text--bottom'>
                {timelineText}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TimelineEvent;
