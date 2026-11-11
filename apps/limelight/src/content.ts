/**
 * The page's whole content model. One band, three plans, one closing note — no
 * navigation, no form, no imagery — so this file is the only place copy lives.
 */

export type Tone = 'cyan' | 'pink' | 'violet'

export interface Plan {
  /** The `h2`'s id, which is also the card's `aria-labelledby` target. */
  readonly id: string
  readonly name: string
  readonly description: string
  readonly price: string
  /** `null` on the free plan: it has no period marker at all. */
  readonly period: string | null
  readonly cta: string
  readonly tone: Tone
  readonly bullets: readonly string[]
  readonly featured: boolean
}

export const SECTION_ID = 'plans'
export const HEADING_ID = 'limelight-title'
export const COMPONENT_DOCK = 'https://www.componentdock.com/'

export const EYEBROW = 'Nightwave for creators'

/** The headline is split so its last word can carry the glow. */
export const HEADLINE_LEAD = 'Step into the '
export const HEADLINE_GLOW = 'light'

export const LEDE =
  'Overlays, instant clips and multistreaming in one studio. Go live free, then unlock the pro tools once your channel takes off.'

export const FLAG_LABEL = 'Creator favourite'

export const PLANS: readonly Plan[] = [
  {
    id: 'limelight-spark',
    name: 'Spark',
    description: 'Everything you need to go live.',
    price: 'Free',
    period: null,
    cta: 'Download free',
    tone: 'cyan',
    bullets: [
      '720p to a single platform',
      '12 overlay themes',
      '30-second instant clips',
      'Community chat room',
    ],
    featured: false,
  },
  {
    id: 'limelight-creator',
    name: 'Creator',
    description: 'For growing channels that stream every week.',
    price: '$9',
    period: '/ month',
    cta: 'Go Creator',
    tone: 'pink',
    bullets: [
      '1080p60 to three platforms at once',
      'All 140 overlay themes and alerts',
      'AI highlight reels from every VOD',
      'Custom sub and donation alerts',
      'No Nightwave watermark',
    ],
    featured: true,
  },
  {
    id: 'limelight-studio',
    name: 'Studio',
    description: 'For full-time creators and small esports teams.',
    price: '$24',
    period: '/ month',
    cta: 'Go Studio',
    tone: 'violet',
    bullets: [
      '4K to unlimited platforms',
      'Custom overlay designer',
      'Sponsor slots and analytics',
      '3 moderator seats',
      'Priority support in 2 hours',
    ],
    featured: false,
  },
]

export const FOOTNOTE =
  'Cancel any time. Students get Creator free for a year with a valid school email.'

export const FOOTER_PREFIX = 'More templates at'
export const FOOTER_LINK_LABEL = 'Component Dock'
