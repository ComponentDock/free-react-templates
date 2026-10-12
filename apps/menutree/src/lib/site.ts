/** Every destination and every line of copy the Menutree page renders. */

export const SITE_NAME = 'Menutree'

export const FOOTER_NOTE = 'Navigation-first layout, one accent, no clutter.'

/** A single menu row. Parent rows own `children` and open a panel. */
export interface NavLeaf {
  label: string
  href: string
}

export interface NavParent extends NavLeaf {
  children: NavNode[]
}

export type NavNode = NavLeaf | NavParent

/** True for a row that opens a panel. */
export function isParent(node: NavNode): node is NavParent {
  return 'children' in node
}

/**
 * The page's navigation tree — the one source of truth shared by the desktop row
 * and the off-canvas panel. Order is document order of the band's targets, so
 * the primary row reads Home · About · Blog · Contact while the drop-down under
 * "About" carries the remaining seven destinations, one of which ("More") owns a
 * third level.
 */
export const NAV: NavNode[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'Team', href: '#team' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      {
        label: 'More',
        href: '#about',
        children: [
          { label: 'Photo tour', href: '#gallery' },
          { label: 'Plan compare', href: '#pricing' },
          { label: 'Questions', href: '#faq' },
        ],
      },
    ],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export type BrandName = 'Facebook' | 'X' | 'LinkedIn'

export interface SocialLink {
  label: BrandName
  href: string
}

export const SOCIALS: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

export type PanelId =
  | 'home'
  | 'about'
  | 'team'
  | 'pricing'
  | 'faq'
  | 'gallery'
  | 'services'
  | 'testimonials'
  | 'blog'
  | 'contact'

/** How a panel's body is laid out. */
export type PanelKind =
  | 'lead'
  | 'people'
  | 'plans'
  | 'questions'
  | 'photos'
  | 'offerings'
  | 'quotes'
  | 'posts'
  | 'contact'

export interface PanelItem {
  title: string
  note: string
  meta?: string
  photo?: string
  href?: string
}

export interface Panel {
  id: PanelId
  kind: PanelKind
  eyebrow: string
  heading: string
  intro: string
  items: PanelItem[]
}

function photo(seed: string): string {
  return `https://picsum.photos/seed/menutree-${seed}/800/600`
}

/**
 * The band's ten landing panels, in the order the navigation reaches them. Every
 * menu row points at one of these ids, so no destination is a dead anchor.
 */
