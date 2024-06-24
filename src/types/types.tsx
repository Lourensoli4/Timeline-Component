export enum Placement {
  Top = 'top',
  Bottom = 'bottom',
  Alternate = 'alternate',
}

export interface TimelineEventProps {
  image: any;
  title: string;
  placement?: Placement;
  position: number;
  noDot?: boolean;
  timelineText?: string;
}
