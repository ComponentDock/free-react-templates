/**
 * Every destination and every line of copy the Sponson page renders, plus the single model the rail
 * is built from: six labels, one of them marking the block the page is standing in, and the blocks
 * below that materialise all six destinations so that not one label is a dead anchor.
 */

export const SITE_NAME = 'Sponson'

export const PAGE_TITLE = 'Sponson — Left Side Rail Menu Template'

/** The line the rail's own sign-off carries, under the menu. */
export const RAIL_SIGN_OFF = 'A projection off the flank'

export const FOOTER_NOTE = 'A six-label rail on the left, one band and six blocks beside it.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the rail's own landmark carries. */
export const RAIL_LABEL = 'Section menu'

/** The name the burger control carries — the design draws it as three bars with no word at all. */
export const TOGGLE_LABEL = 'Toggle the side menu'

/** The rail's own id, which is what the burger points at through `aria-controls`. */
export const RAIL_ID = 'sponson-rail'

export const TOGGLE_ID = 'sponson-toggle'

/** The id the band's single heading answers to. */
export const BAND_HEADING_ID = 'sponson-band-heading'

export const BAND_HEADING = 'A rail that holds the flank'

export const BAND_LEAD =
  'The menu is a white column pinned to the left edge of the page, one label under another, and what you are reading is the block that is left of the width beside it. Nothing else hangs off the rail — no badge, no button, no picture — just six labels and the one that marks where you are.'

export interface Column {
  heading: string
  body: string
}

/** The band's two sub-blocks: side by side from 768px up, stacked below it. */
export const COLUMNS: Column[] = [
  {
    heading: 'Built out from the flank',
    body: 'The rail is a fixed column a fifth of the viewport wide, running the full height of the screen and never scrolling with the page. Its labels sit on a 43px pitch, each one a link with a hairline of air above it and below it, and the list starts at the rail’s own content origin.',
  },
  {
    heading: 'Slid out, never draped over',
    body: 'Below 992px the same rail becomes a 270px drawer that starts off the left edge and is pulled back in over half a second. Pulling it out pushes the block beside it across rather than covering it, so nothing on the page is ever hidden behind the chrome.',
  },
]

/**
 * How far a destination is kept clear when it is scrolled to, in px: comfortably past the 68.8px the
 * burger occupies at the top of a narrow viewport.
 */
export const HEADER_OFFSET = 300

/** Where the skip link lands: the block the page itself is on. */
export const SKIP_TARGET = '#harbour'

/** A deterministic placeholder for one picture inside a block. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/sponson-${seed}/${width}/${height}`
}

export interface RailRow {
  label: string
  href: string
  /** The block already open: carried as `aria-current` and painted in the accent coral. */
  current: boolean
}

/**
 * The rail's six labels, in the design's order — one current row first, then five plain ones. Each
 * label is a real destination: its block stands below the band, so no row is a dead anchor.
 */
export const ROWS: RailRow[] = [
  { label: 'Harbour', href: '#harbour', current: true },
  { label: 'Rigging', href: '#rigging', current: false },
  { label: 'Charts', href: '#charts', current: false },
  { label: 'Tenders', href: '#tenders', current: false },
  { label: 'Logbook', href: '#logbook', current: false },
  { label: 'Yard', href: '#yard', current: false },
]

/** Every in-page destination the rail's own labels declare, in the order they show them. */
export function rowDestinations(): string[] {
  return ROWS.map((row) => row.href)
}

export interface SectionItem {
  title: string
  body: string
  /** A card that is also a picture, where the block is a grid of things. */
  image?: string
}

export interface Section {
  id: string
  eyebrow: string
  heading: string
  body: string
  items: SectionItem[]
}

/**
 * Every destination the rail declares, materialised so that not one label is dead: the berth the
 * page is on, then the rigging, the paper set, the small boat, the passage log and the yard. The
 * design stops at its band — it ships no content at all — so these six blocks are the app's own.
 */
