export interface Collection {
  title: string;
  guid: string;
  order: number;
  color: string;
  enabled: boolean;
  ctag: string;
  createdDate: Array<number>;
  isFamily: boolean;
  completedCount: number;
  shouldShowJunkUIWhenAppropriate: boolean;
}
