import { Alarm } from './alarm.d.ts';

export interface Reminder {
  guid: string;
  pGuid: string;
  etag: string;
  lastModifiedDate: Array<number>;
  createdDate: Array<number>;
  createdDateExtended: number;
  priority?: number;
  order: number;
  title: string;
  description?: string;
  dueDate?: Array<number>;
  dueDateIsAllDay: boolean;
  startDate: Array<number>;
  startDateIsAllDay: boolean;
  alarms: Array<Alarm>;
}