export const SECTIONS: Section[] = [
  {
    id: 'harbour',
    eyebrow: 'Harbour',
    heading: 'Where the boat is kept',
    body: 'The rail opens on the berth the page is standing in: a working harbour with hard standing, a slip that stays usable at every tide, and enough depth at the wall for a keel to lie afloat all winter.',
    items: [
      {
        title: 'Alongside, not swinging',
        body: 'Berths are alongside rather than on a mooring, so a hull is never left to swing on a chain through a blow.',
        image: shot('harbour-1', 800, 600),
      },
      {
        title: 'A slip at every tide',
        body: 'The slip takes a full keel at low water, which is what makes a winter lift possible without waiting on the moon.',
      },
      {
        title: 'Depth at the wall',
        body: 'Three metres along the harbour wall, sounded every spring and written on the board beside the office door.',
        image: shot('harbour-2', 800, 600),
      },
    ],
  },
  {
    id: 'rigging',
    eyebrow: 'Rigging',
    heading: 'Wire and rope, and the order they run in',
    body: 'Every stay, halyard and sheet is listed with its own diameter and where it leads, so a line can be ordered by name rather than by whatever length a hand remembers.',
    items: [
      {
        title: 'Standing rig first',
        body: 'Stays and shrouds are set up and tuned before anything that moves is rove, because everything downstream is measured against them.',
        image: shot('rigging-1', 800, 600),
      },
      {
        title: 'Running rig in its own order',
        body: 'Halyards lead back to the mast and sheets to the winches, and nothing crosses a handhold where a crew member will be standing.',
      },
      {
        title: 'Tension written down',
        body: 'The numbers a rig was tuned to are kept with the boat, so the next hand is never guessing from the feel of a shroud.',
      },
    ],
  },
  {
    id: 'charts',
    eyebrow: 'Charts',
    heading: 'The paper the water is written on',
    body: 'The paper set is kept in the chart table and corrected by hand, with every correction logged beside the passage it belongs to.',
    items: [
      {
        title: 'Corrected by hand',
        body: 'Each notice is pencilled in and initialled, so the paper never carries a correction that nobody can account for.',
        image: shot('charts-1', 800, 600),
      },
      {
        title: 'One set per passage',
        body: 'Only the sheets a passage needs are lifted out of the drawer, which keeps the table clear when the weather turns.',
      },
      {
        title: 'Soundings trusted last',
        body: 'Depth is read from the echo sounder first and the paper second, because paper is only ever as fresh as its last correction.',
      },
    ],
  },
  {
    id: 'tenders',
    eyebrow: 'Tenders',
    heading: 'The small boat that runs the errands',
    body: 'A tender earns its berth by being easy to launch alone, dry underfoot, and small enough to row against a tide when the outboard will not start.',
    items: [
      {
        title: 'Launched by one hand',
        body: 'It goes over the wall and back on its own, with no second person on the fall and no trailer to fetch.',
        image: shot('tenders-1', 800, 600),
      },
      {
        title: 'Dry at the foot',
        body: 'A floor above the waterline and an outboard that lifts clear keep the walk forward from ending in a wet boot.',
      },
      {
        title: 'Rowed as well as driven',
        body: 'The oars stay aboard, because an outboard that stops is a heavy thing to be standing next to.',
        image: shot('tenders-2', 800, 600),
      },
    ],
  },
  {
    id: 'logbook',
    eyebrow: 'Logbook',
    heading: 'What each passage left behind',
    body: 'Every run is written up the evening it ends: the water, the wind, who was aboard, and whatever the boat did that was worth remembering.',
    items: [
      {
        title: 'Written the same evening',
        body: 'A page filled in at the table while the passage is still fresh is worth three pages reconstructed a month later.',
        image: shot('logbook-1', 800, 600),
      },
      {
        title: 'Weather, then words',
        body: 'Wind, sea and visibility go in first, because everything else on the page only means something against them.',
      },
      {
        title: 'Faults carried forward',
        body: 'Anything that failed gets its own line, and stays on the list until the fix is written beside it.',
      },
    ],
  },
  {
    id: 'yard',
    eyebrow: 'Yard',
    heading: 'Where the work happens out of the water',
    body: 'The yard lifts, blocks off and works on the hull through the winter, with the same crew that sails her in the summer and the tide board by the office door.',
    items: [
      {
        title: 'Lifted and blocked off',
        body: 'She comes out on the slip, is blocked on the hard, and stays there until the last coat has cured.',
        image: shot('yard-1', 800, 600),
      },
      {
        title: 'One crew, all year',
        body: 'The hands who work the hull in the winter are the ones who sail it in the summer, so a repair is never handed over blind.',
      },
      {
        title: 'Find us along the wall',
        body: 'The office is the first door along the wall, and the board beside it carries the tide times for the week.',
        image: shot('yard-2', 800, 600),
      },
    ],
  },
]
