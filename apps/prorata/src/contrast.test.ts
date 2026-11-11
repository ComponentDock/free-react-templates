import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * The page's colour pairs, read out of the stylesheet so the assertions and the
 * tokens cannot drift. Two of them are the port's repairs: the number field's
 * border and the resting slider track, both of which the reference paints under
 * the 3 : 1 a control boundary needs.
 */

type Rgb = readonly [number, number, number]

function token(name: string): string {
  const match = css.match(new RegExp(`--color-${name}:\\s*([^;]+);`))
  if (!match?.[1]) throw new Error(`token --color-${name} not found`)
  return match[1].trim()
}

function hex(value: string): Rgb {
  const match = value.match(/^#([0-9a-f]{6})$/i)
  if (!match?.[1]) throw new Error(`not a six-digit hex: ${value}`)
  const digits = match[1]
  return [0, 2, 4].map((i) => parseInt(digits.slice(i, i + 2), 16)) as unknown as Rgb
}

function channel(value: number): number {
  const v = value / 255
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}

function luminance(rgb: Rgb): number {
  return 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2])
}

function ratio(a: Rgb, b: Rgb): number {
  const light = Math.max(luminance(a), luminance(b))
  const dark = Math.min(luminance(a), luminance(b))
  return (light + 0.05) / (dark + 0.05)
}

const WHITE = hex('#ffffff')

describe('colour contrast', () => {
  it('keeps every text pair above 4.5 : 1', () => {
    const pairs: [string, string][] = [
      ['accent', '#fafaf9'],
      ['muted', '#ffffff'],
      ['muted', '#fafaf9'],
      ['muted', '#f5f5f4'],
      ['ink', '#ffffff'],
      ['ink', '#fafaf9'],
      ['ink', '#f5f5f4'],
      ['scale', '#ffffff'],
      ['scale', '#fafaf9'],
      ['scale-strong', '#ffffff'],
      ['scale-strong', '#fafaf9'],
    ]

    for (const [name, surface] of pairs) {
      expect(ratio(hex(token(name)), hex(surface))).toBeGreaterThan(4.5)
    }
  })

  it('keeps white legible on both accent states and on the ink chip', () => {
    expect(ratio(WHITE, hex(token('accent')))).toBeCloseTo(5.18, 2)
    expect(ratio(WHITE, hex(token('accent-hover')))).toBeCloseTo(7.31, 2)
    expect(ratio(WHITE, hex(token('ink')))).toBeCloseTo(19.76, 2)
  })

  it('keeps the current chip readable in both of its text colours', () => {
    expect(ratio(hex(token('chip-used-line')), hex(token('ink')))).toBeCloseTo(13.26, 2)
  })

  it('repairs the two control boundaries the reference ships below 3 : 1', () => {
    // The reference: #d6d3d1 on white (1.49) and #e7e5e4 on white (1.26).
    expect(ratio(hex(token('chip-used-line')), WHITE)).toBeLessThan(2)
    expect(ratio(hex(token('line')), WHITE)).toBeLessThan(2)

    expect(ratio(hex(token('control-line')), WHITE)).toBeCloseTo(3.54, 2)
    expect(ratio(hex(token('control-line')), hex(token('ground')))).toBeCloseTo(3.39, 2)
  })

  it('matches the measured eyebrow and muted pairs', () => {
    expect(ratio(hex(token('accent')), hex(token('ground')))).toBeCloseTo(4.96, 2)
    expect(ratio(hex(token('muted')), WHITE)).toBeCloseTo(7.63, 2)
    expect(ratio(hex(token('scale')), WHITE)).toBeCloseTo(4.8, 2)
    expect(ratio(hex(token('scale-strong')), WHITE)).toBeCloseTo(5.74, 2)
  })
})
