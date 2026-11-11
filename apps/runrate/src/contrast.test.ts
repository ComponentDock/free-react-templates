import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * The page's colour pairs, read out of the stylesheet so the assertions and the
 * tokens cannot drift. Two are the port's repairs: the resting slider track and
 * the dashed support border, both of which the reference paints under the 3 : 1
 * a control's boundary needs.
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
  it('keeps every text pair on the dark ground above 4.5 : 1', () => {
    const pairs: [string, string][] = [
      ['teal', 'ground'],
      ['teal', 'panel'],
      ['ink', 'ground'],
      ['ink', 'panel'],
      ['muted', 'ground'],
      ['muted', 'panel'],
    ]

    for (const [name, surface] of pairs) {
      expect(ratio(hex(token(name)), hex(token(surface)))).toBeGreaterThan(4.5)
    }
  })

  it('keeps every text pair on the light card above 4.5 : 1', () => {
    const pairs: [string, string][] = [
      ['card-muted', 'card'],
      ['card-key', 'card'],
      ['card-ink', 'card'],
    ]

    for (const [name, surface] of pairs) {
      expect(ratio(hex(token(name)), hex(token(surface)))).toBeGreaterThan(4.5)
    }
  })

  it('matches the measured pairs the reference prints', () => {
    expect(ratio(hex(token('teal')), hex(token('ground')))).toBeCloseTo(10.12, 2)
    expect(ratio(hex(token('teal')), hex(token('panel')))).toBeCloseTo(9.32, 2)
    expect(ratio(hex(token('ink')), hex(token('panel')))).toBeCloseTo(14.07, 2)
    expect(ratio(hex(token('muted')), hex(token('panel')))).toBeCloseTo(7.88, 2)
    expect(ratio(hex(token('card-muted')), hex(token('card')))).toBeCloseTo(7.24, 2)
    expect(ratio(hex(token('card-key')), hex(token('card')))).toBeCloseTo(9.9, 2)
    expect(ratio(hex(token('card-ink')), hex(token('card')))).toBeCloseTo(17.06, 2)
    expect(ratio(WHITE, hex(token('card-ink')))).toBeCloseTo(17.85, 2)
    expect(ratio(WHITE, hex(token('panel')))).toBeCloseTo(17.34, 2)
    expect(ratio(WHITE, hex(token('ground')))).toBeCloseTo(18.83, 2)
  })

  it('repairs the two control boundaries the reference ships below 3 : 1', () => {
    // The reference: #2a3a57 on the panel (1.52) and #33476b (1.86).
    expect(ratio(hex(token('track-rest')), hex(token('panel')))).toBeCloseTo(3.07, 2)
    expect(ratio(hex(token('check-line')), hex(token('panel')))).toBeCloseTo(3.24, 2)
    expect(ratio(hex(token('track-rest')), hex(token('panel')))).toBeGreaterThan(3)
    expect(ratio(hex(token('check-line')), hex(token('panel')))).toBeGreaterThan(3)
  })

  it('keeps the CTA readable in both of its states', () => {
    expect(ratio(WHITE, hex(token('card-ink')))).toBeCloseTo(17.85, 2)
    expect(ratio(WHITE, hex('#134e4a'))).toBeCloseTo(9.48, 2)
  })

  it('accepts the teal segment as decoration, never as the only cue', () => {
    // 2.38 : 1 on the card — below 4.5, but the same number is printed beside
    // it and the key is aria-hidden, so no information travels by colour alone.
    expect(ratio(hex(token('seg-calls')), hex(token('card')))).toBeCloseTo(2.38, 2)
    expect(ratio(hex(token('seg-calls')), hex(token('card')))).toBeLessThan(3)
  })
})
