/**
 * Every destination and every line of copy the Capstan page renders, plus the single model
 * the chrome is built from: one list of six rows — one of them a disclosure over four more
 * destinations. The same list is handed to whichever presentation the width calls for, so
 * the wide strip and the collapsing panel can never drift apart from each other.
 */

export const SITE_NAME = 'Capstan'

export const PAGE_TITLE = 'Capstan — Minimal Navigation Bar Template'

/** The band's own heading, above the strip. */
export const BAND_HEADING_ID = 'capstan-band-heading'

export const BAND_HEADING = 'Line, load and drum'

export const FOOTER_NOTE = 'A quiet white strip, one teal underline, and a find field at its end.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the strip's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the collapsing panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Sections'

/** The word the toggler shows next to its glyph. */
export const TOGGLER_LABEL = 'Browse'

/** The strip's list, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'capstan-nav'

/** The collapsing panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'capstan-panel'

/** The panel's list id. */
export const PANEL_NAV_ID = 'capstan-panel-nav'

/** The toggler's id, so the panel it opens can be labelled by it. */
export const TOGGLER_ID = 'capstan-toggler'

/** The find field's id, which is what its label points at. */
export const SEARCH_ID = 'capstan-find'

/** The find field's own label — the design ships a bare prompt and no label at all. */
export const SEARCH_LABEL = 'Find a fitting, a chart or a length of line'

/** The name the field's landmark carries, distinct from the label the input wears. */
export const SEARCH_FORM_LABEL = 'Find something at the counter'

/** The field's resting prompt, in the same ink as the text a visitor types. */
export const SEARCH_PLACEHOLDER = 'Find a fitting, a chart or a length of line'

/** The name the magnifier button carries, and the verb on the status line. */
export const SEARCH_ACTION = 'Find it'

/** What the status line says when a visitor submits an empty field. */
export const SEARCH_EMPTY = 'Type what you are after and the counter will hold it behind the desk.'

/**
 * How far a target is kept clear of the strip when it is scrolled to, in px: the strip's
 * own height (63.8px above 992px, 68px below) plus a little air, because the strip sits in
 * the flow and is never pinned.
 */
export const HEADER_OFFSET = 80

/** A deterministic placeholder for one picture inside a section. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/capstan-${seed}/${width}/${height}`
}

/** A row of the one disclosure the strip carries. */
interface NavChild {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  /** The destination already open: carried as `aria-current` and marked in the row. */
  current: boolean
  /** The rows this row discloses; every other row carries an empty list. */
  children: NavChild[]
}

/**
 * The six rows the strip renders, in the design's order: the destination already open, the
 * one disclosure, and four plain destinations. The disclosure's four rows are the yard's
 * own trades.
 */
export const NAV: NavItem[] = [
  { label: 'Berth', href: '#berth', current: true, children: [] },
  {
    label: 'Rigging',
    href: '#rigging',
    current: false,
    children: [
      { label: 'Cordage', href: '#cordage' },
      { label: 'Blocks', href: '#blocks' },
      { label: 'Fittings', href: '#fittings' },
      { label: 'Winches', href: '#winches' },
    ],
  },
  { label: 'Charts', href: '#charts', current: false, children: [] },
  { label: 'Yard', href: '#yard', current: false, children: [] },
  { label: 'Log', href: '#log', current: false, children: [] },
  { label: 'Signal', href: '#signal', current: false, children: [] },
]

/** Every destination the chrome declares, the disclosure's own rows included. */
export function allDestinations(): string[] {
  return NAV.flatMap((item) => [item.href, ...item.children.map((child) => child.href)])
}

interface SectionItem {
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
  /** The section's rows, each with its own picture where the section is a grid. */
  items: SectionItem[]
}

/**
 * The ten destinations the chrome declares, every one of them materialised so no row is a
 * dead link: the berth itself, the four rigging trades behind the disclosure, and the four
 * plain rows.
 */
