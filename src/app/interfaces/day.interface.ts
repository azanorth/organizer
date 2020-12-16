import { Moment } from 'moment';

export interface Day {
  value: Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}
