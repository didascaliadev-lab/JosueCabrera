export interface TimelineItem {
  key: string;
  disciplineKey: string;
  statusKey: string;
  isSpecial?: boolean;
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  { key: 'acting', disciplineKey: 'acting', statusKey: 'present' },
  { key: 'directing', disciplineKey: 'directing', statusKey: 'present' },
  { key: 'dramaturgy', disciplineKey: 'dramaturgy', statusKey: 'present' },
  { key: 'pedagogy', disciplineKey: 'pedagogy', statusKey: 'present' },
  { key: 'salsa', disciplineKey: 'salsa', statusKey: 'present' },
  { key: 'web', disciplineKey: 'web', statusKey: 'present' },
  { key: 'music', disciplineKey: 'music', statusKey: 'trying', isSpecial: true }
];
