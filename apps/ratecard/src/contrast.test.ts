import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * The page's colour pairs, read out of the stylesheet so the assertions and the
 * tokens cannot drift. All but one are the reference's own values; the ghost
 * CTA's border is the port's single repair (1.54 : 1 on white is below the
 * 3 : 1 a control boundary needs).
 */
const WHITE = '#ffffff'

function token(name: string): string {
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
  const light = Math.max(luminance(a), luminance(b))
  const dark = Math.min(luminance(a), luminance(b))
  return (light + 0.05) / (dark + 0.05)
}

describe('colour contrast', () => {
  it('keeps every text pair above 4.5 : 1', () => {
    const pairs: [string, string][] = [
      ['ink', WHITE],
      ['ink', 'ground'],
      ['muted', WHITE],
      ['muted', 'ground'],
      ['list-ink', WHITE],
      ['accent', WHITE],
      ['accent', 'ground'],
    ]
    for (const [fg, bg] of pairs) {
      expect(ratio(token(fg), bg === WHITE ? WHITE : token(bg))).toBeGreaterThan(4.5)
    }
  })

  it('matches the reference ratios it reproduces', () => {
    expect(ratio(token('ink'), WHITE)).toBeCloseTo(17.74, 1)
    expect(ratio(token('ink'), token('ground'))).toBeCloseTo(16.55, 1)
    expect(ratio(token('muted'), WHITE)).toBeCloseTo(7.56, 1)
    expect(ratio(token('muted'), token('ground'))).toBeCloseTo(7.05, 1)
    expect(ratio(token('list-ink'), WHITE)).toBeCloseTo(14.68, 1)
    expect(ratio(token('accent'), WHITE)).toBeCloseTo(6.4, 1)
    expect(ratio(token('accent'), token('ground'))).toBeCloseTo(5.97, 1)
  })

  it('keeps white legible on both accent fills and the tick on its disc', () => {
    expect(ratio(WHITE, token('accent'))).toBeCloseTo(6.4, 1)
    expect(ratio(WHITE, token('accent-hover'))).toBeCloseTo(8.4, 1)
    expect(ratio(token('accent'), token('accent-soft'))).toBeCloseTo(5.5, 1)
  })

  it('clears 3 : 1 on the darkened ghost border (the one repair)', () => {
    const line = token('cta-line')
    expect(line).not.toBe('#c9d1de')
    expect(ratio(line, WHITE)).toBeCloseTo(3.49, 1)
    expect(ratio(line, token('ground'))).toBeGreaterThan(3)
    expect(ratio(token('accent'), WHITE)).toBeGreaterThan(3)
  })
})
