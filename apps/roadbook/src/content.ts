export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export interface Head {
  /** Eyebrow line — two words of scope, then the middle dot (U+00B7), then the edition. */
  eyebrow: string
  /** h1 — one sentence, two lines at every width the head is measured at. */
  title: string
}

export const HEAD: Head = {
  eyebrow: 'Field guides \u00b7 2026 edition',
  title: 'Where to go when the season turns',
}
