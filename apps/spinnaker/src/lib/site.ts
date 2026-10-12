/**
 * Every destination and every line of copy the Spinnaker page renders, plus the single model the
 * chrome is built from: three plain rows and the one wide-panel row whose four links and three
 * image cards are this design's signature, and the blocks below that materialise every one of
 * those destinations. The same model is handed to whichever presentation the width calls for, so
 * the wide bar and the folding panel can never drift apart from each other.
 */

export const SITE_NAME = 'Spinnaker'

export const PAGE_TITLE = 'Spinnaker — Mega Menu Navigation Template'

/** The band's own heading, above the bar. */
export const BAND_HEADING_ID = 'spinnaker-band-heading'

export const BAND_HEADING = 'The sail flown off the wind'

export const FOOTER_NOTE = 'Four rows at the right of one rounded bar, three cards behind the last.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the bar's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the folding panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Sections'

/**
 * The word the toggler shows next to its bars glyph. The design's own word is never reused — this
 * app names the control in its own vocabulary, like every other string on the page.
 */
export const TOGGLER_LABEL = 'Explore'

/** The wide list's own id, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'spinnaker-nav'

/** The folding panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'spinnaker-panel'

/** The toggler's id. */
export const TOGGLER_ID = 'spinnaker-toggler'

/** The wide panel's row: what it is called, and where its own destination lives. */
export const MENU_LABEL = 'Courses'

export const MENU_HREF = '#courses'

export const MENU_NAV_LABEL = 'Course levels'

/** The panel and its trigger, once for the wide bar and once for the folding panel. */
export const MENU_ID = 'spinnaker-courses-panel'
export const MENU_TRIGGER_ID = 'spinnaker-courses'
export const MENU_ID_PANEL = 'spinnaker-courses-panel-folded'
export const MENU_TRIGGER_PANEL_ID = 'spinnaker-courses-folded'

/**
 * How many rows stand above the wide-panel row: exactly three. The design puts its panel row last
 * of four, and both presentations splice it in from here.
 */
export const MENU_AFTER_ROW = 2

/**
 * How far a target is kept clear when it is scrolled to, in px: the band's own 210px down to the
 * bar plus the bar's 83.6px, with a little air. The bar is never pinned, so this only ever buys the
 * design's own breathing room.
 */
export const HEADER_OFFSET = 300

/** Where the skip link lands: the destination the page itself is on. */
export const SKIP_TARGET = '#school'

/** A deterministic placeholder for one picture inside a block or inside the panel. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/spinnaker-${seed}/${width}/${height}`
}

export interface NavItem {
  label: string
  href: string
  /** The destination already open: carried as `aria-current` and painted in the accent amber. */
  current: boolean
}

/**
 * The three plain rows the bar and the panel both walk, in the design's order, all pushed to the
 * bar's right by the list's own auto margin. The wide-panel row is spliced in after the last of
 * them, so the four rows always come out in the design's own order.
 */
export const NAV: NavItem[] = [
  { label: 'School', href: '#school', current: true },
  { label: 'Charters', href: '#charters', current: false },
  { label: 'The fleet', href: '#fleet', current: false },
]

export interface MenuItem {
  label: string
  href: string
}

/**
 * The four destinations behind the wide-panel row, in the design's order. Each one is its own card
 * inside the courses block below, so not one of them is a dead anchor.
 */
export const MENU: MenuItem[] = [
  { label: 'First tacks', href: '#first-tacks' },
  { label: 'Downwind days', href: '#downwind-days' },
  { label: 'Spinnaker clinic', href: '#spinnaker-clinic' },
  { label: 'Night passages', href: '#night-passages' },
]

export interface RouteCard {
  /** The anchor this card carries, which is where the panel's two links for it both land. */
  id: string
  title: string
  /** The card's own meta line, under the title. */
  meta: string
  image: string
}

/**
 * The three image cards in the panel's other quarters — the only imagery the design ships. Each
 * card's picture and its title both point at that card's own block in the routes section below, so
 * every one of the design's dead card anchors lands somewhere real.
 */
export const CARDS: RouteCard[] = [
  {
    id: 'route-coastwise',
    title: 'Coastwise hop',
    meta: 'Two days',
    image: shot('card-1', 800, 600),
  },
  { id: 'route-bay', title: 'Bay crossing', meta: 'Full day', image: shot('card-2', 800, 600) },
  { id: 'route-ria', title: 'Ría run', meta: 'Half day', image: shot('card-3', 800, 600) },
]

/** Every in-page destination the bar's own plain rows declare, in the order they show them. */
export function rowDestinations(): string[] {
  return NAV.map((item) => item.href)
}

/** Every in-page destination the wide panel's four links declare, in the order it shows them. */
export function menuDestinations(): string[] {
  return MENU.map((item) => item.href)
}

/** Every in-page destination the panel's three cards declare, in the order it shows them. */
export function cardDestinations(): string[] {
  return CARDS.map((card) => `#${card.id}`)
}

