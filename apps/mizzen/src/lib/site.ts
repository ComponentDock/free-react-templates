/**
 * Every destination and every line of copy the Mizzen page renders, plus the single model the
 * chrome is built from: the four channel circles on the fluid chrome row, one list of five rows —
 * the destination the page is on, the rigging row whose menu holds four more, and three plain
 * rows — and the blocks below that materialise every one of those destinations. The same model is
 * handed to whichever presentation the width calls for, so the wide bar and the folding panel can
 * never drift apart from each other.
 */

export const SITE_NAME = 'Mizzen'

/** The wordmark's second line, under the name. */
export const SITE_TAGLINE = 'Sail loft'

export const PAGE_TITLE = 'Mizzen — Fluid Social Chrome Menu Template'

/** The band's own heading, above the chrome row. */
export const BAND_HEADING_ID = 'mizzen-band-heading'

export const BAND_HEADING = 'The aftermost spar'

export const FOOTER_NOTE = 'Circles at the left, a red pill at the right, one dark bar below.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the bar's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Sections'

/**
 * The word the toggler shows next to its bars glyph. The design's own word is never reused — this
 * app names the control in its own vocabulary, like every other string on the page.
 */
export const TOGGLER_LABEL = 'Browse'

/** The bar's own list, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'mizzen-nav'

/** The folding panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'mizzen-panel'

/** The toggler's id. */
export const TOGGLER_ID = 'mizzen-toggler'

/** The label the chrome row's own row of circles carries. */
export const SOCIAL_LABEL = 'Channels'

/** The search field: what it asks for, what it is called, and what its button does. */
export const SEARCH_ID = 'mizzen-search'
export const SEARCH_LABEL = 'Find a fitting'
export const SEARCH_PLACEHOLDER = 'Find a fitting'
export const SEARCH_BUTTON_LABEL = 'Show matching blocks'
export const FILTER_RESET_LABEL = 'Show every block'
export const FILTER_EMPTY = 'No block on this page carries that word.'

/** The rigging row's trigger and the menu it opens, once for the bar and once for the panel. */
export const MENU_LABEL = 'Rigging'

/** The block the rigging menu belongs to, and the ids both presentations hang off it. */
export const MENU_HREF = '#rigging'
export const MENU_NAV_LABEL = 'Rigging sections'
export const MENU_TRIGGER_ID = 'mizzen-rigging'
export const MENU_ID = 'mizzen-rigging-menu'
export const MENU_TRIGGER_PANEL_ID = 'mizzen-rigging-panel'
export const MENU_ID_PANEL = 'mizzen-rigging-menu-panel'

/**
 * How many rows stand above the rigging row: exactly one, the destination the page is on. The
 * design puts its menu row second of five, and both presentations splice it in from here.
 */
export const MENU_AFTER_ROW = 0

/**
 * How far a target is kept clear when it is scrolled to, in px: the chrome row's own 78.4px plus
 * the bar's 67.8px, with a little air. Neither is ever pinned, so this only ever buys the design's
 * own breathing room.
 */
export const HEADER_OFFSET = 160

/** Where the skip link lands: the destination the page itself is on. */
export const SKIP_TARGET = '#berth'

/** A deterministic placeholder for one picture inside a block. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/mizzen-${seed}/${width}/${height}`
}

export interface NavItem {
  label: string
  href: string
  /** The destination already open: carried as `aria-current` and painted in the accent red. */
  current: boolean
}

/**
 * The rows the bar and the panel both walk, in the design's order: the destination the page is
 * on, then the three plain ones. The rigging row is spliced in after the first of them, so the
 * five rows always come out in the design's own order.
 */
export const NAV: NavItem[] = [
  { label: 'Berth', href: '#berth', current: true },
  { label: 'Spars', href: '#spars', current: false },
  { label: 'Canvas', href: '#canvas', current: false },
  { label: 'Tide tables', href: '#tide-tables', current: false },
]

