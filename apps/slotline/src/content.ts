export const site = {
  name: 'Slotline',
  email: 'hello@slotline.app',
  tagline: 'One diary, every way',
  year: 2026,
  componentDock: 'https://www.componentdock.com/',
} as const

export const chrome = {
  skip: 'Skip to content',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  backToTop: 'Back to top',
  cookie: {
    copy: 'One cookie, one purpose: remembering this answer. No tracking, no ads, nothing sold.',
    accept: 'Accept all',
    decline: 'Essential only',
  },
  headerCta: 'Start free',
  mobileBar: { secondary: 'Pricing', primary: 'Try the booking flow' },
} as const

export const nav = [
  { label: 'Book', href: '#book', id: 'book' },
  { label: 'Availability', href: '#availability', id: 'availability' },
  { label: 'Policies', href: '#policies', id: 'policies' },
  { label: 'Channels', href: '#channels', id: 'channels' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const

export const hero = {
  pill: 'Live demo below — try it',
  title: 'One diary, every way',
  phrases: ['people try to book you', 'a client wants to reach you', 'a slot gets filled'] as const,
  lede:
    'Slotline takes bookings from your site, search, social and the phone, puts them in one diary, and enforces the deposit and cancellation rules you actually meant to have.',
  primaryCta: { label: 'Try the booking flow', href: '#book' },
  secondaryCta: { label: 'See pricing', href: '#pricing' },
  video: 'Watch a 90-second setup',
  photoAlt: 'A studio table with two chairs and a laptop showing a week of appointments',
  stats: [
    { value: '6', label: 'Minutes to set up' },
    { value: '31', label: 'Percent fewer no-shows' },
    { value: '4', label: 'Booking channels' },
    { value: '0', label: 'Commission per booking' },
  ] as const,
}

export const counters = [
  { target: 9400, label: 'Businesses booking with Slotline' },
  { target: 31, label: 'Percent fewer no-shows, median' },
  { target: 6, label: 'Minutes to first live booking' },
  { target: 0, label: 'Percent commission, ever' },
] as const

export const book = {
  kicker: 'Try it',
  title: 'This is the widget your clients see',
  lede:
    'Not a screenshot — the real thing, wired up. Pick a service, a day and a time and watch the summary fill in. It is the same component that goes on your site, in your colours.',
  footNote:
    'Nothing here is faked with images. Every state in the calendar and the slot grid is a real element with a real disabled or selected state, which is why it also works with a keyboard and a screen reader.',
  steps: ['Choose a service', 'Pick a day', 'Pick a time'],
  defaultService: 'cut',
  month: 'October 2026',
  calendarCaption: 'Availability in October 2026',
  calendarNote: 'Greyed days are fully booked. 21 of 31 days still have space.',
  defaultDay: 14,
  summaryTitle: 'Your booking',
  confirm: 'Confirm booking',
  status: {
    idle: 'No card needed to hold this slot.',
    held: 'This slot is held for 10 minutes.',
    done: 'Demo only — no booking was made.',
  },
} as const

export interface Service {
  id: string
  name: string
  price: string
  duration: string
  note?: string
}

export const services: [Service, Service, Service] = [
  { id: 'cut', name: 'Cut and finish', price: '£42', duration: '45 min' },
  {
    id: 'colour',
    name: 'Full colour',
    price: '£128',
    duration: '2 hr 30 min',
    note: 'Patch test required 48 hours before',
  },
  {
    id: 'consult',
    name: 'Consultation',
    price: 'Free',
    duration: '15 min',
    note: 'Deposit not taken on free appointments',
  },
]

export const dayLetters = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as const
export const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

export const weekdays = [
  { letter: 'M', name: 'Monday' },
  { letter: 'T', name: 'Tuesday' },
  { letter: 'W', name: 'Wednesday' },
  { letter: 'T', name: 'Thursday' },
  { letter: 'F', name: 'Friday' },
  { letter: 'S', name: 'Saturday' },
  { letter: 'S', name: 'Sunday' },
] as const

/** 1 Oct 2026 is a Thursday, so the grid opens with three blanks. */
export const leadingBlanks = 3
export const daysInMonth = 31
export const fullyBooked = [2, 4, 8, 11, 13, 18, 20, 25, 26, 30] as const

const cells: (number | null)[] = [
  ...Array.from({ length: leadingBlanks }, () => null),
  ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
]
while (cells.length % 7 !== 0) {
  cells.push(null)
}

/** Five rows of seven, already padded: the table never needs a runtime reshape. */
export const weeks: (number | null)[][] = Array.from({ length: cells.length / 7 }, (_, week) =>
  cells.slice(week * 7, week * 7 + 7),
)

export type SlotState = 'open' | 'booked' | 'scarce'

export interface Slot {
  time: string
  state: SlotState
  title?: string
}

export const slots: readonly Slot[] = [
  { time: '09:00', state: 'open' },
  { time: '09:45', state: 'booked', title: 'Already booked' },
  { time: '10:30', state: 'open' },
  { time: '11:15', state: 'scarce', title: 'Last slot with this stylist' },
  { time: '13:00', state: 'open' },
  { time: '13:45', state: 'booked', title: 'Already booked' },
  { time: '14:30', state: 'open' },
  { time: '15:15', state: 'scarce', title: 'Last slot before close' },
  { time: '16:00', state: 'booked', title: 'Already booked' },
]

export type ChipState = 'booked' | 'held' | 'open' | 'off'

export interface DiaryCell {
  day: string
  state: ChipState
  figure?: string
}

export interface DiaryRow {
  name: string
  role: string
  cells: readonly DiaryCell[]
  utilisation: number
}

export interface AvailabilityCopy {
  kicker: string
  title: string
  caption: string
  note: string
  legend: { state: string; className: string }[]
  rows: DiaryRow[]
}

const MON = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const

type WeekCell = Omit<DiaryCell, 'day'>

function week(cells: readonly WeekCell[]): DiaryCell[] {
  return cells.map((cell, index) => ({ ...cell, day: MON[index] as string }))
}

export const availability: AvailabilityCopy = {
  kicker: 'The diary',
  title: "Everyone's week on one screen",
  caption: 'Weekly availability by team member',
  note: 'Held slots expire after ten minutes and drop back to open without anyone touching them. A resource — a room, a chair, a piece of equipment — books exactly like a person does.',
  legend: [
    { state: 'Booked', className: 'bg-primary-700 text-white' },
    { state: 'Held, unconfirmed', className: 'bg-accent-100 text-accent-800' },
    { state: 'Open', className: 'bg-white ring-1 ring-inset ring-gray-200 text-gray-400' },
    {
      state: 'Not working',
      className:
        'bg-gray-100 text-gray-400 [background-image:repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.05)_4px,rgba(0,0,0,0.05)_8px)]',
    },
  ],
  rows: [
    {
      name: 'Nadia Farouk',
      role: 'Senior stylist',
      utilisation: 83,
      cells: week([
        { state: 'booked', figure: '6/6' },
        { state: 'booked', figure: '6/6' },
        { state: 'held', figure: '4/6' },
        { state: 'booked', figure: '6/6' },
        { state: 'booked', figure: '6/6' },
        { state: 'open', figure: '2/6' },
        { state: 'off' },
      ]),
    },
    {
      name: 'Tomás Herrera',
      role: 'Colour specialist',
      utilisation: 85,
      cells: week([
        { state: 'off' },
        { state: 'booked', figure: '4/4' },
        { state: 'booked', figure: '4/4' },
        { state: 'open', figure: '1/4' },
        { state: 'booked', figure: '4/4' },
        { state: 'booked', figure: '4/4' },
        { state: 'off' },
      ]),
    },
    {
      name: 'Ivy Chen',
      role: 'Stylist',
      utilisation: 79,
      cells: week([
        { state: 'open', figure: '3/7' },
        { state: 'held', figure: '5/7' },
        { state: 'booked', figure: '7/7' },
        { state: 'booked', figure: '7/7' },
        { state: 'open', figure: '4/7' },
        { state: 'booked', figure: '7/7' },
        { state: 'off' },
      ]),
    },
    {
      name: 'Treatment room',
      role: 'Bookable resource',
      utilisation: 73,
      cells: week([
        { state: 'open', figure: '2/8' },
        { state: 'open', figure: '3/8' },
        { state: 'booked', figure: '8/8' },
        { state: 'held', figure: '6/8' },
        { state: 'booked', figure: '8/8' },
        { state: 'booked', figure: '8/8' },
        { state: 'off' },
      ]),
    },
  ],
}

export type RungTone = 'sage' | 'plum' | 'ink'

export const policies = {
  kicker: 'Money',
  title: 'The rules that decide whether you get paid',
  ladderLabel: 'Cancellation ladder',
  settingsLabel: 'What else you can set',
  rungs: [
    {
      pill: 'Full refund',
      tone: 'sage',
      title: 'More than 48 hours',
      body: 'The client cancels or moves the appointment themselves. The slot reopens and the waitlist hears about it first.',
    },
    {
      pill: 'Deposit kept',
      tone: 'plum',
      title: '48 to 24 hours',
      body: 'Still self-service. The deposit stays with you, and moving the appointment once inside the window costs nothing.',
    },
    {
      pill: '50% of service',
      tone: 'plum',
      title: 'Under 24 hours',
      body: 'Cancellation goes through the business. The client gets a reason and a next step, not a dead end.',
    },
    {
      pill: 'Full price',
      tone: 'ink',
      title: 'No-show',
      body: 'Charged to the card on file after a two-hour grace period, with a receipt and the policy text attached.',
    },
  ] as const,
  settings: [
    { label: 'Deposit', value: '20%' },
    { label: 'Booking window', value: '60 days' },
    { label: 'Lead time', value: '2 hr' },
    { label: 'Buffer after', value: '15 min' },
    { label: 'Waitlist', value: 'On' },
    { label: 'Reminders', value: '48 & 3 hr' },
  ] as const,
  closing:
    'That 31 percent is the median across accounts that turned on deposits and the three-hour message together. Accounts that turned on only one of the two saw about a third of it.',
}

export const channels = {
  kicker: 'Where bookings come from',
  title: 'Four ways in, one diary',
  note: 'Bars are scaled against the largest channel, not the total. The shares add to 100%.',
  secondNote:
    'Phone bookings do not disappear when you go online — they fall to about a tenth and become the awkward ones, which is exactly the share you want a human answering.',
  rows: [
    {
      name: 'Your website',
      share: 44,
      fill: 100,
      blurb: 'The embedded widget, the same one above, works on any site builder.',
      setup: 'One script tag',
    },
    {
      name: 'Google',
      share: 27,
      fill: 61,
      blurb: 'Reserve with Google on Maps and in Search results.',
      setup: 'Verify, then a day',
    },
    {
      name: 'Instagram',
      share: 18,
      fill: 41,
      blurb: 'A booking link in bio and stories, service preselected.',
      setup: 'Two minutes',
    },
    {
      name: 'Phone and walk-in',
      share: 11,
      fill: 25,
      blurb: 'Staff book into the same diary from the desk tablet.',
      setup: 'Nothing to do',
    },
  ],
}

export interface Plan {
  name: string
  blurb: string
  monthly: number
  yearly: number
  featured?: boolean
  cta: string
  features: readonly { label: string; included: boolean }[]
}

export interface PricingCopy {
  kicker: string
  title: string
  lede: string
  monthlyLabel: string
  yearlyLabel: string
  save: string
  switchLabel: string
  popular: string
  monthlyNote: string
  plans: Plan[]
}

export const pricing: PricingCopy = {
  kicker: 'Pricing',
  title: 'Per calendar, per month, no commission',
  lede:
    'We do not take a cut of your bookings. A busy month costs the same as a quiet one, which is the opposite of how most of this market prices.',
  monthlyLabel: 'Monthly',
  yearlyLabel: 'Yearly',
  save: 'Save 20%',
  switchLabel: 'Toggle annual billing',
  popular: 'Most Popular',
  monthlyNote: 'Billed monthly',
  plans: [
    {
      name: 'Solo',
      blurb: 'One person, one diary, everything switched on.',
      monthly: 12,
      yearly: 10,
      cta: 'Start free for 30 days',
      features: [
        { label: 'Unlimited bookings', included: true },
        { label: 'Deposits and reminders', included: true },
        { label: 'Your own booking page', included: true },
        { label: 'Phone bookings on the desk tablet', included: true },
        { label: 'Google and Instagram booking', included: false },
        { label: 'Bookable resources and rooms', included: false },
      ],
    },
    {
      name: 'Studio',
      blurb: 'Up to eight calendars, shared resources, one bill.',
      monthly: 39,
      yearly: 32,
      featured: true,
      cta: 'Start free for 30 days',
      features: [
        { label: 'Everything in Solo', included: true },
        { label: 'Eight calendars', included: true },
        { label: 'Google and Instagram booking', included: true },
        { label: 'Bookable resources and rooms', included: true },
        { label: 'Per-person cancellation rules', included: true },
        { label: 'Role-based access', included: true },
      ],
    },
    {
      name: 'Venue',
      blurb: 'Unlimited calendars, multiple sites, real support.',
      monthly: 89,
      yearly: 74,
      cta: 'Talk to us',
      features: [
        { label: 'Everything in Studio', included: true },
        { label: 'Unlimited calendars', included: true },
        { label: 'Multiple locations', included: true },
        { label: 'Waitlist across sites', included: true },
        { label: 'Priority support with a name', included: true },
        { label: 'Migration from your current system', included: true },
      ],
    },
  ],
}

export const faq = {
  kicker: 'Questions',
  title: 'What people ask before switching',
  lede: 'Including the ones that are awkward for us. If yours is not here, the contact band reaches a person.',
  items: [
    {
      question: 'Do you take a percentage of my bookings?',
      answer: 'No, and there is no plan where that changes. The price on the card is the whole price.',
    },
    {
      question: 'What happens to my existing bookings if I switch?',
      answer:
        'They are imported by CSV or from your current system, and the history stays readable as an archive.',
    },
    {
      question: 'Can a client book without creating an account?',
      answer: 'Yes, and that is the default. An account is optional for them and never required to hold a slot.',
    },
    {
      question: 'Does the deposit actually reduce no-shows?',
      answer:
        'A little on its own. Paired with a three-hour message it is about a third fewer, which is where the 31 percent figure comes from.',
    },
    {
      question: 'What is the worst thing about Slotline?',
      answer:
        'Class and group booking is the newest part of the product, and it shows. Everything else here is a few years old and settled.',
    },
    {
      question: 'What happens to my data if I leave?',
      answer:
        'A CSV export of every booking and client is available any time. Your page stays live for thirty days, then redirects.',
    },
  ] as const,
}

export const contact = {
  title: 'Set it up during one coffee',
  lede: 'Thirty days free, no card, and if you are moving from something else we will do the import for you.',
  primary: 'Start free for 30 days',
  secondary: 'See pricing',
}

export const footer = {
  brandCopy:
    'Slotline is one diary for studios, clinics and small venues. Bookings from four channels land in the same calendar, on rules you set once and never think about again.',
  claim: 'No commission on your bookings. Ever.',
  newsletterTitle: 'Stay updated',
  newsletterCopy: 'One short note a month: what shipped and what it changed for the studios using it.',
  newsletterPlaceholder: 'you@studio.com',
  newsletterCta: 'Subscribe',
  newsletterSuccess: 'You are on the list. One note a month, nothing else.',
  errors: { required: 'This field is required', email: 'Please enter a valid email address' },
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Booking flow', href: '#book' },
        { label: 'Availability', href: '#availability' },
        { label: 'Policies and deposits', href: '#policies' },
        { label: 'Booking channels', href: '#channels' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Pricing', href: '#pricing' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    { title: 'Help', links: [{ label: 'Questions', href: '#faq' }] },
  ],
  legal: `© ${site.year} ${site.name}. All rights reserved.`,
  componentDockLabel: 'Component Dock',
} as const

export const video = {
  title: 'Setup in ninety seconds',
  caption: 'An authored sample walkthrough: connect a calendar, set three rules, publish the widget.',
  close: 'Close video',
  steps: [
    'Connect the calendar you already use',
    'Set a deposit and a cancellation window',
    'Paste one script tag into your site',
  ],
} as const
