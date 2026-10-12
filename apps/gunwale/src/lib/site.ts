/**
 * Every destination and every line of copy the Gunwale page renders, plus the two models
 * the chrome is built from: one list of five rows — and the four rows of its one
 * disclosure — and one list of four channels. Both are handed to whichever presentation
 * the width calls for, so the wide bar, the collapsing panel and the brand strip can
 * never drift apart from each other.
 */

export const SITE_NAME = 'Gunwale'

export const PAGE_TITLE = 'Gunwale — Brand Strip Navigation Template'

/** The band's own heading, above the brand strip. */
export const BAND_HEADING_ID = 'gunwale-band-heading'

export const BAND_HEADING = 'Rope, charts and the week of weather'

/** The wordmark's two lines: the shop's name over the word for what it sells. */
export const WORDMARK_NAME = 'Gunwale'

export const WORDMARK_TRADE = 'Chandlery'

export const FOOTER_NOTE = 'A brand strip riding on a dark bar, with a find field at its end.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the bar's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the collapsing panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Sections'

/** The word the toggler shows next to its glyph. */
export const TOGGLER_LABEL = 'Sections'

/** The label the strip's row of channels carries. */
export const SOCIAL_LABEL = 'Our channels'

/** The bar's list, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'gunwale-nav'

/** The collapsing panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'gunwale-panel'

/** The panel's list id. */
export const PANEL_NAV_ID = 'gunwale-panel-nav'

/** The toggler's id, so the panel it opens can be labelled by it. */
export const TOGGLER_ID = 'gunwale-toggler'

/** The search field's id, which is what its label points at. */
export const SEARCH_ID = 'gunwale-find'

/** The search field's own label — the design ships a bare placeholder and no label. */
export const SEARCH_LABEL = 'Find a chart, rope or fitting'

/** The name the field's landmark carries, distinct from the label the input wears. */
export const SEARCH_FORM_LABEL = 'Find a part in the shop'

/** The field's resting prompt, in the same ink as the text a visitor types. */
export const SEARCH_PLACEHOLDER = 'Find a chart, rope or fitting'

/** The name the magnifier button carries, and the verb on the status line. */
export const SEARCH_ACTION = 'Look up'

/** What the status line says when a visitor submits an empty field. */
export const SEARCH_EMPTY = 'Type what you are after and the counter will call you back.'

/**
 * How far a target is kept clear of the bar when it is scrolled to, in px: the bar's own
 * height (67.8px above 992px, 66px below) plus a little air, because the bar sits in the
 * flow and is never pinned.
 */
export const HEADER_OFFSET = 80

/** The four marks a channel circle can wear. */
export type ChannelMark = 'chatter' | 'frames' | 'broadcast' | 'bulletins'

/** A deterministic placeholder for one picture inside a section. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/gunwale-${seed}/${width}/${height}`
}

/** A row of the one disclosure the bar carries. */
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
 * The five rows the bar renders, in the design's order: the destination already open, the
 * one disclosure, and three plain destinations. The disclosure's four rows are the shop's
 * own aisles.
 */
export const NAV: NavItem[] = [
  { label: 'Harbour', href: '#harbour', current: true, children: [] },
  {
    label: 'Chandlery',
    href: '#chandlery',
    current: false,
    children: [
      { label: 'Rope & twine', href: '#rope' },
      { label: 'Fittings', href: '#fittings' },
      { label: 'Paints', href: '#paints' },
      { label: 'Charts', href: '#charts' },
    ],
  },
  { label: 'Moorings', href: '#moorings', current: false, children: [] },
  { label: 'Forecast', href: '#forecast', current: false, children: [] },
  { label: 'Counter', href: '#counter', current: false, children: [] },
]

/** One of the four circles on the brand strip, and the block behind it. */
export interface Channel {
  label: string
  href: string
  mark: ChannelMark
}

/**
 * The four channel circles, left to right. The design's four are dead `href="#"` anchors
 * whose glyphs never even paint (no icon font is loaded), so each one here is a real
 * destination with an icon that renders.
 */
export const CHANNELS: Channel[] = [
  { label: 'Chatter', href: '#chatter', mark: 'chatter' },
  { label: 'Frames', href: '#frames', mark: 'frames' },
  { label: 'Broadcast', href: '#broadcast', mark: 'broadcast' },
  { label: 'Bulletins', href: '#bulletins', mark: 'bulletins' },
]

