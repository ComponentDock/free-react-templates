/**
 * Every destination and every line of copy the Davit page renders, plus the single model the
 * chrome is built from: one list of five rows and one list of five bill items behind the
 * circled cart link. The same two lists are handed to whichever presentation the width calls
 * for, so the wide card and the collapsing panel can never drift apart from each other.
 */

export const SITE_NAME = 'Davit'

export const PAGE_TITLE = 'Davit — Floating Card Navbar Template'

/** The band's own heading, above the card. */
export const BAND_HEADING_ID = 'davit-band-heading'

export const BAND_HEADING = 'Swing the boat outboard'

export const FOOTER_NOTE =
  'One white card, five tracked-out rows and a circled cart that opens the yard list.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the card's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the collapsing panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Sections'

/** The word the toggler shows next to its glyph. */
export const TOGGLER_LABEL = 'Browse'

/** The accessible name of the icon-only cart link at the end of the list. */
export const CART_LABEL = 'Yard store'

/** The card's wide list, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'davit-nav'

/** The collapsing panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'davit-panel'

/** The toggler's id, so the panel it opens can be labelled by it. */
export const TOGGLER_ID = 'davit-toggler'

/** The cart link and the list it opens, once for the wide card and once for the panel. */
export const CART_TRIGGER_ID = 'davit-cart'
export const CART_MENU_ID = 'davit-cart-list'
export const CART_TRIGGER_PANEL_ID = 'davit-cart-panel'
export const CART_MENU_PANEL_ID = 'davit-cart-list-panel'

/**
 * How far a target is kept clear when it is scrolled to, in px: the card's own height (81.8px
 * above 992px, 66px below) plus a little air, because the card sits in the flow and is never
 * pinned.
 */
export const HEADER_OFFSET = 88

/** A deterministic placeholder for one picture inside a section. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/davit-${seed}/${width}/${height}`
}

export interface NavItem {
  label: string
  href: string
  /** The destination already open: carried as `aria-current` and marked in the row. */
  current: boolean
}

/**
 * The five rows the card renders, in the design's order: the destination already open and four
 * plain ones. Every label is the app's own word for a part of the boat hoist.
 */
export const NAV: NavItem[] = [
  { label: 'Hoist', href: '#hoist', current: true },
  { label: 'Tackle', href: '#tackle', current: false },
  { label: 'Fall', href: '#fall', current: false },
  { label: 'Gripes', href: '#gripes', current: false },
  { label: 'Sling', href: '#sling', current: false },
]

export interface MenuItem {
  label: string
  href: string
}

/**
 * The five bill items the circled cart link opens, in the design's order — a plain list of
 * destinations rather than the placeholder stubs the source ships, so not one of them is a
 * dead anchor. Every label is the app's own word; each one lands on a real card of the yard
 * block below.
 */
export const CART_MENU: MenuItem[] = [
  { label: 'Boat fittings', href: '#yard-fittings' },
  { label: 'Blocks and fall', href: '#yard-blocks' },
  { label: 'Fresh lashings', href: '#yard-lashings' },
  { label: 'Standing orders', href: '#yard-orders' },
  { label: 'Delivery and returns', href: '#yard-delivery' },
]

/**
 * How many bill items stand above each of the list's two rules: one after the third item and
 * one after the fourth, exactly where the design draws them.
 */
export const CART_MENU_DIVIDERS: number[] = [3, 4]

/** Every in-page destination the rows declare, in the order the card shows them. */
export function allDestinations(): string[] {
  return NAV.map((item) => item.href)
}

/** Every in-page destination the cart link's list declares, in the order it shows them. */
export function menuDestinations(): string[] {
  return CART_MENU.map((item) => item.href)
}

/** Every in-page destination the whole chrome declares, rows first and the bill list after. */
export function inPageDestinations(): string[] {
  return [...allDestinations(), ...menuDestinations()]
}

interface SectionItem {
  title: string
  body: string
  /** A card that is also a picture, where the section is a grid of things. */
  image?: string
  /** A card something else points at, where the section is the list behind a link. */
  id?: string
}

export interface Section {
  id: string
  eyebrow: string
  heading: string
  body: string
  /** The section's rows, each with its own picture and its own anchor where it needs them. */
  items: SectionItem[]
}

/**
 * Every destination the chrome declares, materialised so not one row and not one bill item is
 * a dead link: the hoist the page is on, the tackle and the fall that lift the boat, the
 * gripes that hold it down, the sling it hangs in, and the yard block the cart link opens —
 * whose five cards are what the bill list points at.
 */
