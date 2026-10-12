/**
 * Every destination and every line of copy the Starboard page renders, plus the
 * one navigation model that the sidebar is built from (the page has exactly one
 * nav source of truth — the header only carries the toggle that opens it).
 */

export const SITE_NAME = 'Starboard'

export const PAGE_TITLE = 'Starboard — Sidebar Menu Template'

export const FOOTER_NOTE = 'A transparent header, one frame-filling photograph, five sidebar rows.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/starboard-hero/1920/1080'

/** The id the toggle points at and the sidebar answers to. */
export const MENU_ID = 'starboard-menu'

/**
 * How far a target is kept clear of the floating header when it is scrolled to,
 * in px (7rem = 112px, comfortably past the header's measured ~90px box).
 */
export const HEADER_OFFSET = 112

export interface NavItem {
  label: string
  href: string
  /** The current destination: carried as `aria-current` and drawn in brand blue. */
  current?: boolean
}

/**
 * The five flat rows of the sidebar. This variant has no dropdowns, no
 * sub-levels and no social links — one current row (home) and four plain ones.
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
    heading: 'One sidebar, every width',
    body: 'The photograph is the whole first frame: a wordmark and a single white hamburger, nothing else competing for the eye.',
  },
  {
    id: 'about',
    eyebrow: 'Our story',
    heading: 'A small studio with a sharp eye',
    body: 'We build calm, square-edged layouts where one brand blue accent carries the whole hierarchy.',
  },
  {
    id: 'services',
    eyebrow: 'What we do',
    heading: 'Offerings built around the frame',
    body: 'Art direction, interface design and a mark that stays legible on a brand blue accent over any photograph.',
  },
  {
    id: 'blog',
    eyebrow: 'Field notes',
    heading: 'Posts from the workbench',
    body: 'Short write-ups on off-canvas navigation, focus handling and keeping a layout honest at 320px.',
  },
  {
    id: 'contact',
    eyebrow: 'Say hello',
    heading: 'Start a conversation',
    body: 'Tell us about the design you are recreating and we will come back with a plan, a scope and a date.',
  },
]