export const PANELS: Panel[] = [
  {
    id: 'home',
    kind: 'lead',
    eyebrow: 'Menutree',
    heading: 'One menu, four levels deep, and every row lands somewhere',
    intro:
      'A transparent header over a single flat band: drop-downs open on hover or focus, the third level flies out to the right, and the whole row hands over to a slide-in panel on small screens.',
    items: [],
  },
  {
    id: 'about',
    kind: 'lead',
    eyebrow: 'About',
    heading: 'Built as a navigation study, not a content dump',
    intro:
      'The page keeps one canvas and one accent so the menu is the thing you look at. Structure, spacing and typography follow the reference exactly; everything else stays deliberately quiet.',
    items: [],
  },
  {
    id: 'team',
    kind: 'people',
    eyebrow: 'Team',
    heading: 'Four people behind the structure',
    intro: 'Small crew, one job each, all of them happy to be named.',
    items: [
      { title: 'Wren Halloway', note: 'Interaction design lead.', meta: 'Design' },
      { title: 'Ira Demir', note: 'Builds the shared component layer.', meta: 'Engineering' },
      { title: 'Noor Belhaj', note: 'Writes the copy that fills every panel.', meta: 'Content' },
      { title: 'Piet Aleman', note: 'Keeps the accessibility audit honest.', meta: 'QA' },
    ],
  },
  {
    id: 'pricing',
    kind: 'plans',
    eyebrow: 'Pricing',
    heading: 'Three plans, no tiers hiding behind a call',
    intro: 'Flat monthly pricing with the same navigation in every plan.',
    items: [
      { title: 'Single', note: 'One site, one menu, one accent colour.', meta: '$0 / month' },
      {
        title: 'Studio',
        note: 'Unlimited sites with a shared component layer.',
        meta: '$12 / month',
      },
      {
        title: 'Agency',
        note: 'Hand-off files, design tokens and a documented API.',
        meta: '$29 / month',
      },
    ],
  },
  {
    id: 'faq',
    kind: 'questions',
    eyebrow: 'FAQ',
    heading: 'Questions the menu usually raises',
    intro: 'The four things people ask before dropping a navigation system in.',
    items: [
      {
        title: 'Does the drop-down work without a mouse?',
        note: 'Yes. Focusing a parent row opens its panel and Escape closes it and returns focus.',
      },
      {
        title: 'Can the third level go off-screen?',
        note: 'Not at the width it is shown — the desktop row only exists from 1200px up, where the flyout fits.',
      },
      {
        title: 'What substitutes the icon font?',
        note: 'Inline SVG glyphs from the shared icon set, so no webfont is downloaded for chrome.',
      },
      {
        title: 'How tall is the band?',
        note: 'It fills the viewport and grows with its panels, so scrolling and the sticky bar stay demonstrable.',
      },
    ],
  },
  {
    id: 'gallery',
    kind: 'photos',
    eyebrow: 'Gallery',
    heading: 'Placeholder frames, deterministic seeds',
    intro: 'Every image is a seeded placeholder — nothing is copied from any design.',
    items: [
      { title: 'Band corner', note: '', photo: photo('gallery-1') },
      { title: 'Open panel', note: '', photo: photo('gallery-2') },
      { title: 'Third level', note: '', photo: photo('gallery-3') },
      { title: 'Drawer over veil', note: '', photo: photo('gallery-4') },
    ],
  },
  {
    id: 'services',
    kind: 'offerings',
    eyebrow: 'Services',
    heading: 'What the layout is set up to carry',
    intro: 'The panels are thin on purpose — each one is a landing slot you can fill.',
    items: [
      {
        title: 'Navigation systems',
        note: 'Multi-level rows, focus order and state all specified up front.',
      },
      {
        title: 'Off-canvas patterns',
        note: 'A 300px drawer with one expansion control per parent row.',
      },
      {
        title: 'Sticky headers',
        note: 'A transparent bar that pins to a solid surface once you scroll.',
      },
    ],
  },
  {
    id: 'testimonials',
    kind: 'quotes',
    eyebrow: 'Testimonials',
    heading: 'What teams say after shipping it',
    intro: 'Two short notes from people who replaced a plugin menu with this row.',
    items: [
      {
        title: '"The keyboard path was the surprise."',
        note: 'Wren Halloway, interaction design lead',
        meta: 'Studio',
      },
      {
        title: '"Half the markup, all of the structure."',
        note: 'Ira Demir, engineering lead',
        meta: 'Agency',
      },
    ],
  },
  {
    id: 'blog',
    kind: 'posts',
    eyebrow: 'Blog',
    heading: 'Notes on menus that behave',
    intro: 'Three short reads on navigation, states and focus.',
    items: [
      {
        title: 'Hover is not the whole story',
        note: 'Why every pointer path needs a keyboard twin.',
        meta: '6 min',
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
        note: 'Keeping one radius in a whole page.',
        meta: '3 min',
        photo: photo('blog-3'),
      },
    ],
  },
  {
    id: 'contact',
    kind: 'contact',
    eyebrow: 'Contact',
    heading: 'Say hello, or steal the structure',
    intro: 'One address and one line, both answered the same week.',
    items: [
      { title: 'E-mail', note: 'hello@menutree.example', href: 'mailto:hello@menutree.example' },
      { title: 'Phone', note: '+1 555 0142', href: 'tel:+15550142' },
    ],
  },
]