export const SECTIONS: Section[] = [
  {
    id: 'hoist',
    eyebrow: 'Hoist',
    heading: 'The boat swings outboard',
    body: 'One hand on the fall and the boat leaves its chocks, swings clear of the rail and comes to rest over the water. That swing is the whole reason the head of this frame is as long as it is.',
    items: [
      {
        title: 'Swung, never dropped',
        body: 'The head reaches past the topsides, so the boat is out over the water before it starts to come down.',
        image: shot('hoist-1', 800, 600),
      },
      {
        title: 'A pawl you can hear',
        body: 'The catch is audible over the wind, which is how the deck knows the boat is held.',
      },
      {
        title: 'Two turns are enough',
        body: 'The fall is turned by hand for the last fathom, so the load is felt rather than guessed at.',
        image: shot('hoist-2', 800, 600),
      },
    ],
  },
  {
    id: 'tackle',
    eyebrow: 'Tackle',
    heading: 'Blocks that share the load',
    body: 'A two-part purchase in the head of the frame, sized so that one hand on the tail can lift the boat the deck asked for and no more.',
    items: [
      {
        title: 'Sized for one hand',
        body: 'The purchase is chosen from the boat it lifts, not from the frame it hangs in.',
      },
      {
        title: 'Sheaves that turn',
        body: 'Bronze bearings, freed every season, so a lift is a pull rather than a heave.',
        image: shot('tackle-1', 800, 600),
      },
      {
        title: 'Greased every winter',
        body: 'Stripped, washed and put back before the first lift of the season.',
      },
    ],
  },
  {
    id: 'fall',
    eyebrow: 'Fall',
    heading: 'The line that takes the strain',
    body: 'Flexible line with a spliced eye at each end, marked where the boat sits level with the rail so the last turn needs no guesswork.',
    items: [
      {
        title: 'An eye at each end',
        body: 'Spliced rather than knotted, because a knot costs a fifth of the strength of the line.',
        image: shot('fall-1', 800, 600),
      },
      {
        title: 'Marked for the rail',
        body: 'A whipping at the point where the boat is level with the deck it came over.',
      },
      {
        title: 'Replaced before it shows',
        body: 'Line that has gone stiff is retired, whether or not it has carried a full load.',
      },
    ],
  },
  {
    id: 'gripes',
    eyebrow: 'Gripes',
    heading: 'Held fast on passage',
    body: 'Lashings and chocks that keep the boat where the frame put it — at sea, alongside and on the trailer at the end of the season.',
    items: [
      {
        title: 'Down hard, not tight',
        body: 'The lashing holds the hull against its chocks without pulling the two halves together.',
      },
      {
        title: 'One release, one hand',
        body: 'A single hook lets the whole grip go, which is what a boat going over the side needs.',
        image: shot('gripes-1', 800, 600),
      },
      {
        title: 'Chocks that fit this hull',
        body: 'Shaped to the boat they hold, so a lift never starts on a loose boat.',
      },
    ],
  },
  {
    id: 'sling',
    eyebrow: 'Sling',
    heading: 'One strop, two eyes',
    body: 'A single strop under the boat, spread by a bar so the load lands on the hull where it is strongest rather than where it is nearest.',
    items: [
      {
        title: 'Spread by a bar',
        body: 'The strop is held wide, so it meets the hull below the turn of the bilge.',
      },
      {
        title: 'Checked at every lift',
        body: 'The whole length is run through the hand before the boat leaves its chocks.',
        image: shot('sling-1', 800, 600),
      },
    ],
  },
  {
    id: 'yard',
    eyebrow: 'Yard store',
    heading: 'What the yard keeps in stock',
    body: 'The list the circled cart link opens: fittings, blocks and fall, fresh lashings, standing orders and how anything reaches a deck.',
    items: [
      {
        id: 'yard-fittings',
        title: 'Boat fittings',
        body: 'Thimbles, shackles and hooks, sized to the line the frame is rigged with.',
        image: shot('yard-1', 800, 600),
      },
      {
        id: 'yard-blocks',
        title: 'Blocks and fall',
        body: 'Sheaves, cheeks and line, cut to the length your own lift asks for.',
      },
      {
        id: 'yard-lashings',
        title: 'Fresh lashings',
        body: 'Gripes in two lengths, with the hooks already spliced on.',
        image: shot('yard-2', 800, 600),
      },
      {
        id: 'yard-orders',
        title: 'Standing orders',
        body: 'Line and fittings sent out on the same week each season, without asking twice.',
      },
      {
        id: 'yard-delivery',
        title: 'Delivery and returns',
        body: 'Delivered to the yard or the quay, and anything unused taken back inside a month.',
      },
    ],
  },
]
