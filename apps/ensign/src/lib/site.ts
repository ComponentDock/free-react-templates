/**
 * Every destination and every line of copy the Ensign page renders, plus the one
 * navigation model the wide bar and the collapsing panel are both built from: the page
 * keeps a single list of seven rows — and the four rows of its one disclosure — and
 * hands it to both presentations, never a second hand-maintained copy for the other
 * layout.
 */

export const SITE_NAME = 'Ensign'

export const PAGE_TITLE = 'Ensign — Solid Colour Bar Menu Template'

export const BAND_HEADING_ID = 'ensign-band-heading'

export const BAND_HEADING = 'One bar, seven ways in'

export const FOOTER_NOTE = 'One solid bar, seven destinations, an orange block at its end.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the bar's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the collapsing panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Site menu'

/** The word the toggler shows next to its glyph. */
export const TOGGLER_LABEL = 'Browse'

/** The bar's list, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'ensign-nav'

/** The collapsing panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'ensign-panel'

/** The panel's list id. */
export const PANEL_NAV_ID = 'ensign-panel-nav'

/** The toggler's id, so the panel it opens can be labelled by it. */
export const TOGGLER_ID = 'ensign-toggler'

/**
 * How far a target is kept clear of the bar when it is scrolled to, in px: the bar's
 * own height (67.8px above 992px, 66px below) plus a little air, because the bar is in
 * the flow and never pinned.
 */
export const HEADER_OFFSET = 80

/** A deterministic placeholder for one picture inside a section. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/ensign-${seed}/${width}/${height}`
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
  /** The row drawn as a solid block filling the bar's height. */
  cta: boolean
  /** The rows this row discloses; every other row carries an empty list. */
  children: NavChild[]
}

/**
 * The seven rows the bar renders, in the design's order: the destination already open,
 * then the one disclosure, four plain destinations, and the solid block last. The four
 * rows of the disclosure are the page's own group of sub-destinations.
 */
export const NAV: NavItem[] = [
  { label: 'Watch', href: '#watch', current: true, cta: false, children: [] },
  {
    label: 'Fleet',
    href: '#fleet',
    current: false,
    cta: false,
    children: [
      { label: 'Cutters', href: '#cutters' },
      { label: 'Ketches', href: '#ketches' },
      { label: 'Sloops', href: '#sloops' },
      { label: 'Tenders', href: '#tenders' },
    ],
  },
  { label: 'Berths', href: '#berths', current: false, cta: false, children: [] },
  { label: 'Tides', href: '#tides', current: false, cta: false, children: [] },
  { label: 'Journal', href: '#journal', current: false, cta: false, children: [] },
  { label: 'Hail', href: '#hail', current: false, cta: false, children: [] },
  { label: 'Reserve a berth', href: '#reserve', current: false, cta: true, children: [] },
]

/** Every destination the bar declares, the disclosure's own rows included. */
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
 * The eleven destinations the bar declares, every one of them materialised so that no
 * row is a dead link: the office's watch, the register of classes and each of the four
 * classes the disclosure names, the berths along the wall, what the water does, the
 * office's own notes, the ways to reach the desk, and the berth request the solid block
 * points at.
 */
