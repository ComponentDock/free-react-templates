/**
 * Every destination and every line of copy the Menuribbon page renders, plus the
 * one navigation model that both the desktop row and the off-canvas panel are
 * built from.
 */

export const SITE_NAME = 'Menuribbon'

export const PAGE_TITLE = 'Menuribbon — Sticky Utility Bar Template'

export const FOOTER_NOTE = 'A grey utility bar, one blue wordmark, one pinned header.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/menuribbon-hero/1900/1710'

/** The id the toggle points at and the panel answers to. */
export const MENU_ID = 'menuribbon-menu'

/** Above this width an open panel closes itself again (the reference's own threshold). */
export const PANEL_RESIZE_WIDTH = 768

/** The utility bar's two contact destinations. */
export const CONTACT_EMAIL = 'hello@menuribbon.dev'

export const CONTACT_PHONE = '+1 (415) 555 0132'

/** The utility bar's two social destinations, drawn as inline brand glyphs. */
export const SOCIAL_LINKS = [
  { label: 'Twitter', href: '#twitter', icon: 'twitter' },
  { label: 'Facebook', href: '#facebook', icon: 'facebook' },
] as const

interface NavLeaf {
  label: string
  href: string
  /** The current destination: carried as `aria-current` and drawn in accent. */
  current?: boolean
}

export interface NavParent {
  label: string
  href: string
  current?: boolean
  children: NavNode[]
}

export type NavNode = NavLeaf | NavParent

/**
 * A node's shape is carried by the presence of `children`, so the recursion in
 * both navigations can be narrowed by this guard instead of by a fallback arm.
 */
export function isParent(node: NavNode): node is NavParent {
  return 'children' in node
}

/**
 * The seven-item row — one source of truth for the desktop row and the off-canvas
 * panel. It keeps the reference's shape: one current item, one two-level menu
 * (four rows, the last of which opens three more) and five plain items.
 */
export const NAV: NavNode[] = [
  { label: 'Home', href: '#top', current: true },
  { label: 'Services', href: '#services' },
  {
    label: 'About Us',
    href: '#about',
    children: [
      { label: 'Our Team', href: '#team', current: true },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      {
        label: 'More',
        href: '#more',
        children: [
          { label: 'Careers', href: '#careers' },
          { label: 'Press', href: '#press' },
          { label: 'Partners', href: '#partners' },
        ],
      },
    ],
  },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]
