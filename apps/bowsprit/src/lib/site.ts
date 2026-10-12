/**
 * Every destination and every line of copy the Bowsprit page renders, plus the one
 * navigation model the header's single row is built from — the page keeps exactly
 * one list of sections and one list of nav rows, never two copies of either.
 */

export const SITE_NAME = 'Bowsprit'

export const PAGE_TITLE = 'Bowsprit — Transparent Menu With CTA Template'

export const FOOTER_NOTE = 'One bar, one dropdown, one full-height horizon.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/bowsprit-hero/1920/1080'

/** The id the hamburger points at and the expanding list answers to. */
export const MENU_ID = 'bowsprit-menu'

/** The hamburger's own id, so the list it drives can be labelled by it. */
export const MENU_TOGGLE_ID = 'bowsprit-menu-toggle'

/**
 * How far a target is kept clear of the floating bar when it is scrolled to, in
 * px — past the 138px row the bar occupies at its widest.
 */
export const HEADER_OFFSET = 150

export interface NavLink {
  label: string
  href: string
  /** The current destination: carried as `aria-current` and drawn in white. */
  current?: boolean
}

/** A row that owns a dropdown surface. */
export interface NavBranch {
  label: string
  items: NavLink[]
}

export type NavItem = NavLink | NavBranch

/** Rows that own children are branches; everything else is a plain link. */
export function isBranch(item: NavItem): item is NavBranch {
  return 'items' in item
}

/** A stable, hyphenated id fragment for a row — used for its dropdown surface id. */
export function rowSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * The five top-level rows, in the source's order: a current start row, a
 * dishes row, the one row that owns the dropdown (three destination kinds: food,
 * drinks, events), then the story row and the news row.
 */
export const NAV: NavItem[] = [
  { label: 'Dock', href: '#dock', current: true },
  { label: 'Galley', href: '#galley' },
  {
    label: 'Supplies',
    items: [
      { label: 'Catering', href: '#catering' },
      { label: 'Cellar', href: '#cellar' },
      { label: 'Celebrations', href: '#celebrations' },
    ],
  },
  { label: 'Story', href: '#story' },
  { label: 'Logbook', href: '#logbook' },
]

/**
 * The row that sits alone in its own list at the right end of the bar — a square
 * block, not a rounded button, and the only filled colour in the whole header.
 */
export const CTA = { label: 'Reserve', href: '#book' } as const

/** The label the hamburger carries for assistive tech. */
export const MENU_LABEL = 'Toggle the site menu'

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
}

export interface SubPage {
  id: string
  /** The declared section this destination hangs off. */
  parent: string
  eyebrow: string
  heading: string
  body: string
}

/**
 * The seven targets the menu declares (the wordmark's top of page plus the six
 * rows), every one of them materialised as a real section so that no row in the
 * app is a dead link.
 */
export const SECTIONS: Section[] = [
  {
    id: 'dock',
    eyebrow: 'Dock',
    heading: 'One bar, one button, one horizon',
    body: 'The first frame is the band alone: a single row of chrome floating on a full-height photograph. Everything below this line exists because the menu points at it.',
  },
  {
    id: 'galley',
    eyebrow: 'Galley',
    heading: 'What comes out of the galley',
    body: 'Three plates that never leave the menu, cooked on six burners in a kitchen the size of a cabin.',
    items: [
      {
        title: 'Harbour Chowder',
        body: 'Smoked haddock, leek and potato, finished with a spoon of cream and brown butter.',
      },
      {
        title: 'Deckhand Sandwich',
        body: 'Sourdough, salt beef, pickled fennel and mustard — wrapped for the boat if you ask.',
      },
      {
        title: 'Slipway Salad',
        body: 'Winter leaves, roasted squash and a hard sheep cheese, dressed with cider vinegar.',
      },
    ],
  },
  {
    id: 'supplies',
    eyebrow: 'Supplies',
    heading: 'Everything a day on the water needs',
    body: 'The dropdown is a map of this dock: the catering we send out, the cellar behind the bar and the celebrations we host on the quay.',
    items: [
      {
        title: 'Two ways to provision',
        body: 'Take a hamper to the boat, or book the room above the slipway for the evening.',
      },
      {
        title: 'One list, no clipboard',
        body: 'Every order is written on the same board in the galley, so nothing is missed twice.',
      },
    ],
  },
  {
    id: 'story',
    eyebrow: 'Our story',
    heading: 'A boathouse that kept its own kitchen',
    body: 'We fitted out the slipway building forty years ago and never quite closed the galley door again; the coffee is still made on the same stove.',
  },
  {
    id: 'logbook',
    eyebrow: 'Logbook',
    heading: 'Notes from the last few weeks',
    body: 'Tide times, new plates and the odd repair — written up when the boats are tied off.',
    items: [
      {
        title: 'The cellar is open',
        body: 'Six bottles from the valley next door, by the glass or by the case.',
      },
      {
        title: 'Winters on the hard',
        body: 'What we do to a wooden hull when the weather turns, in four photographs.',
      },
      {
        title: 'Long table, Thursdays',
        body: 'One sitting for whoever turns up. No booking, no menu.',
      },
    ],
  },
  {
    id: 'book',
    eyebrow: 'Book',
    heading: 'Tell us which table you want',
    body: 'Send a line about the day you have in mind and we will answer with a table, a time and a price.',
    items: [
      { title: 'Enquiries', body: 'hello@bowsprit.example — answered within a day.' },
      { title: 'Bar', body: '+44 20 7946 0958 — the boathouse office, 08:00 to 18:00.' },
      { title: 'Slipway', body: 'Berth 12, North Quay — walk-ins welcome at the weekend.' },
    ],
  },
]

/**
 * The dropdown's destinations, each materialised inside the section of the same
 * kind it belongs to — so every row of the surface lands somewhere real.
 */
export const SUB_PAGES: SubPage[] = [
  {
    id: 'catering',
    parent: 'supplies',
    eyebrow: 'Catering',
    heading: 'Plates sent out to the berths',
    body: 'Bowls and boards delivered to the pontoon, or laid out in the room above the slipway.',
  },
  {
    id: 'cellar',
    parent: 'supplies',
    eyebrow: 'Cellar',
    heading: 'What is behind the bar this month',
    body: 'Local cider, two small vineyards and a hard lemonade that sells out every summer.',
  },
  {
    id: 'celebrations',
    parent: 'supplies',
    eyebrow: 'Celebrations',
    heading: 'The floor above the water',
    body: 'Long tables, a sound system and a view of the masts for birthdays and wedding parties.',
  },
]
