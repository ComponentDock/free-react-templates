/**
 * Every destination and every line of copy the Binnacle page renders, plus the single model the
 * chrome is built from: one list of five rows — the destination the page is on, the workshop row
 * whose menu holds four more, and three plain rows — and the four channel tiles on the strip. The
 * same model is handed to whichever presentation the width calls for, so the wide bar and the
 * folding panel can never drift apart from each other.
 */

export const SITE_NAME = 'Binnacle'

/** The wordmark's second line, under the name. */
export const SITE_TAGLINE = 'Compass works'

export const PAGE_TITLE = 'Binnacle — Utility Strip Navbar Template'

/** The band's own heading, above the strip. */
export const BAND_HEADING_ID = 'binnacle-band-heading'

export const BAND_HEADING = 'Around the compass'

export const FOOTER_NOTE = 'One dark strip, one white bar and five rows that fill with gold.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the bar's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Sections'

/** The word the toggler shows next to its glyph: short enough to hold the wrapped narrow line. */
export const TOGGLER_LABEL = 'Nav'

/** The bar's own list, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'binnacle-nav'

/** The folding panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'binnacle-panel'

/** The toggler's id, so the panel it opens can be labelled by it. */
export const TOGGLER_ID = 'binnacle-toggler'

/** The strip's phone link: its own accessible name, its own number, and the block it lands on. */
export const PHONE_LABEL = 'Call the bench'
export const PHONE_NUMBER = '+1 (555) 0166'
export const PHONE_HREF = '#reach'

/** The label the strip's row of tiles carries. */
export const CHANNELS_LABEL = 'Channels'

/**
 * How far a target is kept clear when it is scrolled to, in px: the strip's own 34px plus the
 * bar's 83.8px plus a little air. The chrome is in the flow and is never pinned, so this only
 * ever buys the design's own breathing room.
 */
export const HEADER_OFFSET = 122

/** Where the skip link lands: the destination the page itself is on. */
export const SKIP_TARGET = '#helm'

/** The search field: what it asks for, what it is called, and what its button does. */
export const SEARCH_ID = 'binnacle-search'
export const SEARCH_LABEL = 'Find a part'
export const SEARCH_PLACEHOLDER = 'Find a part'
export const SEARCH_BUTTON_LABEL = 'Show matching blocks'
export const FILTER_RESET_LABEL = 'Show every block'
export const FILTER_EMPTY = 'No block on this page carries that word.'

/** The workshop row's trigger and the menu it opens, once for the bar and once for the panel. */
export const MENU_LABEL = 'Workshop'

/** The block the workshop menu belongs to: where the panel's own static row points. */
export const MENU_HREF = '#workshop'
export const MENU_NAV_LABEL = 'Workshop pages'
export const MENU_TRIGGER_ID = 'binnacle-workshop'
export const MENU_ID = 'binnacle-workshop-menu'
export const MENU_TRIGGER_PANEL_ID = 'binnacle-workshop-panel'
export const MENU_ID_PANEL = 'binnacle-workshop-menu-panel'

/**
 * How many rows stand above the workshop row: exactly one, the destination the page is on. The
 * design puts its menu row second of five, and both presentations splice it in from here.
 */
export const MENU_AFTER_ROW = 0

/** A deterministic placeholder for one picture inside a block. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/binnacle-${seed}/${width}/${height}`
}

export interface NavItem {
  label: string
  href: string
  /** The destination already open: carried as `aria-current` and wiped with the gold slab. */
  current: boolean
}

/**
 * The rows the bar and the panel both walk, in the design's order: the destination the page is
 * on, then the three plain ones. The workshop row is spliced in after the first of them, so the
 * five rows always come out in the design's own order.
 */
export const NAV: NavItem[] = [
  { label: 'Helm', href: '#helm', current: true },
  { label: 'Charts', href: '#charts', current: false },
  { label: 'Sextants', href: '#sextants', current: false },
  { label: 'Logbook', href: '#logbook', current: false },
]

export interface MenuItem {
  label: string
  href: string
}

/**
 * The four destinations behind the workshop row, in the design's order. Each one is its own card
 * inside the workshop block below, so not one of them is a dead anchor.
 */
export const MENU: MenuItem[] = [
  { label: 'The bench', href: '#bench' },
  { label: 'Parts store', href: '#parts' },
  { label: 'Service notes', href: '#service' },
  { label: 'Book a visit', href: '#visit' },
]

export type ChannelName = 'facebook' | 'x' | 'instagram' | 'youtube'

export interface Channel {
  name: ChannelName
  label: string
  href: string
}

/**
 * The strip's four tiles, in the design's order. The design ships them blank — no icon font ever
 * loads, so its own squares render empty — and each one points at its own card in the channels
 * block below rather than at a dead anchor.
 */
export const CHANNELS: Channel[] = [
  { name: 'facebook', label: 'Facebook', href: '#channel-facebook' },
  { name: 'x', label: 'X', href: '#channel-x' },
  { name: 'instagram', label: 'Instagram', href: '#channel-instagram' },
  { name: 'youtube', label: 'YouTube', href: '#channel-youtube' },
]

/** Every in-page destination the bar's own rows declare, in the order they show them. */
export function rowDestinations(): string[] {
  return NAV.map((item) => item.href)
}

/** Every in-page destination the workshop menu declares, in the order it shows them. */
export function menuDestinations(): string[] {
  return MENU.map((item) => item.href)
}

/** Every in-page destination the strip's tiles declare, in the order it shows them. */
export function channelDestinations(): string[] {
  return CHANNELS.map((item) => item.href)
}

