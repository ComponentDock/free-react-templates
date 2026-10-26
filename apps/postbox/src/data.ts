export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The two presentations of the card: the navy primary and the white compact. */
export type CardVariant = 'primary' | 'compact'

export interface CardCopy {
  eyebrow: string
  title: string
  body: string
  label: string
  placeholder: string
  action: string
  hint?: string
  doneTitle: string
  doneBefore: string
  doneAfter: string
}

/**
 * Both cards' copy, verbatim from the reference render. The primary card keeps a
 * fine-print hint under its row; the compact card has none, which is why only one
 * of the two carries a `hint`.
 */
export const CARDS: Record<CardVariant, CardCopy> = {
  primary: {
    eyebrow: 'The Friday Frontend · 21,400 readers',
    title: 'One useful CSS trick, every Friday.',
    body: 'Short, practical notes on layout, accessibility and performance. Five minutes to read, no sponsored fluff.',
    label: 'Email address',
    placeholder: 'you@example.com',
    action: 'Subscribe',
    hint: 'Unsubscribe with one click. We never share your address.',
    doneTitle: 'Check your inbox',
    doneBefore: 'We sent a confirmation link to ',
    doneAfter: '. Click it and the first issue arrives this Friday.',
  },
  compact: {
    eyebrow: 'Product updates',
    title: 'Get release notes by email',
    body: "About once a month. New features, fixes and what's next on the roadmap.",
    label: 'Work email',
    placeholder: 'name@company.com',
    action: 'Notify me',
    doneTitle: "You're on the list",
    doneBefore: 'Release notes will go to ',
    doneAfter: '.',
  },
}