export interface MenuItem {
  label: string
  href: string
}

/**
 * The four destinations behind the rigging row, in the design's order. Each one is its own card
 * inside the rigging block below, so not one of them is a dead anchor.
 */
export const MENU: MenuItem[] = [
  { label: 'Standing rigging', href: '#standing-rigging' },
  { label: 'Running rigging', href: '#running-rigging' },
  { label: 'Fittings', href: '#fittings' },
  { label: 'Rig tuning', href: '#rig-tuning' },
]

export type ChannelName = 'facebook' | 'x' | 'instagram' | 'dribbble'

export interface Channel {
  name: ChannelName
  label: string
  href: string
}

/**
 * The chrome row's four circles, in the design's order. The design ships them blank — no icon font
 * ever loads, so its own circles render as empty rings — and each one points at its own card in
 * the channels block below rather than at a dead anchor.
 */
export const CHANNELS: Channel[] = [
  { name: 'facebook', label: 'Facebook', href: '#channel-facebook' },
  { name: 'x', label: 'X', href: '#channel-x' },
  { name: 'instagram', label: 'Instagram', href: '#channel-instagram' },
  { name: 'dribbble', label: 'Dribbble', href: '#channel-dribbble' },
]

/** Every in-page destination the bar's own rows declare, in the order they show them. */
export function rowDestinations(): string[] {
  return NAV.map((item) => item.href)
}

/** Every in-page destination the rigging menu declares, in the order it shows them. */
export function menuDestinations(): string[] {
  return MENU.map((item) => item.href)
}

/** Every in-page destination the chrome's circles declare, in the order it shows them. */
export function channelDestinations(): string[] {
  return CHANNELS.map((item) => item.href)
}

/** Every in-page destination the whole chrome declares, chrome-internal ones first. */
export function inPageDestinations(): string[] {
  return [
    SKIP_TARGET,
    ...channelDestinations(),
    ...rowDestinations(),
    ...menuDestinations(),
  ]
}

interface SectionItem {
  title: string
  body: string
  /** A card that is also a picture, where the block is a grid of things. */
  image?: string
  /** A card something else points at, where the block is the list behind a link. */
  id?: string
}

export interface Section {
  id: string
  eyebrow: string
  heading: string
  body: string
  /** The block's cards, each with its own picture and its own anchor where it needs them. */
  items: SectionItem[]
}

/**
 * Every destination the chrome declares, materialised so that not one row, not one menu item and
 * not one circle is a dead link: the berth the page is on, the rigging block whose four cards are
 * what the menu opens, the spars, the canvas, the tide tables, and the channels the four circles
 * open. The design stops at its bar — it ships no content at all — so these blocks are the app's
 * own.
 */
