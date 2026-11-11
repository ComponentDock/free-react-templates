/**
 * Every string and every id the page needs, in one place. The copy is written
 * for Alpenglow: an outdoor brand's short film about a ridge traverse, its two
 * CTAs and its three chapters. No number here is decorative — the kicker's
 * duration, the play label's duration and the player's timecode all have to
 * agree with each other.
 */

export const TOP_ID = 'top'
export const TITLE_ID = 'ap-title'
export const NAV_ID = 'ap-nav'
export const DIALOG_ID = 'ap-dialog'
export const DIALOG_TITLE_ID = 'ap-dialog-title'
export const CHAPTERS_ID = 'chapters'

export const BRAND = { name: 'Alpenglow', href: '#top' }

export interface NavLink {
  readonly label: string
  readonly href: string
  readonly current?: boolean
  readonly external?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Films', href: '#top', current: true },
  { label: 'Collection', href: 'https://www.componentdock.com/', external: true },
  { label: 'Expeditions', href: '#chapters' },
  { label: 'Journal', href: 'https://www.componentdock.com/', external: true },
]

export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' }

/** The reference's kicker shape: a brand, a film and a duration. */
export const KICKER = 'An Alpenglow film · 3 min 40 s'

/** One sentence in two balanced lines at 1440; the second line is the longer. */
export const HEADLINE = 'Where the light lands and stays'

export const SUB =
  'Six days above the treeline in the Julian Alps, 92 km of ridge and three ' +
  'storms in late February. Every shell and wool layer in this film was worn ' +
  'for real, not borrowed for a shoot.'

export const PLAY = { label: 'Watch the film', duration: '3:40' }

export const SHOP = {
  label: 'Shop the alpenglow knitwear',
  href: 'https://www.componentdock.com/',
}

export interface Chapter {
  readonly number: string
  readonly label: string
}

export const CHAPTERS: readonly Chapter[] = [
  { number: '01', label: 'First light on the col' },
  { number: '02', label: 'Storm over the saddle' },
  { number: '03', label: 'The long descent' },
]

export const DIALOG = {
  title: HEADLINE,
  closeLabel: 'Close video',
  screenLabel: 'Video placeholder',
  noteBefore: 'Drop a',
  noteCode: '<video>',
  noteAfter: 'element or an embed in this panel. Focus, Esc and the backdrop are already wired up.',
  time: '0:38 / 3:40',
}

export const FOOTER = {
  prefix: 'More templates at',
  href: 'https://www.componentdock.com/',
  linkLabel: 'Component Dock',
}
