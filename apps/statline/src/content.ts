export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export interface Head {
  title: string
  sub: string
  range: string
}

/** The band's head copy — the chip's range uses an en dash, not a hyphen. */
export const HEAD: Head = {
  title: 'Overview',
  sub: 'Store performance, last 30 days compared with the previous 30.',
  range: '26 Aug \u2013 24 Sep 2026',
}

export interface Metric {
  /** Card title, rendered as an h2 — the outline's only structure. */
  label: string
  value: string
  delta: string
  /** Arrow direction: a fact about the number. */
  direction: 'up' | 'down'
  /** Sentiment: a judgement about the number, independent of the arrow. */
  tone: 'good' | 'bad'
  /** Word(s) appended for screen readers, leading space included. */
  deltaNote: string
  /** Drives exactly three things: glyph colour, chip tint, sparkline paint. */
  accent: string
  /** 24-unit outline paths drawn at stroke-width 2. */
  icon: readonly string[]
  sparkPath: string
  sparkLabel: string
  foot: string
}

export const METRICS: readonly Metric[] = [
  {
    label: 'Net revenue',
    value: '$84,210',
    delta: '12.4%',
    direction: 'up',
    tone: 'good',
    deltaNote: ' increase',
    accent: '#4f46e5',
    icon: ['M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'],
    sparkPath:
      'M0 32 L10 30 L20 31 L30 26 L40 27 L50 22 L60 24 L70 18 L80 19 L90 13 L100 14 L110 8 L120 6',
    sparkLabel: 'Revenue trend, rising steadily over 30 days',
    foot: 'vs $74,920 previous period',
  },
  {
    label: 'Orders',
    value: '1,286',
    delta: '4.1%',
    direction: 'up',
    tone: 'good',
    deltaNote: ' increase',
    accent: '#0891b2',
    icon: ['M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z', 'M3 6h18M16 10a4 4 0 0 1-8 0'],
    sparkPath:
      'M0 24 L10 20 L20 26 L30 18 L40 22 L50 16 L60 25 L70 20 L80 23 L90 15 L100 19 L110 14 L120 12',
    sparkLabel: 'Orders trend, uneven with a small rise at the end',
    foot: 'vs 1,235 previous period',
  },
  {
    label: 'Conversion rate',
    value: '3.18%',
    delta: '0.4 pts',
    direction: 'down',
    tone: 'bad',
    deltaNote: ' decrease',
    accent: '#db2777',
    icon: ['M3 3v18h18', 'm7 14 4-4 3 3 5-6'],
    sparkPath:
      'M0 20 L10 17 L20 18 L30 12 L40 10 L50 13 L60 9 L70 15 L80 18 L90 16 L100 22 L110 21 L120 25',
    sparkLabel: 'Conversion trend, peaking mid-month then falling',
    foot: 'vs 3.58% previous period',
  },
  {
    label: 'Refund rate',
    value: '1.9%',
    delta: '0.6 pts',
    direction: 'down',
    tone: 'good',
    deltaNote: ' decrease, an improvement',
    accent: '#16a34a',
    icon: ['M3 12a9 9 0 1 0 3-6.7L3 8', 'M3 3v5h5'],
    sparkPath:
      'M0 10 L10 12 L20 9 L30 14 L40 13 L50 18 L60 16 L70 21 L80 20 L90 25 L100 24 L110 28 L120 29',
    sparkLabel: 'Refund trend, falling over 30 days',
    foot: 'vs 2.5% previous period',
  },
]
