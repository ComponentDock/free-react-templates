/** Every string the page renders, in document order. */
export const BRAND = 'Keynoter'

export const COMPONENT_DOCK = 'https://www.componentdock.com/'

export interface NavLink {
  readonly label: string
  readonly href: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Tickets', href: '#workshops' },
  { label: 'Blog', href: '#talks' },
  { label: 'Contact', href: '#contact' },
]

export interface Social {
  readonly label: string
  readonly path: string
}

/** Brand glyphs are inline SVG — the icon set ships no brand marks. */
export const SOCIALS: readonly Social[] = [
  { label: 'X', path: 'M3 3l7.2 9.3L3.4 21h2.3l5.7-7.1 5.4 7.1H21l-7.5-9.7L20.6 3h-2.3l-5.2 6.5L8.2 3z' },
  {
    label: 'Facebook',
    path: 'M13.5 21v-7.5H16l.4-3h-2.9V8.7c0-.9.3-1.5 1.6-1.5H16.6V4.5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.6H7v3h2.6V21z',
  },
  {
    label: 'LinkedIn',
    path: 'M4.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM9 9h2.9v1.7h.1c.4-.8 1.5-1.9 3.3-1.9 3 0 3.7 1.9 3.7 4.5V21h-3v-6.4c0-1.5-.3-2.6-1.7-2.6-1.3 0-1.9.9-1.9 2.5V21H9z',
  },
  {
    label: 'Dribbble',
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.5 4.7a8.3 8.3 0 0 1 1.8 5c-.7-.2-3.4-.7-6.1-.4-.1-.3-.2-.6-.4-.9 2.9-1.2 4.3-3 4.7-3.7zM12 3.6c2 0 3.8.7 5.2 1.9-.3.5-1.6 2.2-4.4 3.3a41 41 0 0 0-3-4.9c.7-.2 1.4-.3 2.2-.3zM8.1 4.6a48 48 0 0 1 3 4.8c-3.7 1-7 1-7.4 1a8.4 8.4 0 0 1 4.4-5.8zM3.5 12v-.3c.4 0 4.3.1 8.3-1.1l.6 1.3c-3.9 1.1-6 4.7-6.2 5A8.4 8.4 0 0 1 3.5 12zm8.5 8.4c-1.9 0-3.6-.6-5-1.6.1-.3 1.6-3.4 5.8-4.7 1.6 4.2 2.2 6.1 2.3 6.3-1 .6-2 .9-3.1.9zm4.6-1.7c-.1-.5-.6-2.4-2.1-6.4 2.5-.4 4.7.3 5 .4a8.4 8.4 0 0 1-2.9 6z',
  },
  {
    label: 'YouTube',
    path: 'M21.6 8.2a2.6 2.6 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 2 12a27 27 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-3.8zM10 15V9l5.2 3z',
  },
]

export const EVENT = {
  month: 'February',
  dayFrom: '9',
  dayTo: '15',
  year: '2027',
  headline: ['Keynoter', 'Conference', '2027'],
  venue: 'World Trade Center, Gibraltar',
} as const

export interface Slide {
  readonly seed: string
  readonly alt: string
}

export const HERO_SLIDES: readonly Slide[] = [
  { seed: 'keynoter-hall', alt: 'A full auditorium waiting for the opening keynote' },
  { seed: 'keynoter-stage', alt: 'A speaker at the lectern under house lights' },
  { seed: 'keynoter-crowd', alt: 'Attendees talking between sessions in the lobby' },
  { seed: 'keynoter-workshop', alt: 'A small workshop table mid-discussion' },
]

export const NEXT_EVENT = {
  heading: 'Next Event',
  iso: '2027-02-09T09:00:00+01:00',
  label: 'February 9 - 15, 2027',
  time: 'Starting @ 09:00 AM',
} as const

export interface Speaker {
  readonly name: string
  readonly role: string
  readonly seed: string
  readonly alt: string
}

export const SPEAKERS: readonly Speaker[] = [
  {
    name: 'Mara Ellison',
    role: 'Former Lead UX, Hulu',
    seed: 'keynoter-speaker-mara',
    alt: 'Portrait of Mara Ellison',
  },
  {
    name: 'Tobias Rehn',
    role: 'Financial Consultant',
    seed: 'keynoter-speaker-tobias',
    alt: 'Portrait of Tobias Rehn',
  },
  {
    name: 'Priya Raghavan',
    role: 'Founder, Cadence Studio',
    seed: 'keynoter-speaker-priya',
    alt: 'Portrait of Priya Raghavan',
  },
]

export const WORKSHOP = {
  eyebrow: 'Workshops',
  heading: 'Learn from the most talented people.',
  copy: 'Four rooms, three days, twenty seats each. Bring a laptop and a piece of work you are stuck on: every workshop starts from what the room is actually building, not from a slide deck.',
  image: 'https://picsum.photos/seed/keynoter-workshop-room/1224/1568',
  imageAlt: 'A workshop room with attendees gathered around one table',
  primary: { label: 'More Info', href: '#talks' },
  secondary: { label: 'Buy Tickets', href: '#contact' },
} as const

export const SPEAKERS_CTA = { label: 'All Speakers', href: '#talks' } as const

export interface Talk {
  readonly topic: string
  readonly speaker: string
  readonly role: string
}

export const TALKS: readonly Talk[] = [
  {
    topic: '4 Reasons Why You Should Design Without Color First.',
    speaker: 'Mara Ellison',
    role: 'Former Lead UX, Hulu',
  },
  {
    topic: 'Before you can master design, you must first master the fundamentals.',
    speaker: 'Priya Raghavan',
    role: 'Founder, Cadence Studio',
  },
  {
    topic: 'Creating Usability with Motion',
    speaker: 'Tobias Rehn',
    role: 'Financial Consultant',
  },
  {
    topic: '7 Practical Tips for Cheating at Design',
    speaker: 'Ines Okonkwo',
    role: 'Design Lead, Northwind',
  },
  {
    topic: 'Accessibility Features Are Just Features',
    speaker: 'Rafael Sandoval',
    role: 'Accessibility Engineer',
  },
  {
    topic: 'The Cadence of a Design Team',
    speaker: 'Hanna Sommer',
    role: 'Head of Design, Fieldnote',
  },
]

export const SUBSCRIBE = {
  heading: 'Never miss another seminar',
  copy: 'One email a month: the talks we have published, the workshops that still have seats, and the recordings once they are cut. No ticket spam, and one click unsubscribes.',
  placeholder: 'Your E-mail Address',
  submit: 'subscribe',
  success: 'You are on the list — we will email the next seminar announcement.',
  error: 'Enter a valid email address, e.g. you@example.com.',
} as const

export const FOOTER_COLUMNS: readonly { readonly heading: string; readonly items: readonly string[] }[] =
  [
    { heading: 'Company', items: ['Careers', 'Volunteers', 'Sustainability'] },
    {
      heading: 'Our Events',
      items: ['Keynote - Rome', 'Collision - Madrid', 'RISE - Hong Kong', 'MoneyConf - Bucharest'],
    },
    {
      heading: 'Useful Links',
      items: ['Pre-register for 2027', 'News', 'Support centre', 'Accessibility policy'],
    },
  ]

export const CONTACT = {
  heading: 'Contact',
  address: '4127 Raoul Wallenberg Place',
  phone: '203-808-8613',
  email: 'hello@keynoter.example',
} as const
