export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The three fictional brand marks, drawn as 24-unit stroke glyphs. */
export type BrandMark = 'freight' | 'rings' | 'clinics'

export interface CardSkin {
  /** Card surface — the only per-card fill. */
  tint: string
  /** Drives the avatar fill, the byline rule at 25% and the quotation glyph. */
  accent: string
  /** Body and quote colour. */
  ink: string
  /** Role line and brand label colour. */
  muted: string
}

export interface Testimonial {
  id: string
  brand: string
  mark: BrandMark
  /** Whole stars out of five; anything below five renders a hollow star. */
  rating: number
  quote: string
  initials: string
  name: string
  role: string
  skin: CardSkin
  /** The middle card only: a 23 px quote. */
  big?: boolean
  /** The middle card only: the inverted skin. */
  dark?: boolean
}

export const BAND = {
  title: 'Teams who switched to Ledgerly',
  sub: '4.8 average from 1,900+ reviews by finance and operations teams.',
} as const

/**
 * Three testimonials, three paint jobs. The tints live here rather than in the
 * stylesheet because the reference sets them inline per card.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'lumen',
    brand: 'Lumen Freight',
    mark: 'freight',
    rating: 5,
    quote:
      'Month-end close went from six working days to two. The approval trail alone saved our auditors a week of back-and-forth.',
    initials: 'RM',
    name: 'Rosa Martell',
    role: 'Head of Finance',
    skin: { tint: '#e7f5ee', accent: '#0f766e', ink: '#1c1917', muted: '#44403c' },
  },
  {
    id: 'paperkite',
    brand: 'Paperkite',
    mark: 'rings',
    rating: 5,
    quote:
      'We run payroll for 340 people across four countries. Ledgerly is the first tool our accountants and our engineers both actually like opening.',
    initials: 'KA',
    name: 'Kwame Asante',
    role: 'COO',
    skin: { tint: '#1f1d2b', accent: '#fbbf24', ink: '#f5f3ff', muted: '#c4c1d4' },
    big: true,
    dark: true,
  },
  {
    id: 'oakridge',
    brand: 'Oakridge Clinics',
    mark: 'clinics',
    rating: 4,
    quote:
      'Setup took an afternoon. I would like more report templates, but the support team answered every question within the hour.',
    initials: 'TB',
    name: 'Tessa Brandt',
    role: 'Practice Manager',
    skin: { tint: '#fdeee4', accent: '#c2410c', ink: '#1c1917', muted: '#44403c' },
  },
]
