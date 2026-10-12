/**
 * Every destination and every line of copy the Larboard page renders, plus the
 * one navigation model the sidebar is built from — the page has exactly one nav
 * source of truth, and the header only carries the toggle that opens it.
 */

export const SITE_NAME = 'Larboard'

export const PAGE_TITLE = 'Larboard — Left Sidebar Menu Template'

export const FOOTER_NOTE =
  'A full-bleed photograph, one white hamburger on the left, five sidebar rows.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/larboard-hero/1920/1080'

/** The id the toggle points at and the sidebar answers to. */
export const MENU_ID = 'larboard-menu'

/**
 * How far a target is kept clear of the floating header when it is scrolled to,
 * in px (7rem = 112px, comfortably past the header's 24px padding plus a 48px
 * click target).
 */
export const HEADER_OFFSET = 112

export interface NavItem {
  label: string
  href: string
  /** The current destination: carried as `aria-current` and drawn in brand blue. */
  current?: boolean
}

/**
 * The five flat rows of the sidebar, in the source's order. This variant has no
 * dropdowns, no sub-levels and no social links — one current row (home) and four
 * plain ones.
 */
export const NAV: NavItem[] = [
  { label: 'Home', href: '#home', current: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface Panel {
  id: string
  eyebrow: string
  heading: string
  body: string
}

/**
 * The five targets the menu declares, materialised as labelled panels inside the
 * one band so that no row is a dead link. Same order as `NAV`.
 */
export const PANELS: Panel[] = [
  {
    id: 'home',
    eyebrow: 'Start here',
    heading: 'One panel, opened from the left',
    body: 'The photograph fills the first frame on its own: a wordmark on the right, one hamburger on the left, and nothing else asking for attention.',
  },
  {
    id: 'about',
    eyebrow: 'Our story',
    heading: 'A two-person studio that designs in the open',
    body: 'We keep our layouts square and honest, letting a single brand blue carry the hierarchy over any photograph.',
  },
  {
    id: 'services',
    eyebrow: 'What we do',
    heading: 'Offerings shaped around the frame',
    body: 'Art direction, interface design and a wordmark that stays legible where the image turns bright.',
  },
  {
    id: 'blog',
    eyebrow: 'Field notes',
    heading: 'Notes from the drawing board',
    body: 'Short pieces on left-hand drawers, focus return, and keeping a photograph-led page honest at 320px.',
  },
  {
    id: 'contact',
    eyebrow: 'Say hello',
    heading: 'Tell us what you are building',
    body: 'Send a line about the design you have in mind and we will answer with a scope, a plan and a date.',
  },
]
