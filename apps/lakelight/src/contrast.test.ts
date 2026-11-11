import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * The page's colour pairs, read straight out of the stylesheet so the test and
 * the CSS cannot drift. Two of them are repairs, not copies: the reference's
 * focus ring is 2.81 : 1 on the sand ground and its placeholder 4.17 : 1 on the
 * field tint, both under the ratios a focus indicator and a hint need.
 */
const WHITE = '#ffffff'

function token(name: string): string {
  if (name === WHITE) return WHITE
  const match = css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-f]{6})`, 'i'))
  if (!match?.[1]) throw new Error(`token --color-${name} not found`)
  return match[1]
}

function channel(value: number): number {
  const v = value / 255
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [
    number,
    number,
    number,
  ]
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

function ratio(a: string, b: string): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number]
  return (light + 0.05) / (dark + 0.05)
}

describe('colour contrast', () => {
  it('keeps every text pair above 4.5 : 1', () => {
    const pairs: [string, string][] = [
      ['ink', 'sand'],
      ['muted', 'sand'],
      ['teal', 'sand'],
      ['ink', WHITE],
      ['muted', WHITE],
      ['teal', WHITE],
      ['placeholder', WHITE],
      ['placeholder', 'field'],
      ['placeholder', 'field-hover'],
      ['on-orange', 'orange'],
    ]

    for (const [foreground, background] of pairs) {
      const pair = `${foreground} on ${background}`
      expect(ratio(token(foreground), token(background)), pair).toBeGreaterThanOrEqual(4.5)
    }
  })

  it('lifts the focus ring over 3 : 1 on both grounds it lands on', () => {
    expect(ratio(token('ring'), token('sand'))).toBeGreaterThanOrEqual(3)
    expect(ratio(token('ring'), WHITE)).toBeGreaterThanOrEqual(3)
  })

  it('replaces the accent hue with a darker ring', () => {
    expect(luminance(token('ring'))).toBeLessThan(luminance(token('orange')))
  })
})
