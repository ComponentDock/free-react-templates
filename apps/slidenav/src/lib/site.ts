/** Every destination and every line of copy the Slidenav page renders. */

export const SITE_NAME = 'Slidenav'

export const FOOTER_NOTE = 'One flat band, one accent, and every link lands somewhere.'

export interface NavItem {
  label: string
  href: string
  /** The current section: carries `aria-current` and the scaled-up underline. */
  current?: boolean
}

/**
 * The six-item row — one source of truth for the desktop row and the off-canvas
 * panel, in the same order the band's panels appear in.
 */
export const NAV: NavItem[] = [
  { label: 'Home', href: '#home', current: true },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

/** How a panel's body is laid out. */
export type PanelKind = 'lead' | 'photos' | 'story' | 'offerings' | 'posts' | 'contact'

export interface PanelItem {
  title: string
  note: string
  meta?: string
  photo?: string
  href?: string
}

export interface PanelAction {
  label: string
  href: string
  variant: 'primary' | 'outline'
}

export interface Panel {
  id: string
  kind: PanelKind
  eyebrow: string
  heading: string
  intro: string
  items: PanelItem[]
  actions?: PanelAction[]
}

function photo(seed: string): string {
  return `https://picsum.photos/seed/slidenav-${seed}/800/600`
}

/**
 * The band's six landing panels, in the order the navigation reaches them. Every
 * menu row points at one of these ids, so no destination is a dead anchor.
 */
export const PANELS: Panel[] = [
  {
    id: 'home',
    kind: 'lead',
    eyebrow: 'Slidenav',
    heading: 'A transparent header over one flat band, and nothing else in the way',
    intro:
      'The page keeps a single coral canvas so the navigation is the thing you look at: a wordmark, six links, and a white underline that scales in under the current one. Below 992px the row hands over to a panel that slides in from the right.',
    items: [],
    actions: [
      { label: 'See the portfolio', href: '#portfolio', variant: 'primary' },
      { label: 'Get in touch', href: '#contact', variant: 'outline' },
    ],
  },
  {
    id: 'portfolio',
    kind: 'photos',
    eyebrow: 'Portfolio',
    heading: 'Placeholder frames, deterministic seeds',
    intro: 'Every image is a seeded placeholder — nothing is copied from any design.',
    items: [
      { title: 'Band corner', note: '', photo: photo('1') },
      { title: 'Open panel', note: '', photo: photo('2') },
      { title: 'Underline', note: '', photo: photo('3') },
      { title: 'Drawer over veil', note: '', photo: photo('4') },
    ],
  },
  {
    id: 'about',
    kind: 'story',
    eyebrow: 'About',
    heading: 'Built as a navigation study, not a content dump',
    intro:
      'One canvas, one accent, square corners throughout. The structure, spacing and type follow the reference exactly; everything else stays deliberately quiet.',
    items: [
      {
        title: 'One breakpoint',
        note: 'The row and the drawer hand over at 992px, so the two never fight each other.',
      },
      {
        title: 'Four close paths',
        note: 'The glyph, the veil, Escape and a wide viewport all dismiss the panel and hand focus back.',
      },
      {
        title: 'No pinned bar',
        note: 'The header is absolute and scrolls away with the band — nothing is added that the design does not do.',
      },
    ],
  },
  {
    id: 'services',
    kind: 'offerings',
    eyebrow: 'Services',
    heading: 'What the layout is set up to carry',
    intro: 'The panels are thin on purpose — each one is a landing slot you can fill.',
    items: [
      { title: 'Navigation systems', note: 'Row, drawer and anchor targets specified up front.' },
      { title: 'Off-canvas patterns', note: 'A 300px drawer with one consistent threshold.' },
      { title: 'Design tokens', note: 'One coral band and one accent, documented as tokens.' },
    ],
  },
  {
    id: 'blog',
    kind: 'posts',
    eyebrow: 'Blog',
    heading: 'Notes on navigation that behaves',
    intro: 'Three short reads on underlines, drawers and focus order.',
    items: [
      {
        title: 'An underline that scales in',
        note: 'Why a transform beats a fade for a current-page marker.',
        meta: '5 min',
        photo: photo('blog-1'),
      },
      {
        title: 'One breakpoint instead of two',
        note: 'Reconciling a row and a drawer that disagreed.',
        meta: '4 min',
        photo: photo('blog-2'),
      },
      {
        title: 'Square corners are a system',
        note: 'Keeping one radius across a whole page.',
        meta: '3 min',
        photo: photo('blog-3'),
      },
    ],
  },
  {
    id: 'contact',
    kind: 'contact',
    eyebrow: 'Contact',
    heading: 'Say hello, or take the structure',
    intro: 'One address and one number, both answered the same week.',
    items: [
      {
        title: 'E-mail',
        note: 'hello@slidenav.example',
        href: 'mailto:hello@slidenav.example',
      },
      { title: 'Phone', note: '+1 555 0177', href: 'tel:+15550177' },
    ],
  },
]
