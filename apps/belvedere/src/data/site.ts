/**
 * Every string, id and destination the screen renders. The page's arithmetic is
 * content-driven — the headline's balanced 4/2/3/4-line breaks, the intro's
 * two lines at 1440 and the meta band's row count all key off exactly these
 * words — so the copy lives in one file and no component owns a string.
 */

/** The marketplace every outbound link points at. */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The shell's own anchor: the wordmark and the current nav pill go "home" to it. */
export const TOP_ID = 'top'

/** The section is labelled by its own headline. */
export const TITLE_ID = 'belvedere-title'

/** The bio paragraph — the "About" pill's destination (the screen has no second page). */
export const ABOUT_ID = 'about'

/** The meta band — the "Notes" pill's destination. */
export const NOTES_ID = 'notes'

/** The wordmark: a monogram disc plus one lowercase studio name. */
export const BRAND = { mark: 'B', name: 'belvedere' } as const

export const WORDMARK_HREF = `#${TOP_ID}`

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Work', href: `#${TOP_ID}`, current: true },
  { label: 'About', href: `#${ABOUT_ID}` },
  { label: 'Notes', href: `#${NOTES_ID}` },
]

/** The intro line above the headline: 500 weight, muted, 2 lines at 1440. */
export const INTRO = 'Hi, I’m Wren — product designer & front-end developer in Utrecht, NL.'

/**
 * One `<h1>` in three runs: the sentence, the one highlighted phrase inside it
 * (a real `<mark>`), and the rest. The mark is the only yellow ground on the
 * copy side of the page.
 */
export const HEADLINE = {
  before: 'I design and build ',
  highlight: 'calm interfaces',
  after: ' for health and climate teams.',
} as const

/** Three sentences, three lines at 1440 — capped at 34em, never the full column. */
export const BIO =
  'Eight years of turning tangled workflows into software people enjoy opening. I work from the first sketch to the production component library, and I like small teams that ship every week.'

export const EMAIL = 'hello@belvedere.design'

/** The filled CTA dials the address; the ghost one asks for the CV by mail. */
export const PRIMARY_CTA = { label: EMAIL, href: `mailto:${EMAIL}` } as const

export const CV_CTA = {
  label: 'Download CV',
  meta: '(PDF, 120 KB)',
  href: `mailto:${EMAIL}?subject=CV%20request`,
} as const

export type SocialIcon = 'code' | 'pen' | 'camera' | 'user'

export interface SocialLink {
  readonly label: string
  readonly href: string
  readonly icon: SocialIcon
}

/** Four tiles, all real external profiles — the reference leaves every one dead. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'Code repositories', href: 'https://github.com', icon: 'code' },
  { label: 'Writing and notes', href: 'https://dev.to', icon: 'pen' },
  { label: 'Photography', href: 'https://unsplash.com', icon: 'camera' },
  { label: 'Professional profile', href: 'https://www.linkedin.com', icon: 'user' },
]

export interface Stat {
  readonly label: string
  readonly value: string
}

/** Three `dt`/`dd` pairs: the page's only data, and its smallest type. */
export const STATS: readonly Stat[] = [
  { label: 'Experience', value: '8 years' },
  { label: 'Shipped', value: '40+ products' },
  { label: 'Now', value: 'Studio Kestrel' },
]

/** The pill across the portrait's foot. The dot beside it is decorative. */
export const STATUS = 'Available for work from January'

/** The portrait: a deterministic placeholder, never a bundled asset. */
export const PORTRAIT = {
  src: 'https://picsum.photos/seed/belvedere-1/1200/1500',
  width: 1200,
  height: 1500,
  alt: 'Portrait of the designer, standing by the water',
} as const

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const
