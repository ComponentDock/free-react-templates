/**
 * Every destination and every line of copy the Halyard page renders, plus the one
 * navigation model the two groups in the bar and the drawer are all built from: the
 * page keeps a single list of rows and hands each group the three that belong to it —
 * never a second hand-maintained copy for the other presentation or the other side.
 */

export const SITE_NAME = 'Halyard'

export const PAGE_TITLE = 'Halyard — Solid Centred Wordmark Menu Template'

export const FOOTER_NOTE = 'One solid bar, six destinations, a wordmark at the masthead.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/halyard-hero/1920/1080'

/** A deterministic placeholder for one picture inside a section. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/halyard-${seed}/${width}/${height}`
}

/** The left group's list id, so the group's own region can point at it. */
export const NAV_LEFT_ID = 'halyard-nav-left'

/** The right group's list id. */
export const NAV_RIGHT_ID = 'halyard-nav-right'

/** The drawer's list id — the same six rows, read top to bottom. */
export const DRAWER_NAV_ID = 'halyard-drawer-nav'

/** The drawer panel's id. */
export const DRAWER_ID = 'halyard-drawer'

/** The veil that dims the page behind the drawer. */
export const VEIL_ID = 'halyard-veil'

/** The hamburger's id, so the panel it opens can be labelled by it. */
export const MENU_TOGGLE_ID = 'halyard-menu-toggle'

/** The drawer's own close control, so focus has somewhere to land when it opens. */
export const DRAWER_CLOSE_ID = 'halyard-drawer-close'

/** The label the hamburger carries for assistive tech. */
export const MENU_LABEL = 'Open the site menu'

/** The label the drawer's close control carries for assistive tech. */
export const DRAWER_CLOSE_LABEL = 'Close the site menu'

/**
 * How far a target is kept clear of the bar when it is scrolled to, in px: the bar's
 * own 96px height plus a little air, because the bar is in the flow and never pinned.
 */
export const HEADER_OFFSET = 104

/** Which third of the bar a row belongs to. The split is structural, not a filter. */
export type NavGroup = 'left' | 'right'

export interface NavLink {
  label: string
  href: string
  /** The third of the bar the row is drawn in. */
  group: NavGroup
  /** The current destination: carried as `aria-current` and drawn in brand green. */
  current?: boolean
}

/**
 * The six rows the bar renders, in the design's order: three for the left third
 * (right-aligned against the middle column) and three for the right third
 * (left-aligned away from it), with the opening row marked as the destination
 * already open.
 */
export const NAV: NavLink[] = [
  { label: 'Bridge', href: '#bridge', group: 'left', current: true },
  { label: 'Refits', href: '#refits', group: 'left' },
  { label: 'Rigging', href: '#rigging', group: 'left' },
  { label: 'Crew', href: '#crew', group: 'right' },
  { label: 'Log', href: '#log', group: 'right' },
  { label: 'Signal', href: '#signal', group: 'right' },
]

/** The rows of one third of the bar, in document order. */
export function navGroup(group: NavGroup): NavLink[] {
  return NAV.filter((item) => item.group === group)
}

/** The drawer's flat reading of the same model: left group first, then right. */
export function navAll(): NavLink[] {
  return [...navGroup('left'), ...navGroup('right')]
}

export interface SectionItem {
  title: string
  body: string
  /** A card that is also a picture, where the section is a grid of things. */
  image?: string
}

export interface Section {
  id: string
  eyebrow: string
  heading: string
  body: string
  /** The section's rows, where it is a list of things. */
  items?: SectionItem[]
}

/**
 * The six destinations the bar declares, every one of them materialised so that no
 * row is a dead link: the opening intro, the refit log the yard keeps, the rigging
 * services, the crew that does the work, the written log and the ways to reach the
 * office.
 */