/** Every destination the chrome declares, the disclosure's own rows included. */
export function allDestinations(): string[] {
  return [
    ...NAV.flatMap((item) => [item.href, ...item.children.map((child) => child.href)]),
    ...CHANNELS.map((channel) => channel.href),
  ]
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
 * The thirteen destinations the chrome declares, every one of them materialised so no row
 * and no circle is a dead link: the harbour itself, the shop and its four aisles, the
 * wall's moorings, the week's weather, the counter, and the four channels behind the
 * circles.
 */
export const SECTIONS: Section[] = [
  {
    id: 'harbour',
    eyebrow: 'Harbour',
    heading: 'A counter over the north wall',
    body: 'A working chandlery on the harbour wall: rope, fittings, paint and charts for whoever is out on the water this week. Everything on the bar above starts here.',
    items: [
      {
        title: 'Open with the water',
        body: 'The shop opens half an hour before the first tide and shuts when the last line is taken.',
        image: shot('harbour-1', 800, 600),
      },
      {
        title: 'One ledger, kept by hand',
        body: 'Order, hull and length written in the same book through nine seasons of fittings.',
      },
      {
        title: 'What waits on the board',
        body: 'Weather, wall repairs and anything the harbour master wants read before Friday.',
        image: shot('harbour-2', 800, 600),
      },
    ],
  },
  {
    id: 'chandlery',
    eyebrow: 'Chandlery',
    heading: 'Four aisles in one small shop',
    body: 'The whole shop fits in a room you can cross in a dozen steps, and it is arranged so that nothing on a boat has to be looked for twice.',
    items: [
      { title: 'Cut to length', body: 'Rope is measured on the floor and cut where you can watch it.' },
      { title: 'Weighed on the counter', body: 'Fittings are weighed and priced as they are handed over.' },
      {
        title: 'The board by the door',
        body: 'Everything that is short in the shop is written up there, with the day it lands.',
        image: shot('chandlery-1', 800, 600),
      },
    ],
  },
  {
    id: 'rope',
    eyebrow: 'Chandlery · Aisle one',
    heading: 'Rope and twine by the metre',
    body: 'Three-ply and eight-plaited line in the sizes a wall of moorings actually uses, kept on the floor by diameter, plus twine by the reel for anything smaller.',
    items: [
      {
        title: 'Mooring line',
        body: 'Eight-plaited, cut to the length of the berth you are on rather than a coil.',
        image: shot('rope-1', 800, 600),
      },
      { title: 'Sheet and halyard', body: 'Low-stretch line for the boats that race on a Tuesday.' },
      { title: 'Twine and whipping', body: 'Waxed twine, needles and a bench you are welcome to use.' },
    ],
  },
  {
    id: 'fittings',
    eyebrow: 'Chandlery · Aisle two',
    heading: 'Fittings that fit a working boat',
    body: 'Shackles, blocks, cleats, pins and plates — the plain sorts, in the sizes that come back season after season rather than the ones that look well in a window.',
    items: [
      { title: 'Shackles and pins', body: 'Stainless, galvanised and the odd second-hand one that is still sound.' },
      { title: 'Blocks and sheaves', body: 'Sheaves matched to the line you are running through them.' },
      {
        title: 'Cleats and plates',
        body: 'Through-bolted fittings with the backing plates to match.',
        image: shot('fittings-1', 800, 600),
      },
    ],
  },
  {
    id: 'paints',
    eyebrow: 'Chandlery · Aisle three',
    heading: 'Paint, varnish and the weather to use them in',
    body: 'Topsides, antifouling below the waterline, varnish for timber and everything for the small jobs that get put off every spring.',
    items: [
      { title: 'Topsides and deck', body: 'Mixed to the colours the yard has used for years, in tins you can carry.' },
      { title: 'Below the waterline', body: 'Antifouling for a season on the wall, with the brush to put it on.' },
      { title: 'Varnish and oil', body: 'For timber that sits in sun all day and spray all evening.' },
    ],
  },
  {
    id: 'charts',
    eyebrow: 'Chandlery · Aisle four',
    heading: 'Charts, pilots and tide tables',
    body: 'Local charts, corrections filed as they come in, pilot books for the coast either side and the tide tables the harbour works to.',
    items: [
      {
        title: 'Charts of the harbour',
        body: 'Paper charts, corrected by hand from the notices in the folder.',
        image: shot('charts-1', 800, 600),
      },
      { title: 'Pilot books', body: 'Two coasts worth, plus the one covering the channel between them.' },
      { title: 'Tide tables', body: 'The tables the wall works to, and the almanac for everything further out.' },
    ],
  },
  {
    id: 'moorings',
    eyebrow: 'Moorings',
    heading: 'Forty berths along the north wall',
    body: 'Twenty alongside with water and power at the wall, twenty on moorings in the pool reached by tender. The counter holds the waiting list and, in practice, the order of it.',
    items: [
      { title: 'Alongside', body: 'Kept for the season, with the tap and the socket at your own post.' },
      { title: 'On the pool', body: 'Each mooring numbered on its buoy, reached by tender or by boat.' },
      {
        title: 'Visitor berths',
        body: 'Four berths kept free through the summer for hulls passing through.',
        image: shot('moorings-1', 800, 600),
      },
    ],
  },
  {
    id: 'forecast',
    eyebrow: 'Forecast',
    heading: 'The week the board has written up',
    body: 'Wind, sea state and what the harbour master expects before the afternoon turns — copied off the office board each morning at the counter.',
    items: [
      { title: 'Wind over the wall', body: 'Direction and strength for the next three days, in one line.' },
      { title: 'Sea at the entrance', body: 'What the swell is doing where the harbour opens out.' },
      { title: 'What the master expects', body: 'Anything the office wants hulls to know before they leave.' },
    ],
  },
  {
    id: 'counter',
    eyebrow: 'Counter',
    heading: 'Where the order book and the kettle sit',
    body: 'The counter is the desk, the till and the lost property shelf. Orders taken here are picked from the aisles and held behind it with your name on them.',
    items: [
      { title: 'Order and hold', body: 'Kept behind the counter for seven days, then put back on the shelf.' },
      { title: 'Ask the counter', body: 'Two people who have been on this wall long enough to know what a hull needs.' },
      { title: 'Loan of a tool', body: 'The shop lends what it can, against a name written in the book.' },
    ],
  },
  {
    id: 'chatter',
    eyebrow: 'Channels · Chatter',
    heading: 'Short notes through the day',
    body: 'The channel we keep for short notes: a delivery landing early, the wall closed for an hour, or a spare mooring going free.',
    items: [
      { title: 'Written as it happens', body: 'Two or three lines, posted the same hour the shop hears of it.' },
      { title: 'Answers from the counter', body: 'Replies come from the same two people who serve behind the desk.' },
    ],
  },
  {
    id: 'frames',
    eyebrow: 'Channels · Frames',
    heading: 'Pictures from the wall',
    body: 'Hulls on the wall, timber going back on in spring and the odd morning worth photographing — kept in one place rather than on a shelf of phones.',
    items: [
      {
        title: 'Along the wall',
        body: 'What the berths look like on a still morning and on a bad afternoon.',
        image: shot('frames-1', 800, 600),
      },
      { title: 'In the shed', body: 'Refits from the first plank to the last coat of varnish.' },
    ],
  },
  {
    id: 'broadcast',
    eyebrow: 'Channels · Broadcast',
    heading: 'Announcements the wall needs',
    body: 'Closures, works and anything that changes how a hull gets in or out, sent once and kept where it can be found again.',
    items: [
      { title: 'Wall and pool notices', body: 'Posted before the work starts, never the morning it does.' },
      { title: 'Season dates', body: 'When the berths turn over and when the tender shed opens.' },
    ],
  },
  {
    id: 'bulletins',
    eyebrow: 'Channels · Bulletins',
    heading: 'The longer notes, a few times a year',
    body: 'What actually changed on the wall this season: a new line of fittings, a price that moved, and the jobs we did on the shop itself.',
    items: [
      { title: 'One at the turn of each season', body: 'Written when the yard settles rather than when a date says so.' },
      {
        title: 'What changed this year',
        body: 'The aisle rearranged, a new line of line, and a door that finally shuts.',
        image: shot('bulletins-1', 800, 600),
      },
    ],
  },
]
