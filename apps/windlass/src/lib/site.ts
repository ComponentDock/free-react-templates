/**
 * Every destination and every line of copy the Windlass page renders, plus the single model
 * the chrome is built from: one list of five rows and one list of four platform links. The
 * same two lists are handed to whichever presentation the width calls for, so the wide card
 * and the collapsing panel can never drift apart from each other.
 */

export const SITE_NAME = 'Windlass'

export const PAGE_TITLE = 'Windlass — Right-Aligned Navbar Template'

/** The band's own heading, above the card. */
export const BAND_HEADING_ID = 'windlass-band-heading'

export const BAND_HEADING = 'Drum, chain and brake'

export const FOOTER_NOTE = 'One white card, five right-aligned rows and four circles at its end.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The label the card's own landmark carries. */
export const PRIMARY_NAV_LABEL = 'Primary navigation'

/** The label the collapsing panel's landmark carries. */
export const PANEL_NAV_LABEL = 'Sections'

/** The word the toggler shows next to its glyph. */
export const TOGGLER_LABEL = 'Browse'

/** The card's wide list, so the panel and the toggler can both point at it. */
export const DESKTOP_NAV_ID = 'windlass-nav'

/** The collapsing panel's own id, which is what the toggler controls. */
export const PANEL_ID = 'windlass-panel'

/** The toggler's id, so the panel it opens can be labelled by it. */
export const TOGGLER_ID = 'windlass-toggler'

/**
 * How far a target is kept clear when it is scrolled to, in px: the card's own height (84px
 * above 992px, 66px below) plus a little air, because the card sits in the flow and is never
 * pinned.
 */
export const HEADER_OFFSET = 80

/** A deterministic placeholder for one picture inside a section. */
export function shot(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/windlass-${seed}/${width}/${height}`
}

export interface NavItem {
  label: string
  href: string
  /** The destination already open: carried as `aria-current` and marked in the row. */
  current: boolean
}

/**
 * The five rows the card renders, in the design's order: the destination already open and
 * four plain ones. Every label is the app's own word for a part of the winch.
 */
export const NAV: NavItem[] = [
  { label: 'Drum', href: '#drum', current: true },
  { label: 'Chain', href: '#chain', current: false },
  { label: 'Brake', href: '#brake', current: false },
  { label: 'Hatch', href: '#hatch', current: false },
  { label: 'Signal', href: '#signal', current: false },
]

/** Every in-page destination the chrome declares, in the order the card shows them. */
export function allDestinations(): string[] {
  return NAV.map((item) => item.href)
}

/** The four platforms the card carries; the platform is also the link's accessible name. */
export type Platform = 'Facebook' | 'Twitter' | 'Instagram' | 'Dribbble'

export interface SocialItem {
  label: Platform
  href: string
}

/**
 * The four platform links the card carries, in the design's order: every one of them a real
 * profile rather than the design's dead anchors.
 */
export const SOCIAL: SocialItem[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/componentdock' },
  { label: 'Twitter', href: 'https://twitter.com/componentdock' },
  { label: 'Instagram', href: 'https://www.instagram.com/componentdock' },
  { label: 'Dribbble', href: 'https://dribbble.com/componentdock' },
]

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
 * The five destinations the card declares, every one of them materialised so no row is a
 * dead link: the drum the page is on, the chain it hauls, the brake, the hatch it is stowed
 * behind, and the signal that reaches the deck.
 */
export const SECTIONS: Section[] = [
  {
    id: 'drum',
    eyebrow: 'Drum',
    heading: 'Where the line comes aboard',
    body: 'A horizontal drum on the foredeck: two or three turns of line, a pawl that catches, and the load lands where it was meant to. Everything on the card above starts here.',
    items: [
      {
        title: 'Two turns are enough',
        body: 'The drum is turned by hand for the last fathom, so the line is felt rather than guessed at.',
        image: shot('drum-1', 800, 600),
      },
      {
        title: 'A pawl you can hear',
        body: 'The catch is audible over the wind, which is how the deck knows the load is held.',
      },
      {
        title: 'Serviced every winter',
        body: 'Stripped, washed, greased and put back before the first of the season.',
        image: shot('drum-2', 800, 600),
      },
    ],
  },
  {
    id: 'chain',
    eyebrow: 'Chain',
    heading: 'A hundred fathoms, stowed',
    body: 'Calibrated chain marked every five fathoms, kept in a locker that drains, with the bitter end made fast where it can be reached in one move.',
    items: [
      {
        title: 'Marked every five',
        body: 'Paint at five, ten and twenty fathoms, so the depth on the sounder can be read from the deck.',
      },
      {
        title: 'A locker that drains',
        body: 'Sited so the wash runs aft rather than into the chain it is meant to keep dry.',
        image: shot('chain-1', 800, 600),
      },
      {
        title: 'The bitter end',
        body: 'Made fast inside the locker with the slack to reach it, never against the hull.',
      },
    ],
  },
  {
    id: 'brake',
    eyebrow: 'Brake',
    heading: 'Held, then let go',
    body: 'A band brake that holds more than the drum can haul, released by hand rather than by leverage, so the line pays out at the speed the deck asks for.',
    items: [
      {
        title: 'Holds more than it hauls',
        body: 'The brake is rated above the drum, so a surge is stopped rather than ridden out.',
      },
      {
        title: 'Pays out by hand',
        body: 'Everything is let go by feel, one band at a time.',
        image: shot('brake-1', 800, 600),
      },
      {
        title: 'Replaced rather than patched',
        body: 'A band that has slipped twice is lifted off and a new one fitted the same week.',
      },
    ],
  },
  {
    id: 'hatch',
    eyebrow: 'Hatch',
    heading: 'The store under the foredeck',
    body: 'Where the drum sleeps through the winter: line, shackles, spare paws and the ledger of what went over the side, kept together and written down.',
    items: [
      {
        title: 'Line, by the length',
        body: 'Cut to the deck that asked, not to the coil it arrived in.',
      },
      {
        title: 'Spares that fit this drum',
        body: 'One pawl, one band and the pins to hold both.',
        image: shot('hatch-1', 800, 600),
      },
      {
        title: 'The ledger',
        body: 'What was fitted, when it was lifted and how long it lasted.',
      },
    ],
  },
  {
    id: 'signal',
    eyebrow: 'Signal',
    heading: 'How the drum reaches you',
    body: 'The card carries four circles to the places the yard writes on. Each one leaves the page for a real profile, and the same four are listed here for anyone reading on a phone.',
    items: [
      {
        title: 'Written where the yard writes',
        body: 'Four platforms, one voice, and no account that goes quiet for a season.',
      },
      {
        title: 'One answer a day',
        body: 'A question left on any of the four is answered before the next tide.',
      },
    ],
  },
]
