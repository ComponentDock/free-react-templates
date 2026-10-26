/**
 * Every string the page renders. The hero's fold is content-driven — the
 * headline's two nodes, the three-line lede and the three facts are what hold
 * the measured boxes at 1440 — so the copy lives in one file and no component
 * owns a string of its own.
 */

/** The marketplace every closing link points at (the template's only outbound). */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The `h1`'s id — the section is labelled by the headline it contains, and it
 * is also where every in-page link lands (the page has no second section). */
export const HEADLINE_ID = 'tendril-title'

export const HERO_ID = HEADLINE_ID

/** The panel's id — what the menu button's `aria-controls` points at. */
export const NAV_ID = 'tendril-nav'

export const BRAND = 'Tendril'

export const WORDMARK_HREF = `#${HERO_ID}`

export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' } as const

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Features', href: `#${HERO_ID}`, current: true },
  { label: 'Tendril Plus', href: `#${HERO_ID}` },
  { label: 'Stories', href: `#${HERO_ID}` },
  { label: 'Help', href: `#${HERO_ID}` },
]

export const RATING = {
  score: '4.9',
  /** Decorative: the chip already carries the value for assistive tech. */
  stars: '★★★★★',
  count: 'from 38,000 ratings',
} as const

/**
 * The headline is two nodes, never one sentence: a bare text line and a
 * block-level span in the accent colour. That is what keeps it at exactly two
 * lines from 1440 down to 320.
 */
export const HEADLINE = {
  lead: 'Small habits,',
  accent: 'tracked kindly.',
} as const

export const LEDE =
  'Tendril is a calm habit tracker with gentle reminders, streaks that forgive a missed day, and weekly check-ins that show how far you have come.'

/** The toast is decorative, so its claim is repeated here for screen readers. */
export const STREAK_NOTE = 'Priya is on a 42-day streak.'

export interface Store {
  readonly top: string
  readonly name: string
  readonly href: string
  /** The icon is a generic stroke, not a trademark. */
  readonly icon: 'phone' | 'play'
}

export const STORES: readonly Store[] = [
  { top: 'Download on the', name: 'App Store', href: COMPONENT_DOCK_URL, icon: 'phone' },
  { top: 'Get it on', name: 'Google Play', href: COMPONENT_DOCK_URL, icon: 'play' },
]

export interface Fact {
  /** The emphasised run, in ink. */
  readonly strong: string
  /** The muted tail, including its leading punctuation. */
  readonly rest: string
}

export const FACTS: readonly Fact[] = [
  { strong: 'Free', rest: ' for 5 habits' },
  { strong: 'Offline', rest: ' first, synced later' },
  { strong: 'No ads', rest: ', ever' },
]

export const GREETING = 'Good morning, Priya'

export const AVATAR = 'P'

export interface DayCell {
  readonly label: string
  readonly date: string
  /** Today's cell is inverted to ink. */
  readonly today?: boolean
}

export const DAYS: readonly DayCell[] = [
  { label: 'Mo', date: '21' },
  { label: 'Tu', date: '22' },
  { label: 'We', date: '23', today: true },
  { label: 'Th', date: '24' },
  { label: 'Fr', date: '25' },
]

export const RING = { done: '5/7', total: 'done', progress: '71%' } as const

export const RING_NOTE = { strong: 'Nice pace.', rest: 'Two to go before bedtime.' } as const

export interface Habit {
  readonly label: string
  readonly done: boolean
}

export const HABITS: readonly Habit[] = [
  { label: 'Drink 2 L of water', done: true },
  { label: 'Read 20 pages', done: true },
  { label: 'Morning walk', done: true },
  { label: 'Stretch 10 minutes', done: false },
  { label: 'Phone down by 22:00', done: false },
]

/** The stats screen's seven bars, as fractions of the chart's height. */
export const WEEK: readonly string[] = ['.6', '.85', '.7', '1', '.9', '.45', '.75']

export const WEEK_DAYS: readonly string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export const STREAK = { label: 'This week', value: '42', sub: 'day streak' } as const

export const TOAST = '\u{1F389} 42-day streak!'

export const VISUAL_LABEL =
  "Two phones showing the Tendril app: today's habit list with 5 of 7 habits done, and a 42-day streak summary"

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const
