/** The four tones of a notice, in the order the panel prints them. */
export type Tone = 'violet' | 'green' | 'amber' | 'rose'

/** The two colours one tone needs: the glyph and the tile it sits on. */
export interface ToneTokens {
  /** The 20 px glyph — and nothing else. */
  tone: string
  /** The 40 px icon tile's ground. */
  soft: string
}

/**
 * Four tone pairs, measured from the reference. The rows are all opaque white:
 * unlike a severity ladder, the colour signal lives only in the icon tile, so
 * there is no tinted row ground to declare here.
 */
export const TONE_TOKENS: Record<Tone, ToneTokens> = {
  violet: { tone: '#6d4aff', soft: '#efebff' },
  green: { tone: '#0f8a5f', soft: '#e2f6ec' },
  amber: { tone: '#b45309', soft: '#fdf0dc' },
  rose: { tone: '#d0264f', soft: '#fde6ec' },
}

export interface Notice {
  id: string
  tone: Tone
  title: string
  text: string
  /** The blocking notice is announced; the other three are polite status. */
  role: 'status' | 'alert'
}

/**
 * The four notices, verbatim: the row heights are copy-driven (the amber row is
 * one line and therefore shorter), so do not shorten the bodies.
 */
export const NOTICES: readonly [Notice, Notice, Notice, Notice] = [
  {
    id: 'design-review',
    tone: 'violet',
    role: 'status',
    title: 'Design review moved to Thursday',
    text: 'Priya rescheduled the review of the checkout flow to 26 September, 14:00. The agenda is unchanged.',
  },
  {
    id: 'build-qa',
    tone: 'green',
    role: 'status',
    title: 'Build 2.14.0 passed QA',
    text: 'All 312 regression tests passed on iOS and Android. The build is ready for the beta group.',
  },
  {
    id: 'overdue-tasks',
    tone: 'amber',
    role: 'status',
    title: 'Two tasks are past their due date',
    text: '“Empty cart illustration” and “Push copy for reorders” were due on Monday.',
  },
  {
    id: 'storage',
    tone: 'rose',
    role: 'alert',
    title: 'Storage almost full',
    text: 'The shared design library uses 9.6 GB of 10 GB. New uploads will be blocked at the limit.',
  },
]

/** The head, the empty state and the two controls' labels. */
export const PANEL = {
  title: 'Project Atlas',
  sub: 'Mobile app redesign · Sprint 14 of 18',
  listLabel: 'Project notices',
  empty: 'You are all caught up.',
  restore: 'Show dismissed notices',
  restored: 'All notices restored.',
} as const

/**
 * "1 notice" / "4 notices". The reference's pill always prints the plural
 * while its own live region singularises correctly — this keeps both honest.
 */
export function plural(notices: number): string {
  return notices === 1 ? 'notice' : 'notices'
}

/** What the live region narrates after a dismissal. */
export function dismissMessage(title: string, left: number): string {
  return `Dismissed "${title}". ${left} ${plural(left)} left.`
}

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
