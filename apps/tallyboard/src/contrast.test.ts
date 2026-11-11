import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * The page's colour pairs, read out of the stylesheet so the assertions and the
 * tokens cannot drift. One value is a deliberate repair: the OFF track is
 * darkened from the usual stone step so the switch clears 3 : 1 as a control
 * boundary against the ground, the card and its own white knob.
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
  it('matches the measured text ratios on the cream ground and the cards', () => {
    expect(ratio(token('ink'), token('ground'))).toBeCloseTo(16.37, 1)
    expect(ratio(token('ink'), token('card'))).toBeCloseTo(17.2, 1)
    expect(ratio(token('muted'), token('card'))).toBeCloseTo(7.5, 1)
    expect(ratio(token('muted'), token('ground'))).toBeCloseTo(7.14, 1)
  })

  it('keeps the featured panel legible in both of its text colours', () => {
    expect(ratio(token('pop'), token('forest'))).toBeCloseTo(8.8, 1)
    expect(ratio(token('pop-muted'), token('forest'))).toBeCloseTo(7.8, 1)
    expect(ratio(token('lime'), token('forest'))).toBeCloseTo(6.97, 1)
  })

  it('keeps the chips and dark CTAs above 4.5 : 1', () => {
    expect(ratio(token('lime-ink'), token('lime'))).toBeCloseTo(11.19, 1)
    expect(ratio(WHITE, token('ink'))).toBeCloseTo(17.49, 1)
    expect(ratio(WHITE, token('cta-hover'))).toBeCloseTo(10.27, 1)
  })

  it('clears 3 : 1 on the switch track (the one repaired boundary)', () => {
    const track = token('track')
    expect(track).toBe('#8a8079')
    expect(ratio(track, token('ground'))).toBeCloseTo(3.61, 1)
    expect(ratio(track, token('card'))).toBeCloseTo(3.79, 1)
    expect(ratio(track, WHITE)).toBeCloseTo(3.86, 1)
    expect(ratio(token('forest'), token('ground'))).toBeGreaterThan(3)
  })

  it('keeps the card hairline as decoration, not a control boundary', () => {
    expect(ratio(token('line'), token('card'))).toBeLessThan(3)
  })
})
