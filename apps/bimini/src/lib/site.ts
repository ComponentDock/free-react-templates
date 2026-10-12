/**
 * Every destination and every line of copy the Bimini page renders, plus the single model the sheet
 * is built from: four labels, one of them marking the block the page is standing in, and the blocks
 * below the hero that materialise all four of them so that not one label is a dead anchor.
 */

export const SITE_NAME = 'Bimini'

export const PAGE_TITLE = 'Bimini — Full-Screen Overlay Menu Template'

/** The wordmark the sheet and the header both carry. */
export const BRAND = 'Bimini'

export const FOOTER_NOTE = 'One sheet, four labels, and a full-height hero behind them.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the sheet's own landmark carries. */
export const SHEET_LABEL = 'Full-screen menu'

/** The name the header's burger carries — the design draws it as bars with no word at all. */
export const TOGGLE_LABEL = 'Toggle the full-screen menu'

/** The name the sheet's close control carries — the design draws it as an X with no word at all. */
export const CLOSE_LABEL = 'Close the menu'

/** The sheet's own id, which is what the burger points at through `aria-controls`. */
export const SHEET_ID = 'bimini-sheet'

export const TOGGLE_ID = 'bimini-toggle'

/**
 * How long the close control waits after the sheet opens before it settles in, in ms. The design
 * holds it back so that the grow is never covered by chrome — the X arrives on the sheet's own
 * timing, and every other way out (Escape, a press past the sheet) works from the first frame.
 */
export const CLOSE_REVEAL_MS = 900

/**
 * The class the open sheet hangs off `<body>`. It is also the page lock, so the cover is always
 * exactly one viewport wide and tall rather than the height of the page it is drawn over.
 */
export const SHEET_STATE_CLASS = 'menu-show'

export const HERO_HEADING = 'A cover for the deck'

export const HERO_LEAD = 'A black sheet, four letterspaced labels and a photograph behind them.'

/**
 * How far a destination is kept clear when it is scrolled to, in px: comfortably past the 92.8px the
 * header occupies on a wide viewport.
 */
export const HEADER_OFFSET = 120

/** The block the page itself opens on — the one the wordmark and the skip link both point at. */
export const HOME_HREF = '#cockpit'

/** Where the skip link lands: the block the page itself is on. */
export const SKIP_TARGET = HOME_HREF

/** The top of the page, which the footer's own line walks back to. */
export const TOP_TARGET = '#top'

/** A deterministic placeholder for one picture inside a block. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/bimini-${seed}/${width}/${height}`
}

/**
 * The photograph the sheet carries behind its centred column: one full-bleed picture under a black
 * scrim, the cover's only image. The design's own sheet declares one too, but ships no picture with
 * it, so this placeholder stands in for it — recorded as a delta.
 */
export const SHEET_PHOTO = shot('1', 1920, 1080)

export interface MenuRowModel {
  label: string
  href: string
  /** The block already open: carried as `aria-current` and painted in the gold. */
  current: boolean
}

/**
 * The sheet's four labels, in the design's order — one current row first, then three plain ones.
 * Each label is a real destination: its block stands below the hero, so no row is a dead anchor.
 */
export const ROWS: MenuRowModel[] = [
  { label: 'Cockpit', href: '#cockpit', current: true },
  { label: 'Canvas', href: '#canvas', current: false },
  { label: 'Coverage', href: '#coverage', current: false },
  { label: 'Compass', href: '#compass', current: false },
]

/** Every in-page destination the sheet's own labels declare, in the order they show them. */
export function rowDestinations(): string[] {
  return ROWS.map((row) => row.href)
}

export interface SectionItem {
  title: string
  body: string
  /** A card that is also a picture, where the block is a grid of things. */
  image?: string
}

export interface SectionModel {
  id: string
  eyebrow: string
  heading: string
  body: string
  items: SectionItem[]
}

/**
 * Every destination the sheet declares, materialised so that not one label is dead: the deck the
 * page is standing on, the cloth, the ground it covers, the compass set into it and the yard that
 * takes it down. The design stops at its hero — the page it ships is exactly one viewport tall and
 * holds no content at all — so these five blocks are the app's own.
 */