export const SECTIONS: Section[] = [
  {
    id: 'berth',
    eyebrow: 'Berth',
    heading: 'The berth the boat lies in',
    body: 'A berth is chosen for shelter first and depth second, and every line ashore is led from it. Everything the loft measures this season is measured from this one.',
    items: [
      {
        title: 'Shelter before depth',
        body: 'A berth that lies quiet through a northerly is worth more than one that is five minutes closer.',
        image: shot('berth-1', 800, 600),
      },
      {
        title: 'Four lines, no springs',
        body: 'Two forward and two aft, each led long, so the boat rides a rise without the warps coming taut.',
      },
      {
        title: 'Checked at every tide',
        body: 'A berth is re-read at the top and the bottom of the water before it is trusted for a season.',
        image: shot('berth-2', 800, 600),
      },
    ],
  },
  {
    id: 'rigging',
    eyebrow: 'Rigging',
    heading: 'Standing and running, cut on one bench',
    body: 'Everything between the spar and the deck is measured, cut and swaged here: the wire that carries the mast, the rope that trims the sails, and the fittings both of them end on. The four cards below are what the rigging row in the bar opens.',
    items: [
      {
        id: 'standing-rigging',
        title: 'Standing rigging',
        body: 'Shrouds, stays and the terminals they land in, cut to the spar’s own rake so nothing has to be re-tensioned twice.',
        image: shot('rigging-1', 800, 600),
      },
      {
        id: 'running-rigging',
        title: 'Running rigging',
        body: 'Halyards, sheets and the tails they are spliced to, in a rope chosen for the hand that will hold it.',
      },
      {
        id: 'fittings',
        title: 'Fittings',
        body: 'Blocks, cleats, turnbuckles and shackles, matched to the load the line carries rather than to the size of the line.',
        image: shot('rigging-2', 800, 600),
      },
      {
        id: 'rig-tuning',
        title: 'Rig tuning',
        body: 'A season’s tension read back off the spar, with every turn recorded so the next tune starts from the same numbers.',
      },
    ],
  },
  {
    id: 'spars',
    eyebrow: 'Spars',
    heading: 'The spars the rig hangs from',
    body: 'Masts, booms and the mizzen that gives this loft its name, laid out end to end and checked for straightness before anything is cut against them.',
    items: [
      {
        title: 'Laid straight, then drawn',
        body: 'A spar is levelled on trestles and its curve recorded before a single measurement is taken from it.',
        image: shot('spars-1', 800, 600),
      },
      {
        title: 'Tapered by hand',
        body: 'The taper is planed back by eye and stopped where the spar’s own load stops needing it.',
      },
      {
        title: 'Varnished in the loft',
        body: 'Six coats, rubbed between each, so a spar comes out of the door ready to step.',
      },
    ],
  },
  {
    id: 'canvas',
    eyebrow: 'Canvas',
    heading: 'Sails cut for the wind they will meet',
    body: 'Cloth is laid out on the loft floor, marked, cut and seamed, and every sail leaves with the wind range it was drawn for written on its bag.',
    items: [
      {
        title: 'Drawn flat, then shaped',
        body: 'Each panel is cut flat and given its shape at the seam, so the sail keeps its draft as the wind builds.',
      },
      {
        title: 'Reefed in threes',
        body: 'Three reefs, laid where the boat balances rather than where the cloth divides most easily.',
        image: shot('canvas-1', 800, 600),
      },
      {
        title: 'Bagged with its numbers',
        body: 'Every sail goes into its own bag with its wind range and the date it was cut.',
      },
    ],
  },
  {
    id: 'tide-tables',
    eyebrow: 'Tide tables',
    heading: 'What the water is doing this week',
    body: 'The tables the berths are read against: highs, lows and the slack between them, printed from the same tables the loft measures its own deliveries by.',
    items: [
      {
        title: 'Printed every week',
        body: 'A printed sheet is pinned by the door, so the water is read before the phone is answered.',
      },
      {
        title: 'Slack written in',
        body: 'The slack before each turn is marked on the sheet — that is when anything heavy goes aboard.',
        image: shot('tide-tables-1', 800, 600),
      },
      {
        title: 'Read against the berths',
        body: 'Any berth on this page can be checked against the week’s water in one pass.',
      },
    ],
  },
  {
    id: 'channels',
    eyebrow: 'Channels',
    heading: 'Where the loft posts',
    body: 'Four channels, one card each — the four circles on the chrome row open the cards below.',
    items: [
      {
        id: 'channel-facebook',
        title: 'Facebook',
        body: 'Finished spars and the sails that went out with them, posted as they leave the loft.',
      },
      {
        id: 'channel-x',
        title: 'X',
        body: 'Short notes when a spar is stepped or a season’s tuning window opens.',
      },
      {
        id: 'channel-instagram',
        title: 'Instagram',
        body: 'The loft floor itself: cloth, wire and the odd badly lit harbour.',
        image: shot('channels-1', 800, 600),
      },
      {
        id: 'channel-dribbble',
        title: 'Dribbble',
        body: 'Drawn details — every fitting the bench has turned, sketched as it was made.',
      },
    ],
  },
]