export const SECTIONS: Section[] = [
  {
    id: 'watch',
    eyebrow: 'Watch',
    heading: 'The office keeps a watch on the whole harbour',
    body: 'Two desks, one telephone and a window over the moorings: what the water is doing today, which hulls are out, and who is on the register this season. Everything the bar points at starts here.',
    items: [
      {
        title: 'A window over the wall',
        body: 'The watch is kept from first light until the last line is taken, seven days through the season.',
        image: shot('watch-1', 800, 600),
      },
      {
        title: 'One register, kept by hand',
        body: 'Hull, class, length and the berth she sits in — written in the same book for eleven seasons.',
      },
      {
        title: 'Weather and water',
        body: 'Height, direction and what the harbour master expects before the afternoon turns.',
        image: shot('watch-2', 800, 600),
      },
    ],
  },
  {
    id: 'fleet',
    eyebrow: 'Fleet',
    heading: 'Four classes of hull on the register',
    body: 'The register is kept by class, so a berth can be found before a boat arrives: a cutter, a ketch, a sloop or a tender, each with its own length on the wall and its own place in the shed.',
    items: [
      {
        title: 'Cutters',
        body: 'One mast, a long bowsprit and a hull that answers the water rather than the wheel.',
      },
      {
        title: 'Ketches',
        body: 'Two masts with the shorter one aft, which is what makes a heavy hull easy to balance.',
      },
      {
        title: 'Sloops',
        body: 'The plainest rig on the register and the one most often out on a weekday evening.',
      },
      {
        title: 'Tenders',
        body: 'Short hulls for the run between the wall and a mooring — the smallest class we keep.',
      },
    ],
  },
  {
    id: 'cutters',
    eyebrow: 'Fleet · Cutters',
    heading: 'Cutters: one mast, a long reach',
    body: 'Four cutters sit on the register this season, from a nine-metre day boat to a fourteen-metre hull that has been out of the water for a refit since spring.',
    items: [
      {
        title: 'Nine metres, day boat',
        body: 'Out on Tuesdays and Saturdays, back at the wall by the top of the tide.',
        image: shot('cutters-1', 800, 600),
      },
      { title: 'Fourteen metres, refit', body: 'Laid up since April, back in the water once the topsides are done.' },
    ],
  },
  {
    id: 'ketches',
    eyebrow: 'Fleet · Ketches',
    heading: 'Ketches: two masts, a lighter helm',
    body: 'The ketch class gives a heavy hull a sail plan it can carry alone. Both of ours are out every week of the season and neither has been borrowed by the office yet.',
    items: [
      { title: 'Eleven metres, laid 1978', body: 'Timber, re-caulked twice, and still the driest hull on the wall.' },
      { title: 'Thirteen metres, laid 1994', body: 'The newest ketch on the register, in for a new mainsheet before the spring.' },
    ],
  },
  {
    id: 'sloops',
    eyebrow: 'Fleet · Sloops',
    heading: 'Sloops: the plainest rig here',
    body: 'A single mast, a single headsail and nothing on the deck that does not earn its keep — five sloops sit on the wall, three of them skippered by people we taught ourselves.',
    items: [
      {
        title: 'Eight metres, first boat',
        body: 'Sold twice and bought back once, which the office notes each time it happens.',
        image: shot('sloops-1', 800, 600),
      },
      { title: 'Ten metres, second hull', body: 'The one that goes out regardless of what the forecast says.' },
      { title: 'Twelve metres, cruising', body: 'Away for whole summers and back on the wall each October.' },
    ],
  },
  {
    id: 'tenders',
    eyebrow: 'Fleet · Tenders',
    heading: 'Tenders: the short run out',
    body: 'Every mooring on the east side needs a tender to reach it, and the office keeps six on the slip for anyone who does not bring their own.',
    items: [
      { title: 'Four metres, hard hull', body: 'Row or outboard, and the one to take when the wind is against you.' },
      { title: 'Three metres, inflatable', body: 'Rolled and stored in the shed, handed out against a number on the board.' },
    ],
  },
  {
    id: 'berths',
    eyebrow: 'Berths',
    heading: 'Berths along the north wall',
    body: 'Forty berths run the length of the north wall, twenty of them alongside and the rest on moorings in the pool. The office holds the waiting list and, in practice, the order of it.',
    items: [
      { title: 'Alongside', body: 'Twenty berths with water and power at the wall, kept for the season.' },
      { title: 'On the pool', body: 'Twenty moorings reached by tender, each with its own number on the buoy.' },
      {
        title: 'Visitor berths',
        body: 'Four berths kept free through the summer for hulls passing through.',
        image: shot('berths-1', 800, 600),
      },
    ],
  },
  {
    id: 'tides',
    eyebrow: 'Tides',
    heading: 'What the water does here',
    body: 'The harbour runs dry at the bottom of a spring tide, which is why the wall is built where it is and why every berth is reached with the height of the water in mind.',
    items: [
      { title: 'High water springs', body: 'The wall is covered by half a metre and the pool fills to the slip.' },
      { title: 'Low water springs', body: 'The east pool empties and anything drawing more than a metre stays out.' },
      { title: 'Neaps', body: 'A metre less range, which is when most of the work on the wall gets done.' },
    ],
  },
  {
    id: 'journal',
    eyebrow: 'Journal',
    heading: 'Notes from the office',
    body: 'Written up whenever the telephone goes quiet: what came on to the wall, what left it, and what the season did to both.',
    items: [
      {
        title: 'A week of springs',
        body: 'Two hulls out a fortnight early and one tender given away to a visitor who needed it more.',
        image: shot('journal-1', 800, 600),
      },
      { title: 'The refit that took a season', body: 'Fourteen metres of timber, three planks and a very patient owner.' },
      { title: 'Where the tenders go in winter', body: 'Rolled, labelled and stored in the shed against the first of April.' },
    ],
  },
  {
    id: 'hail',
    eyebrow: 'Hail',
    heading: 'Three ways to reach the desk',
    body: 'The desk sits at the head of the wall, above the shed. Walk in, write, or telephone — all three are read by the same two people.',
    items: [
      { title: 'The desk', body: 'Head of the north wall, above the shed — open from first light.' },
      { title: 'By post', body: 'office@ensign.example — answered within a day through the season.' },
      { title: 'By telephone', body: 'Answered while the office is open, until the last line is taken.' },
    ],
  },
  {
    id: 'reserve',
    eyebrow: 'Reserve',
    heading: 'Reserve a berth for the coming season',
    body: 'Tell the office the class, the length and the dates and a berth is held against your name. Alongside berths go first, then the moorings on the pool.',
    items: [
      { title: 'Hold a berth', body: 'First refusal on any berth that comes free, held for seven days.' },
      { title: 'Add a tender', body: 'One of the six on the slip, handed out against a number on the board.' },
    ],
  },
]