/** Every in-page destination the whole chrome declares, the wide-panel row's own first. */
export function inPageDestinations(): string[] {
  return [
    SKIP_TARGET,
    ...rowDestinations(),
    MENU_HREF,
    ...menuDestinations(),
    ...cardDestinations(),
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
 * Every destination the chrome declares, materialised so that not one row, not one panel link and
 * not one card anchor is dead: the school the page is on, the courses block whose four cards are
 * what the wide panel opens, the charters, the fleet, and the three routes the panel's cards point
 * at. The design stops at its bar — it ships no content at all — so these blocks are the app's own.
 */
export const SECTIONS: Section[] = [
  {
    id: 'school',
    eyebrow: 'School',
    heading: 'Learn the big sail off the wind',
    body: 'The school runs out of one harbour on one boat, so every course is taught on the water rather than beside it. The idea is simple: a spinnaker is a sail flown off the wind, and the only way to learn it is to fly it on a day that forgives a mistake.',
    items: [
      {
        title: 'One boat, one crew',
        body: 'Courses are capped at four hands, which is the most that can work a spinnaker without the foredeck losing track of who is on which sheet.',
        image: shot('school-1', 800, 600),
      },
      {
        title: 'Taught by the helm',
        body: 'Whoever is driving the boat is the one teaching the drill, so the lesson stays on the water instead of on a whiteboard.',
      },
      {
        title: 'Weather called early',
        body: 'A forecast is read the evening before and the call goes out by six, so nobody rigs for a breeze that will not arrive.',
        image: shot('school-2', 800, 600),
      },
    ],
  },
  {
    id: 'charters',
    eyebrow: 'Charters',
    heading: 'Take the boat out with a hand aboard',
    body: 'Charters are booked by the day, with a skipper aboard who knows the water and a boat already rigged for it. Nothing is delivered to a pontoon and left; every charter starts with a walk-through of the rig.',
    items: [
      {
        title: 'Day and half-day sails',
        body: 'A morning or an afternoon off the coast, kept short enough that a first-timer still has a hand free to look around.',
        image: shot('charters-1', 800, 600),
      },
      {
        title: 'Rigged before you arrive',
        body: 'The boat is rigged, fuelled and provisioned before the first hand steps aboard, so the day starts on the water.',
      },
      {
        title: 'Skipper in the price',
        body: 'A skipper and a second hand are part of the booking, and neither is addable — the boat does not leave without both.',
        image: shot('charters-2', 800, 600),
      },
    ],
  },
  {
    id: 'fleet',
    eyebrow: 'The fleet',
    heading: 'Three boats, each kept for one job',
    body: 'The fleet is deliberately small: one boat for teaching in a settled breeze, one for the offshore legs, and one kept light enough to be single-handed on a quiet afternoon.',
    items: [
      {
        title: 'The teaching boat',
        body: 'Forgiving, stiff and slow to punish a mistake — the boat every course starts on and most sailors return to.',
        image: shot('fleet-1', 800, 600),
      },
      {
        title: 'The offshore boat',
        body: 'Heavier, with the tankage and the berths for a night passage, and the one that makes the long legs.',
      },
      {
        title: 'The light boat',
        body: 'Kept bare for an afternoon alone: no provision locker, no second head, nothing aboard that is not used every sail.',
      },
    ],
  },
  {
    id: 'courses',
    eyebrow: 'Courses',
    heading: 'Four levels, from first tack to night passage',
    body: 'The levels run in order and each one assumes the last, which is why they are booked as a ladder rather than picked apart. The four cards below are exactly what the courses row in the bar opens.',
    items: [
      {
        id: 'first-tacks',
        title: 'First tacks',
        body: 'Two days of working to windward: trimming, tacking, and reading a sail for the first time without a hand beside you.',
        image: shot('courses-1', 800, 600),
      },
      {
        id: 'downwind-days',
        title: 'Downwind days',
        body: 'The leg most crews put off — how a boat behaves with the apparent wind gone, and how to keep it under the rig.',
      },
      {
        id: 'spinnaker-clinic',
        title: 'Spinnaker clinic',
        body: 'One long day on the big light sail: setting from the bag, gybing through the foretriangle and dropping it back into the bag clean.',
        image: shot('courses-2', 800, 600),
      },
      {
        id: 'night-passages',
        title: 'Night passages',
        body: 'A watch that starts at dusk and ends at dawn: lights, lookouts, and keeping the boat honest when the horizon goes.',
      },
    ],
  },
  {
    id: 'routes',
    eyebrow: 'Routes',
    heading: 'Where the panel’s three cards lead',
    body: 'Every card in the wide panel lands on its own route below: how long it runs, what the water does, and what is expected of the hands aboard. Each picture and each title in the panel points at the same card.',
    items: [
      {
        id: 'route-coastwise',
        title: 'Coastwise hop',
        body: 'Two days along the coast with a night at anchor between them, kept inside the headland so the water never builds.',
        image: shot('card-1', 800, 600),
      },
      {
        id: 'route-bay',
        title: 'Bay crossing',
        body: 'One full day across the bay and back, which is the first passage where the far shore disappears for an hour.',
        image: shot('card-2', 800, 600),
      },
      {
        id: 'route-ria',
        title: 'Ría run',
        body: 'A half day up the estuary and back, at its best with the tide under the boat on both legs.',
        image: shot('card-3', 800, 600),
      },
    ],
  },
]
