import { StructuredLocation } from './structuredLocation.d.ts';

export interface Alarm {
  messageType: string;
  pGuid: string;
  guid: string;
  isLocationBased: boolean;
  onDate?: Array<number>;
  structuredLocation?: StructuredLocation;
  proximity?: string;
}