export const SECTIONS: Section[] = [
  {
    id: 'berth',
    eyebrow: 'Berth',
    heading: 'Where the line comes ashore',
    body: 'A working berth on the harbour wall: the drum, the line and the fittings that hold a hull where the tide leaves it. Everything on the strip above starts here.',
    items: [
      {
        title: 'Open before the water',
        body: 'The wall is open half an hour before the first of the tide and shuts when the last line is made fast.',
        image: shot('berth-1', 800, 600),
      },
      {
        title: 'One ledger, kept by hand',
        body: 'Hull, length and order written into the same book through nine seasons of fittings.',
      },
      {
        title: 'What the board carries',
        body: 'Weather, wall repairs and anything the master wants read before Friday.',
        image: shot('berth-2', 800, 600),
      },
    ],
  },
  {
    id: 'rigging',
    eyebrow: 'Rigging',
    heading: 'Four trades in one job',
    body: 'Standing and running gear is four trades at once: the line, the blocks it runs through, the fittings that hold both, and the drum that winds it. They are kept apart here so a hull can be fitted out one part at a time.',
    items: [
      {
        title: 'Chosen by load',
        body: 'Every part is picked against the load it carries, not against its size on a shelf.',
      },
      {
        title: 'Fitted on the wall',
        body: 'Two of us come out to the berth for anything that wants a second pair of hands.',
      },
      {
        title: 'The short list',
        body: 'What is out of stock is written up with the day it lands.',
        image: shot('rigging-1', 800, 600),
      },
    ],
  },
  {
    id: 'cordage',
    eyebrow: 'Rigging · One',
    heading: 'Line by the metre',
    body: 'Three-ply and eight-plaited line in the diameters a harbour wall actually uses, kept on the floor and cut to the length you ask for rather than a coil.',
    items: [
      {
        title: 'Mooring line',
        body: 'Eight-plaited, cut to the berth rather than the coil it arrived in.',
        image: shot('cordage-1', 800, 600),
      },
      {
        title: 'Sheet and halyard',
        body: 'Low-stretch line for hulls that go out on a Tuesday evening.',
      },
      {
        title: 'Twine and whipping',
        body: 'Waxed twine, needles and a bench you are welcome to use.',
      },
    ],
  },
  {
    id: 'blocks',
    eyebrow: 'Rigging · Two',
    heading: 'Blocks and the sheaves inside them',
    body: 'Wood, steel and composite shells with the sheave matched to the line that runs through them, so nothing in the train carries more strain than it has to.',
    items: [
      {
        title: 'Single and double',
        body: 'Plain shells in the sizes that come back season after season.',
      },
      {
        title: 'Sheaves to match',
        body: 'A sheave is picked against the line, not against the block it sits in.',
      },
      {
        title: 'Cam and jam',
        body: 'For the line that has to be held one-handed.',
        image: shot('blocks-1', 800, 600),
      },
    ],
  },
  {
    id: 'fittings',
    eyebrow: 'Rigging · Three',
    heading: 'Fittings that take the load',
    body: 'Shackles, cleats, pins, plates and turnbuckles — the plain sorts, in the sizes a working hull wears out.',
    items: [
      {
        title: 'Shackles and pins',
        body: 'Stainless, galvanised, and the odd second-hand one that is still sound.',
      },
      {
        title: 'Cleats and plates',
        body: 'Through-bolted fittings with the backing plates to match.',
      },
      {
        title: 'Turnbuckles',
        body: 'For gear that has moved a little every spring.',
        image: shot('fittings-1', 800, 600),
      },
    ],
  },
  {
    id: 'winches',
    eyebrow: 'Rigging · Four',
    heading: 'Winches, drums and pawls',
    body: 'The drum the whole wall is named after: two or three turns, a pawl that catches, and the load lands where it was meant to. Servicing is done on the berth.',
    items: [
      {
        title: 'Two-speed drums',
        body: 'Small and mid-size drums with a pawl you can hear catch.',
      },
      { title: 'Servicing', body: 'Stripped, washed and greased through the winter.' },
      {
        title: 'Handles and pockets',
        body: 'Handles that float, and the pocket to keep one in.',
        image: shot('winches-1', 800, 600),
      },
    ],
  },
  {
    id: 'charts',
    eyebrow: 'Charts',
    heading: 'The soundings off the wall',
    body: 'Local sheets, corrections filed as the notices come in, and the pilot books for the coast either side.',
    items: [
      {
        title: 'Sheets of the harbour',
        body: 'Paper sheets corrected by hand from the folder by the door.',
        image: shot('charts-1', 800, 600),
      },
      { title: 'Pilot books', body: 'The two coasts and the channel between them.' },
      {
        title: 'Tide tables',
        body: 'The tables the wall works to, and the almanac for further out.',
      },
    ],
  },
  {
    id: 'yard',
    eyebrow: 'Yard',
    heading: 'The shed behind the counter',
    body: 'Timber, paint and the small jobs that get put off every spring, done by two people who have been on this wall long enough to know what a hull needs.',
    items: [
      { title: 'Paint and varnish', body: 'Mixed to the colours the yard has used for years.' },
      { title: 'Antifouling', body: 'For a season on the wall, with the roller to put it on.' },
      {
        title: 'Small jobs',
        body: 'The list that gets put off every spring, taken one order at a time.',
        image: shot('yard-1', 800, 600),
      },
    ],
  },
  {
    id: 'log',
    eyebrow: 'Log',
    heading: 'What the season did',
    body: 'What actually changed on the wall this year: a new line of fittings, a berth added, and the jobs we did on the shed itself.',
    items: [
      {
        title: 'One entry a season',
        body: 'Written when the yard settles rather than when a date says so.',
      },
      {
        title: 'What moved this year',
        body: 'The counter moved, two berths were renumbered, and a door finally shuts.',
        image: shot('log-1', 800, 600),
      },
    ],
  },
  {
    id: 'signal',
    eyebrow: 'Signal',
    heading: 'How to reach the wall',
    body: 'Flags, a radio left on, and a phone that two people answer between the tide and the kettle.',
    items: [
      {
        title: 'Radio on the wall',
        body: 'The channel the harbour keeps, listened to through the day.',
      },
      {
        title: 'Letters by mail',
        body: 'Anything that needs paper waits behind the counter with a name on it.',
      },
    ],
  },
]