export const SECTIONS: SectionModel[] = [
  {
    id: 'cockpit',
    eyebrow: 'Cockpit',
    heading: 'Where the cover is opened from',
    body: 'The sheet is drawn over the deck you are standing on: one label for the block the page opens at, and the same springy grow every time it comes up — nothing creeps in from an edge.',
    items: [
      {
        title: 'One gesture, the whole page',
        body: 'There is no bar to slide and no rail to push: the cover is already the size of the window and simply grows into it.',
        image: shot('cockpit-1', 800, 600),
      },
      {
        title: 'Four labels, nothing else',
        body: 'No badges, no search box, no second column of links. The sheet holds a wordmark, four labels and a photograph.',
      },
      {
        title: 'Opened from one control',
        body: 'A single control in the header opens it; the same control closes it again, and so does a press past the sheet or an Escape.',
        image: shot('cockpit-2', 800, 600),
      },
    ],
  },
  {
    id: 'canvas',
    eyebrow: 'Canvas',
    heading: 'Cloth cut to one shape',
    body: 'A canvas top is cut to the outline it has to cover, tensioned on a frame and stitched where the load lands — which is why it holds a shape at speed rather than flapping at its edges.',
    items: [
      {
        title: 'Cut over the frame',
        body: 'The outline is taken from the frame itself, so the cloth is tight across the width and never gathers in the middle.',
        image: shot('canvas-1', 800, 600),
      },
      {
        title: 'Tensioned evenly',
        body: 'Every fastener pulls against the one opposite it, which keeps the middle of the sheet from sagging once it is wet.',
      },
      {
        title: 'Stitched where it loads',
        body: 'The seams that carry the most strain are doubled, and the corners take a re-enforcing patch before the eyelets go in.',
        image: shot('canvas-2', 800, 600),
      },
    ],
  },
  {
    id: 'coverage',
    eyebrow: 'Coverage',
    heading: 'From the windscreen aft',
    body: 'What the cover spans decides what it is worth: it reaches the full width of the opening, takes in the helm and the seats behind it, and stops short of nothing that a shower would reach.',
    items: [
      {
        title: 'The full opening',
        body: 'Coverage is measured against the opening rather than the seating, so nothing is left standing in the open at the after end.',
        image: shot('coverage-1', 800, 600),
      },
      {
        title: 'Water held outside',
        body: 'A fall built into the cloth carries standing water aft and off the edge instead of letting it pool above the seats.',
      },
      {
        title: 'Wind taken out',
        body: 'The forward edge is the one that lifts first in a blow, so that is where the tightest fixings are set.',
        image: shot('coverage-2', 800, 600),
      },
    ],
  },
  {
    id: 'compass',
    eyebrow: 'Compass',
    heading: 'The sheet looks out over the water',
    body: 'A compass set into the cover reads the heading while the sheet is up, which is what makes it worth having on a deck you cannot see past.',
    items: [
      {
        title: 'Readable through the sheet',
        body: 'The card sits in a clear window rather than under the cloth, so a glance gives a heading without lifting anything.',
        image: shot('compass-1', 800, 600),
      },
      {
        title: 'Swinging settled first',
        body: 'The card is damped, because a heading read off a swinging needle is worth less than no heading at all.',
      },
      {
        title: 'No correction carried',
        body: 'Deviation is written on a card beside the compass rather than built into the markings, so it can be updated as gear moves aboard.',
        image: shot('compass-2', 800, 600),
      },
    ],
  },
  {
    id: 'mooring',
    eyebrow: 'Mooring',
    heading: 'Bringing the cover down again',
    body: 'The yard that cuts a top is the yard that repairs it, so the same people take it down at the end of the season, service the fastenings and stow it dry.',
    items: [
      {
        title: 'Taken down and dried',
        body: 'A canvas top stowed wet mildews along its folds, so it is dried spread out before it is folded away for the season.',
        image: shot('mooring-1', 800, 600),
      },
      {
        title: 'Fastenings serviced',
        body: 'Every fixing is checked and replaced before the sheet goes back on, because a fitting that fails at sea cannot be swapped there.',
      },
      {
        title: 'Reach the yard',
        body: 'The bench is at the head of the slip and answers on weekday mornings; write to the address on the board beside the office door.',
        image: shot('mooring-2', 800, 600),
      },
    ],
  },
]