export const SECTIONS: Section[] = [
  {
    id: 'bridge',
    eyebrow: 'Bridge',
    heading: 'Six destinations either side of the wordmark',
    body: 'The first frame is the bar alone: one opaque white surface in the flow of the page, its outer thirds carrying three destinations each and the name of the yard centred between them. Everything below this line exists because one of those six rows points at it.',
    items: [
      {
        title: 'Two mirrored thirds',
        body: 'Refits, rigging and this page sit to the left of the name; the crew, the log and the ways to reach us sit to the right.',
      },
      {
        title: 'Solid by day',
        body: 'The bar is opaque and stays in the flow, so the band below starts at its bottom edge rather than passing underneath it.',
      },
      {
        title: 'A drawer for the rest',
        body: 'Below 992px the same six rows move into a panel that slides in from the right edge, in the order they are written here.',
      },
    ],
  },
  {
    id: 'refits',
    eyebrow: 'Refits',
    heading: 'Hulls in the shed this season',
    body: 'Six vessels are on the hard, from a twelve-foot dinghy to a forty-foot ketch, each with a board screwed to its transom naming what is done and who signed it off.',
    items: [
      {
        title: 'Selkie — whole topside',
        body: 'Sheathing taken back to bare timber, three planks scarfed and the deck re-caulked. Three days a week for a season.',
        image: shot('refit-1', 800, 600),
      },
      {
        title: 'Greyholm — new mainsheet',
        body: 'A heavier mainsheet after the squall off the point, plus a repair to the foredeck where the cleat pulled.',
        image: shot('refit-2', 800, 600),
      },
      {
        title: 'Novara — anti-fouling',
        body: 'Anodes replaced, two coats below the waterline and a fresh stripe along the waterline itself.',
        image: shot('refit-3', 800, 600),
      },
    ],
  },
  {
    id: 'rigging',
    eyebrow: 'Rigging',
    heading: 'What the loft takes on',
    body: 'Standing rigging measured on the boat rather than from a drawing, and running rigging spliced at the bench while you wait.',
    items: [
      {
        title: 'Standing rigging',
        body: 'Shrouds and stays swaged to length, tensioned alongside and logged against the hull.',
      },
      {
        title: 'Running rigging',
        body: 'Halyrds, sheets and control lines cut, whipped and labelled for the deck they go back to.',
      },
      {
        title: 'Sails and covers',
        body: 'Repairs and alterations in the loft, plus covers cut for a winter on the hard.',
      },
    ],
  },
  {
    id: 'crew',
    eyebrow: 'Crew',
    heading: 'The people who hold the shed together',
    body: 'Two riggers, a sailmaker and the office that books the work: every job on the board carries a name against it, including the one that writes the invoice.',
    items: [
      {
        title: 'The loft',
        body: 'A sailmaker and one bench hand, working through the winter and out of the yard by spring.',
      },
      {
        title: 'The yard',
        body: 'Two riggers who will take a hull on for a season or for a single tide.',
      },
      {
        title: 'The office',
        body: 'One desk, answering the telephone and the post, and holding the only copy of the sheet.',
      },
    ],
  },
  {
    id: 'log',
    eyebrow: 'Log',
    heading: 'Notes from the last few weeks',
    body: 'What went on the board, what came off it and what the weather did — written up whenever the shed falls quiet.',
    items: [
      {
        title: 'A week of spring tides',
        body: 'What the yard looked like at its lowest, and why two hulls came out a fortnight early.',
        image: shot('log-1', 800, 600),
      },
      {
        title: 'The Novara returns',
        body: 'Three seasons away and back in the same berth, with a new mainsheet and a story about the weather.',
        image: shot('log-2', 800, 600),
      },
      {
        title: 'Where rope comes from',
        body: 'An afternoon at the bench tracing a coil back to the strand it was laid from.',
        image: shot('log-3', 800, 600),
      },
    ],
  },
  {
    id: 'signal',
    eyebrow: 'Signal',
    heading: 'Three ways to reach the office',
    body: 'The office sits at the head of the hard, above the loft. Walk in, write, or telephone — all three are read by the same two people.',
    items: [
      {
        title: 'The desk',
        body: 'The office, head of the hard, above the loft — open from 07:30.',
      },
      { title: 'By post', body: 'office@halyard.example — answered within a day.' },
      {
        title: 'By telephone',
        body: 'Answered while the shed is open, from 07:30 until the last hull is covered.',
      },
    ],
  },
]
