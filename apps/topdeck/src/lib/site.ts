/**
 * Every destination and every line of copy the Topdeck page renders, plus the one
 * navigation model both the desktop nav row and the off-canvas panel are built
 * from — the page has exactly one nav source of truth and never keeps two copies
 * of the same list.
 */

export const SITE_NAME = 'Topdeck'

export const PAGE_TITLE = 'Topdeck — Transparent Two-Tier Menu Template'

export const FOOTER_NOTE = 'Two tiers of chrome, seven rows, one full-bleed frame.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/topdeck-hero/1920/1080'

/** The id the hamburger points at and the off-canvas panel answers to. */
export const MENU_ID = 'topdeck-menu'

/** The id the desktop nav row's own landmark answers to. */
export const NAV_ID = 'topdeck-nav'

/**
 * How far a target is kept clear of the floating chrome when it is scrolled to,
 * in px (7rem = 112px, past the utility bar plus the nav row).
 */
export const HEADER_OFFSET = 112

/** The utility bar's two contact targets — the app's own placeholders. */
export const CONTACT = {
  email: 'hello@topdeck.example',
  phone: '+442079460958',
  phoneLabel: '+44 20 7946 0958',
} as const

export type SocialName = 'x' | 'facebook' | 'linkedin' | 'instagram'

export interface Social {
  name: SocialName
  label: string
  href: string
}

/** The utility bar's four outbound socials, in the source's order. */
export const SOCIALS: Social[] = [
  { name: 'x', label: 'X', href: 'https://x.com/componentdock' },
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/componentdock' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/componentdock' },
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/componentdock' },
]

export interface NavLink {
  label: string
  href: string
  /** The current destination: carried as `aria-current` and drawn in white. */
  current?: boolean
}

/** A row that owns a flyout in the header and an expander in the panel. */
export interface NavBranch {
  label: string
  href: string
  items: NavItem[]
}

export type NavItem = NavLink | NavBranch

/** Rows that own children are branches; everything else is a plain link. */
export function isBranch(item: NavItem): item is NavBranch {
  return 'items' in item
}

/** A stable, hyphenated id fragment for a row — used for its flyout/submenu ids. */
export function rowSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * The seven top-level rows, in the source's order: a current start row, a
 * programmes row, the one row that owns the dropdown, then story, timetable,
 * showcase and the contact row. Labels are the app's own.
 */