/** Every in-page destination the whole chrome declares, chrome-internal ones first. */
export function inPageDestinations(): string[] {
  return [
    SKIP_TARGET,
    PHONE_HREF,
    ...rowDestinations(),
    ...menuDestinations(),
    ...channelDestinations(),
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
 * Every destination the chrome declares, materialised so that not one row, not one menu item, not
 * one tile and not the phone link is a dead link: the helm the page is on, the workshop whose
 * four cards are what the menu opens, the charts, the sextants, the log the page is written in,
 * the bench the phone rings, and the channels the tiles open. The design stops at its bar — it
 * ships no content at all — so these blocks are the app's own.
 */
export const SECTIONS: Section[] = [
  {
    id: 'helm',
    eyebrow: 'Helm',
    heading: 'The stand the compass sits in',
    body: 'The housing takes the compass and its rings, and the base is weighted so the whole stand lifts off in one hand. Everything else on this page is sized from it.',
    items: [
      {
        title: 'Housed, never bolted',
        body: 'The stand sits on its own base, so a compass comes out for its service without opening the deck.',
        image: shot('helm-1', 800, 600),
      },
      {
        title: 'Level in any sea',
        body: 'Two rings and a pivot let the card swing free of the boat it is fitted to.',
      },
      {
        title: 'Read at arm’s length',
        body: 'The glass sits low in the housing, so the card stays legible from the wheel without leaning in.',
        image: shot('helm-2', 800, 600),
      },
    ],
  },
  {
    id: 'workshop',
    eyebrow: 'Workshop',
    heading: 'Where the housings are built',
    body: 'One bench, one lathe and a rack of gimbal rings. The four cards below are what the workshop row in the bar opens.',
    items: [
      {
        id: 'bench',
        title: 'The bench',
        body: 'Every stand is turned on the same lathe, so a ring from this season fits a housing from any other.',
        image: shot('workshop-1', 800, 600),
      },
      {
        id: 'parts',
        title: 'Parts store',
        body: 'Rings, pivots, damping fluid and spare glass, kept in pairs so a rebuild never waits on a delivery.',
      },
      {
        id: 'service',
        title: 'Service notes',
        body: 'Every stand that leaves the bench gets a note of what was set, so a second visit starts from the same numbers.',
        image: shot('workshop-2', 800, 600),
      },
      {
        id: 'visit',
        title: 'Book a visit',
        body: 'The shop takes one fitting a morning, so a stand is never rushed between other work.',
      },
    ],
  },
  {
    id: 'charts',
    eyebrow: 'Charts',
    heading: 'Charts for the table they sit on',
    body: 'Folded paper for the chart table, printed from the same surveys the wheel uses, and kept in a lid that keeps them dry.',
    items: [
      {
        title: 'Folded to the rail',
        body: 'Cut and folded so the last fold lands on the rail the chart is read from.',
        image: shot('charts-1', 800, 600),
      },
      {
        title: 'Marked in soft pencil',
        body: 'Every position is pencilled, so a chart outlives the passage it recorded.',
      },
      {
        title: 'Kept under the lid',
        body: 'A flat lid with a rubber seal keeps a season’s worth of paper dry.',
      },
    ],
  },
  {
    id: 'sextants',
    eyebrow: 'Sextants',
    heading: 'Sights taken from the deck',
    body: 'Arcs, mirrors and shades, adjusted on the bench and checked against the horizon they were built for.',
    items: [
      {
        title: 'Arcs and mirrors',
        body: 'The arc is read from the mirror, so the horizon and the body are found in one eye.',
      },
      {
        title: 'Shades for any sun',
        body: 'Four shades a side, so a sight is taken at noon as easily as at dusk.',
        image: shot('sextants-1', 800, 600),
      },
      {
        title: 'Boxed, never bagged',
        body: 'Every sextant leaves in a wooden box with its own adjustment key.',
      },
    ],
  },
  {
    id: 'logbook',
    eyebrow: 'Logbook',
    heading: 'What the log keeps',
    body: 'One page a day: the course, the weather, the sights taken and the fittings replaced along the way.',
    items: [
      {
        title: 'Every fitting written up',
        body: 'A stand that goes aboard is written into the log with its own number.',
      },
      {
        title: 'Two columns, one spread',
        body: 'Remarks on the left, this ship’s own numbers on the right, so a day reads in one pass.',
        image: shot('logbook-1', 800, 600),
      },
      {
        title: 'Kept for as long as the boat',
        body: 'The log leaves the bench with the fitting and is asked for at every service.',
      },
    ],
  },
  {
    id: 'reach',
    eyebrow: 'Reach us',
    heading: 'Ring the bench',
    body: 'The number on every page’s strip rings the bench directly. The second ring is picked up by whoever is at the lathe, and most fittings are sized over the phone.',
    items: [
      {
        title: 'The number on the strip',
        body: 'One number, at the top of every page, answered between the first fitting of the day and the last.',
      },
      {
        title: 'Sized over the phone',
        body: 'Bring the compass model and the width of the deck it is going on and the housing is picked there and then.',
        image: shot('reach-1', 800, 600),
      },
    ],
  },
  {
    id: 'channels',
    eyebrow: 'Channels',
    heading: 'Where the shop posts',
    body: 'Four channels, one card each — the four squares on the strip open the cards below.',
    items: [
      {
        id: 'channel-facebook',
        title: 'Facebook',
        body: 'Finished benches and the fittings that leave them, posted as they are boxed.',
      },
      {
        id: 'channel-x',
        title: 'X',
        body: 'Short notes when a batch of rings lands or a service window opens.',
      },
      {
        id: 'channel-instagram',
        title: 'Instagram',
        body: 'The bench itself: rings, glass and the odd badly lit hull.',
        image: shot('channels-1', 800, 600),
      },
      {
        id: 'channel-youtube',
        title: 'YouTube',
        body: 'Two-minute teardowns of a stand that came back for service.',
      },
    ],
  },
]
