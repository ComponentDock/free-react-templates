/**
 * Every string the page renders. The hero's fold is content-driven — the
 * headline's balance wrap, the three-line lede and the three-row issue list are
 * what hold the measured boxes at 1440 — so the copy lives in one file and no
 * component owns a string of its own.
 */

/** The marketplace every closing link points at (the template's only outbound). */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The `h1`'s id — the section is labelled by the headline it contains, and it
 * is also where the bar's wordmark and most links land. */
export const HEADLINE_ID = 'epistle-title'

/** The disclosure panel's id — what the menu button's `aria-controls` points at. */
export const NAV_ID = 'epistle-nav'

/** The field's id and the two ids its `aria-describedby` names. */
export const EMAIL_ID = 'epistle-email'
export const HINT_ID = 'epistle-hint'
export const ERROR_ID = 'epistle-error'

/** The wordmark is a coral italic article plus the name: two nodes, one line. */
export const THE = 'The'
export const BRAND = 'Epistle'

export const WORDMARK_HREF = `#${HEADLINE_ID}`

export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' } as const

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Latest', href: `#${HEADLINE_ID}`, current: true },
  { label: 'Archive', href: `#${HEADLINE_ID}` },
  { label: 'About', href: `#${HEADLINE_ID}` },
  { label: 'Sponsor', href: `#${HEADLINE_ID}` },
]

/** The white pill above the headline: a ringed coral dot and the next issue. */
export const ISSUE_PILL = 'Issue #214 lands this Sunday'

/**
 * The headline is one `<h1>` with two runs — a bare text node and a coral `<em>`
 * on a highlighter band. The string is unchanged from the reference because the
 * 4/2/3/4 line ladder is keyed to exactly these words.
 */
export const HEADLINE = {
  lead: 'One thoughtful email about product design,',
  accent: 'every Sunday.',
} as const

export const LEDE =
  'Case studies, interface teardowns and a hand-picked reading list from working designers. Five minutes with your coffee, then back to your weekend.'

export const FORM = {
  label: 'Email address',
  placeholder: 'you@studio.com',
  submit: 'Subscribe free',
  hint: 'One email a week. Unsubscribe with one click.',
} as const

/** The two client-side messages. Both are derived from the field's value. */
export const MESSAGES = {
  empty: 'Please enter your email address.',
  incomplete: 'That email looks incomplete. Try something like name@studio.com.',
} as const

export const SUCCESS = {
  strong: 'You are on the list. ',
  /** The confirmation names the address it was sent to. */
  rest: (email: string) =>
    `We sent a confirmation link to ${email}. Issue #214 arrives Sunday morning.`,
} as const

export interface Avatar {
  readonly initials: string
  /** The disc's fill; the ink that sits on it is picked per tone. */
  readonly tone: 'amber' | 'sky' | 'violet' | 'emerald'
}

export const AVATARS: readonly Avatar[] = [
  { initials: 'AK', tone: 'amber' },
  { initials: 'JM', tone: 'sky' },
  { initials: 'SL', tone: 'violet' },
  { initials: 'RD', tone: 'emerald' },
]

export const READERS = {
  lead: 'Read by',
  count: '18,400',
  tail: ' designers at studios and startups',
} as const

/** The mock issue inside the front card. */
export const CARD = {
  badge: 'TE',
  name: BRAND,
  meta: 'Issue #213 · 6 min read',
  title: 'Why good empty states feel like a conversation',
} as const

export interface IssueItem {
  /** The coral numeral. */
  readonly n: string
  readonly text: string
}

export const ISSUE_ITEMS: readonly IssueItem[] = [
  { n: '01', text: 'Teardown: onboarding in a budgeting app' },
  { n: '02', text: 'The 8px grid is a habit, not a law' },
  { n: '03', text: 'Five portfolios we loved this month' },
]

/** The mint disc, two lines. */
export const STICKER = ['Free', 'forever'] as const

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const
