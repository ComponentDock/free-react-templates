export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** U+2013 — an en dash, the separator the schedule is printed with. */
export const EN_DASH = '\u2013'

export interface Head {
  /** h1 — one line at every width down to 320 px. */
  title: string
  /** The single grey line under it. */
  sub: string
}

export const HEAD: Head = {
  title: 'Upcoming in Lisbon',
  sub: 'Three picks for October from the city events desk.',
}

export interface Face {
  /** Two letters, white on the colour. */
  initials: string
  color: string
}

export interface Price {
  /** "From" or "incl. coffee" — read before or after the figure. */
  label: string
  /** U+20AC, never a hyphen-minus. */
  amount: string
  /** The third card prints the figure first, then the label. */
  labelAfter: boolean
}

export interface EventItem {
  id: string
  /** The all-caps eyebrow, e.g. "Live music". */
  type: string
  title: string
  /** Floating local time, exactly as the calendar file writes it. */
  start: string
  end: string
  /** What the fact row prints: the neighbourhood. */
  venueLabel: string
  /** What the calendar writes: the city. Deliberately a different string. */
  calendarLocation: string
  countLabel: string
  price: Price
  /** Decoration only — the count text carries the meaning. */
  faces: Face[]
  /** One card carries a yellow capacity flag. */
  flag?: string
  imageSeed: string
  /** A description of the photograph, not the event name. */
  alt: string
}

export const EVENTS: EventItem[] = [
  {
    id: 'craft',
    type: 'Conference',
    title: 'Product Craft Summit 2026',
    start: '20261014T090000',
    end: '20261014T173000',
    venueLabel: 'Centro de Congressos, Belém',
    calendarLocation: 'Centro de Congressos, Lisbon',
    countLabel: '412 going',
    price: { label: 'From', amount: '€180', labelAfter: false },
    faces: [
      { initials: 'AM', color: '#2563eb' },
      { initials: 'JL', color: '#be185d' },
      { initials: 'RT', color: '#047857' },
    ],
    imageSeed: 'showbill-1',
    alt: 'A wide conference hall of empty rows lit from the stage side.',
  },
  {
    id: 'mares',
    type: 'Live music',
    title: 'Marés: Live at the Riverside',
    start: '20261017T213000',
    end: '20261018T000000',
    venueLabel: 'Armazém 16, Marvila',
    calendarLocation: 'Armazém 16, Lisbon',
    countLabel: '1,280 going',
    price: { label: 'From', amount: '€28', labelAfter: false },
    faces: [
      { initials: 'SF', color: '#7c3aed' },
      { initials: 'NB', color: '#c2410c' },
      { initials: 'PO', color: '#0e7490' },
    ],
    flag: 'Few tickets left',
    imageSeed: 'showbill-2',
    alt: 'A riverfront warehouse at dusk with warm lights strung above a crowd.',
  },
  {
    id: 'latte',
    type: 'Workshop',
    title: 'Latte Art Morning Workshop',
    start: '20261024T100000',
    end: '20261024T123000',
    venueLabel: 'Fábrica Coffee Lab, Chiado',
    calendarLocation: 'Fábrica Coffee Lab, Lisbon',
    countLabel: '9 of 12 places taken',
    price: { label: 'incl. coffee', amount: '€45', labelAfter: true },
    faces: [
      { initials: 'CV', color: '#b45309' },
      { initials: 'DK', color: '#4f46e5' },
    ],
    imageSeed: 'showbill-3',
    alt: 'A barista pouring milk into a cup on a steel counter.',
  },
]

/** Everything the calendar file needs, derived from one event. */
export interface CalendarEvent {
  title: string
  start: string
  end: string
  calendarLocation: string
}
