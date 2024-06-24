import './Timeline.scss';
import TimelineEvent from '../TimelineEvent/TimelineEvent';
import family from '../../images/family.svg';
import home from '../../images/home.svg';
import holiday from '../../images/going-holiday.svg';
import emergencyFund from '../../images/em-fund.svg';
import debt from '../../images/debt.svg';
import retire from '../../images/retire.svg';
import vision from '../../images/vision.svg';
import timelineArrow from '../../images/timeline-arrow.svg';
import { TimelineEventProps } from '../../types/types';
import { Placement } from '../../types/types';

const Timeline: React.FC = () => {
  const dottedLineWidth = 24;

  const events: TimelineEventProps[] = [
    {
      image: family,
      title: "Baby's birth",
      position: 10,
      placement: Placement.Top,
      timelineText: 'In 1 year and 9 months',
    },
    {
      image: home,
      title: 'New home',
      position: 10,
      placement: Placement.Bottom,
      noDot: true,
    },
    {
      image: holiday,
      title: 'Holiday',
      position: 28.5,
      placement: Placement.Top,
      timelineText: 'In 3 years and 2 months',
    },
    {
      image: emergencyFund,
      title: 'Emergency fund',
      position: 48.5,
      placement: Placement.Bottom,
      timelineText: 'In 3 years and 5 months',
    },
    {
      image: debt,
      title: 'Debt free',
      position: 77,
      placement: Placement.Bottom,
      timelineText: 'In 4 years and 9 months',
    },
    {
      image: retire,
      title: 'Retire',
      position: 88.5,
      placement: Placement.Top,
      noDot: true,
    },
    {
      image: vision,
      title: 'Make a contribution to my community through philanthropy',
      position: 95.5,
      placement: Placement.Alternate,
      timelineText: 'Ultimately',
      noDot: true,
    },
  ];

  return (
    <div className='timeline'>
      <div className='timeline__line'>
        <div className='timeline__start'>
          <div className='timeline__start-dot' />
        </div>
        <div className='timeline__arrow-end'>
          <img src={timelineArrow} alt='' />
        </div>
      </div>
      <div
        className='timeline__second-line'
        style={{ width: `${dottedLineWidth}%` }}
      ></div>
      {events.map((event, index) => (
        <TimelineEvent
          key={index}
          image={event.image}
          title={event.title}
          position={event.position}
          placement={event.placement}
          noDot={event.noDot}
          timelineText={event.timelineText}
        />
      ))}
    </div>
  );
};

export default Timeline;
