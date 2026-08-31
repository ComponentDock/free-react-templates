import type { CalendarEvent } from '../utils/calendar'

// Paraphrased event data — same kinds as the original, different titles.
// Default view: February 2020 (leap year, starts Saturday).
export const SAMPLE_EVENTS: CalendarEvent[] = [
  {
    id: '1',
    title: 'All Day Event',
    start: new Date(2020, 1, 1),
    allDay: true,
  },
  {
    id: '2',
    title: 'Long Event',
    start: new Date(2020, 1, 7),
    end: new Date(2020, 1, 10),
    allDay: true,
  },
  {
    id: '3a',
    title: 'Repeating Event',
    start: new Date(2020, 1, 9, 16, 0),
    groupId: 999,
  },
  {
    id: '3b',
    title: 'Repeating Event',
    start: new Date(2020, 1, 16, 16, 0),
    groupId: 999,
  },
  {
    id: '4',
    title: 'Conference',
    start: new Date(2020, 1, 11),
    end: new Date(2020, 1, 13),
    allDay: true,
  },
  {
    id: '5',
    title: 'Meeting',
    start: new Date(2020, 1, 12, 10, 30),
    end: new Date(2020, 1, 12, 12, 30),
  },
  {
    id: '6',
    title: 'Lunch',
    start: new Date(2020, 1, 12, 12, 0),
  },
  {
    id: '7',
    title: 'Meeting',
    start: new Date(2020, 1, 12, 14, 30),
    end: new Date(2020, 1, 12, 16, 30),
  },
  {
    id: '8',
    title: 'Happy Hour',
    start: new Date(2020, 1, 12, 17, 30),
  },
  {
    id: '9',
    title: 'Dinner',
    start: new Date(2020, 1, 12, 20, 0),
  },
  {
    id: '10',
    title: 'Birthday Party',
    start: new Date(2020, 1, 13, 7, 0),
  },
  {
    id: '11',
    title: 'Click for Google',
    start: new Date(2020, 1, 28),
    allDay: true,
    url: 'http://google.com/',
  },
]
