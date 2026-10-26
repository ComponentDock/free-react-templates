export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export interface Head {
  /** Eyebrow — the deck's scope, a middle dot (U+00B7), then the deck number. */
  eyebrow: string
  /** h1 — three words, one line down to 341 px. */
  title: string
  /** The one instruction line: how the cards open. */
  sub: string
}

export const HEAD: Head = {
  eyebrow: 'Everyday Spanish \u00b7 Deck 3',
  title: 'Words worth knowing',
  sub: 'Hover a card, or tap it (Enter or Space on a keyboard), to see the meaning.',
}
