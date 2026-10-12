/**
 * Every destination and every line of copy the Navpill page renders, plus the one
 * navigation model that both the desktop row and the off-canvas panel are built
 * from.
 */

export const SITE_NAME = 'Navpill'

export const PAGE_TITLE = 'Navpill — Floating Header Template'

export const FOOTER_NOTE = 'A transparent header, one frame-filling photograph, six pill labels.'

export const DOCK_URL = 'https://www.componentdock.com/'

export const DOCK_LABEL = 'Component Dock'

/** The band's single photographic surface (deterministic placeholder seed). */
export const HERO_PHOTO = 'https://picsum.photos/seed/navpill-hero/1900/1710'

/** The id the toggle points at and the panel answers to. */
export const MENU_ID = 'navpill-menu'

/** Below this width the desktop row hands over to the toggle (the row's own step). */
export const ROW_BREAKPOINT = 1200

/** Above this width an open panel closes itself again (the reference's own threshold). */
export const PANEL_RESIZE_WIDTH = 768

interface NavLeaf {
  label: string
  href: string
  /** The current destination: carried as `aria-current` and drawn as a filled pill. */
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
 * The six-item row — one source of truth for the desktop row and the off-canvas
 * panel. It keeps the reference's shape: one current item, one two-level menu
 * (four rows, the last of which opens four more), and four plain items.
 */
export const NAV: NavNode[] = [
  { label: 'Home', href: '#top', current: true },
  {
    label: 'Explore',
    href: '#explore',
    children: [
      { label: 'Overview', href: '#overview', current: true },
      { label: 'Guides', href: '#guides' },
      { label: 'Pricing', href: '#pricing' },
      {
        label: 'Resources',
        href: '#resources',
        children: [
          { label: 'Documentation', href: '#documentation' },
          { label: 'Changelog', href: '#changelog' },
          { label: 'Support', href: '#support' },
          { label: 'Status', href: '#status' },
        ],
      },
    ],
  },
  { label: 'Showcase', href: '#showcase' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]
