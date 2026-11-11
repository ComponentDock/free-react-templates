import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * The palette's contrast, read out of the stylesheet so the assertions and the
 * tokens cannot drift. Two pairs are deliberate repairs: the cross glyph is
 * darkened until it clears 1.4.11 inside the tinted column (its original value
 * measured 2.84 there) and the two bulk controls get a darker border, because a
 * 1.25 : 1 boundary is not a boundary.
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
  it('measures the text pairs the design was read with', () => {
    expect(ratio(token('ink'), WHITE)).toBeCloseTo(17.02, 1)
    expect(ratio(token('ink'), token('tint'))).toBeCloseTo(15.96, 1)
    expect(ratio(token('row-head'), WHITE)).toBeCloseTo(13.15, 1)
    expect(ratio(token('row-head'), token('tint'))).toBeCloseTo(12.34, 1)
  })

  it('clears 4.5 : 1 for the muted copy on every background it lands on', () => {
    expect(ratio(token('muted'), WHITE)).toBeCloseTo(7.26, 1)
    expect(ratio(token('muted'), token('tint'))).toBeCloseTo(6.81, 1)
    expect(ratio(token('muted'), token('head-tint'))).toBeCloseTo(6.83, 1)
    expect(ratio(token('muted'), token('hover'))).toBeGreaterThanOrEqual(4.5)
  })

  it('clears 4.5 : 1 for the accent and for white on the accent pill', () => {
    expect(ratio(token('accent'), WHITE)).toBeCloseTo(5.47, 1)
    expect(ratio(token('accent'), token('tint'))).toBeCloseTo(5.13, 1)
    expect(ratio(WHITE, token('accent'))).toBeCloseTo(5.47, 1)
    expect(ratio(token('accent-deep'), token('tint'))).toBeGreaterThanOrEqual(4.5)
  })

  it('repairs the cross so one token is valid on white, on the tint and on hover', () => {
    expect(ratio(token('cross'), WHITE)).toBeCloseTo(4.5, 1)
    expect(ratio(token('cross'), token('tint'))).toBeCloseTo(4.22, 1)
    expect(ratio(token('cross'), token('hover'))).toBeCloseTo(4.25, 1)
  })

  it('keeps the table rules decorative and gives the two controls a real boundary', () => {
    expect(ratio(token('line'), WHITE)).toBeCloseTo(1.25, 1)
    expect(ratio(token('control-line'), WHITE)).toBeCloseTo(3.03, 1)
  })
})