export const NAV: NavItem[] = [
  { label: 'Start', href: '#start', current: true },
  { label: 'Programmes', href: '#programmes' },
  {
    label: 'Deck Plan',
    href: '#deck-plan',
    items: [
      { label: 'Crew', href: '#crew' },
      { label: 'Rates', href: '#rates' },
      { label: 'Questions', href: '#questions' },
      {
        label: 'Reference',
        href: '#deck-plan',
        items: [
          { label: 'Handbooks', href: '#handbooks' },
          { label: 'Toolkit', href: '#toolkit' },
          { label: 'Field Notes', href: '#field-notes' },
        ],
      },
    ],
  },
  { label: 'Story', href: '#story' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Signal', href: '#signal' },
]

export interface SectionItem {
  title: string
  body: string
}

export interface Section {
  id: string
  eyebrow: string
  heading: string
  body: string
  /** Card rows, where the section is a list of things. */
  items?: SectionItem[]
  /** Frame-filling images, where the section is a grid. */
  photos?: string[]
}

/**
 * The six targets the menu declares, plus the index page the dropdown's own row
 * points at — every one of them materialised as a real section so that no row in
 * the app is a dead link.
 */
export const SECTIONS: Section[] = [
  {
    id: 'start',
    eyebrow: 'Start here',
    heading: 'Two tiers of chrome over one photograph',
    body: 'The first frame is the band alone: a utility bar, a nav row and a full-bleed image. Everything else on this page exists because the menu points at it.',
  },
  {
    id: 'programmes',
    eyebrow: 'Programmes',
    heading: 'Sessions shaped around the tide',
    body: 'Three ways to train with us, all of them small enough to keep the coaching personal.',
    items: [
      {
        title: 'First Light',
        body: 'An hour on the water before the day starts, two coaches, six places.',
      },
      {
        title: 'Long Course',
        body: 'Four hours of open-water work with a support boat and a debrief on the dock.',
      },
      {
        title: 'Dusk Set',
        body: 'The same drills under lights, for people whose weeks fill up early.',
      },
    ],
  },
  {
    id: 'deck-plan',
    eyebrow: 'Deck plan',
    heading: 'Every row the menu declares, on one page',
    body: 'The dropdown is a map of this deck: the crew, the rates, the questions we get asked and the reference shelf behind all of it.',
    items: [
      {
        title: 'Four destinations',
        body: 'Crew, rates and questions sit beside the reference shelf in the one flyout.',
      },
      {
        title: 'Two levels deep',
        body: 'The reference shelf opens to the right of its own row rather than replacing it.',
      },
    ],
  },
  {
    id: 'story',
    eyebrow: 'Our story',
    heading: 'A club that keeps its own hulls in the water',
    body: 'We have been fitting out and sailing small craft since the yard opened, and we still cut every plan by hand.',
  },
  {
    id: 'timetable',
    eyebrow: 'Timetable',
    heading: 'Four slots, six days a week',
    body: 'Pick a slot and turn up; there is always a hull spare and someone to brief you on the water.',
    items: [
      { title: 'Monday and Thursday', body: 'First Light, 06:30 — two hours on the bay.' },
      { title: 'Tuesday', body: 'Long Course, 09:00 — the full open-water passage.' },
      { title: 'Friday', body: 'Dusk Set, 18:30 — drills under the yard lights.' },
      { title: 'Saturday', body: 'Open deck, 10:00 — bring anyone who wants a first go.' },
    ],
  },
  {
    id: 'showcase',
    eyebrow: 'Showcase',
    heading: 'Frames from the last crossings',
    body: 'Photographs from the last few weeks on the water, taken from the support boat.',
    photos: [
      'https://picsum.photos/seed/topdeck-1/900/700',
      'https://picsum.photos/seed/topdeck-2/900/700',
      'https://picsum.photos/seed/topdeck-3/900/700',
      'https://picsum.photos/seed/topdeck-4/900/700',
    ],
  },
  {
    id: 'signal',
    eyebrow: 'Signal',
    heading: 'Tell us what you want to sail',
    body: 'Send a line about the course you have in mind and we will answer with a slot, a price and a date.',
    items: [
      { title: 'Email', body: 'hello@topdeck.example — answered within a day.' },
      { title: 'Phone', body: '+44 20 7946 0958 — the yard office, 08:00 to 18:00.' },
      { title: 'Yard', body: 'Berth 12, North Quay — visitors welcome at the weekend.' },
    ],
  },
]

export interface SubPage {
  id: string
  /** The declared section this destination hangs off. */
  parent: string
  eyebrow: string
  heading: string
  body: string
}

/**
 * The dropdown's destinations, each materialised inside the section of the same
 * kind it belongs to — so every flyout row lands somewhere real.
 */
export const SUB_PAGES: SubPage[] = [
  {
    id: 'crew',
    parent: 'story',
    eyebrow: 'Crew',
    heading: 'Four people, one helm',
    body: 'Two instructors, a boat handler and whoever is on the radio that week.',
  },
  {
    id: 'handbooks',
    parent: 'story',
    eyebrow: 'Handbooks',
    heading: 'The notes we hand out on day one',
    body: 'Safety, knots and the shorthand we use on the water, in one thin booklet.',
  },
  {
    id: 'rates',
    parent: 'programmes',
    eyebrow: 'Rates',
    heading: 'What a place costs',
    body: 'Single sessions, a term of them, and the concession price for juniors.',
  },
  {
    id: 'toolkit',
    parent: 'programmes',
    eyebrow: 'Toolkit',
    heading: 'What to bring, and what we lend',
    body: 'Hulls, buoyancy aids and radios are ours; boots and a warm layer are yours.',
  },
  {
    id: 'field-notes',
    parent: 'timetable',
    eyebrow: 'Field notes',
    heading: 'How the slots move with the weather',
    body: 'When the wind turns we post a change the evening before and text everyone booked.',
  },
  {
    id: 'questions',
    parent: 'signal',
    eyebrow: 'Questions',
    heading: 'The four things everyone asks',
    body: 'Experience needed, minimum age, what happens when it rains, and whether we are insured.',
  },
]
