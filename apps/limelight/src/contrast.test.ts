import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * The page's colour pairs, read out of the stylesheet so the assertions and the
 * tokens cannot drift. Every value but one is the reference's own; the ghost
 * CTA's border is the port's single repair (the reference's 45% violet measures
 * 2.35 : 1 on the card top, under the 3 : 1 a control boundary needs).
 *
 * Two gradient stops carry alpha, so they are composited over the card before
 * they are measured — that is what the browser paints.
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

function rgba(value: string): { rgb: Rgb; alpha: number } {
  const match = value.match(/^rgba?\(\s*(\d+)[ ,]+(\d+)[ ,]+(\d+)(?:[ ,/]+([\d.]+))?\s*\)$/)
  if (!match) throw new Error(`not an rgb()/rgba() colour: ${value}`)
  return {
    rgb: [Number(match[1]), Number(match[2]), Number(match[3])] as unknown as Rgb,
    alpha: match[4] === undefined ? 1 : Number(match[4]),
  }
}

/** Paint a possibly translucent token over an opaque surface. */
function over(fg: string, bg: Rgb): Rgb {
  if (fg.startsWith('#')) return hex(fg)
  const { rgb, alpha } = rgba(fg)
  return rgb.map((value, i) => Math.round(value * alpha + bg[i]! * (1 - alpha))) as unknown as Rgb
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

const ground = hex(token('ground'))
const cardTop = over(token('card-top'), ground)
const cardBottom = over(token('card-bottom'), ground)
const featTop = hex(token('feat-top'))
const featBottom = hex(token('feat-bottom'))

describe('colour contrast', () => {
  it('keeps every text pair above 4.5 : 1 on the card grounds', () => {
    const pairs: [string, Rgb][] = [
      ['ink', cardTop],
      ['ink', featTop],
      ['muted', cardTop],
      ['muted', cardBottom],
      ['muted', featTop],
      ['muted', featBottom],
      ['muted', ground],
    ]
    for (const [name, surface] of pairs) {
      expect(ratio(over(token(name), surface), surface)).toBeGreaterThan(4.5)
    }
  })

  it('reproduces the reference ratios it inherits', () => {
    expect(ratio(hex(token('ink')), cardTop)).toBeCloseTo(16.06, 1)
    expect(ratio(hex(token('ink')), featTop)).toBeCloseTo(15.54, 1)
    expect(ratio(hex(token('muted')), cardTop)).toBeCloseTo(8.75, 1)
    expect(ratio(hex(token('muted')), cardBottom)).toBeCloseTo(9.41, 1)
    expect(ratio(hex(token('muted')), featTop)).toBeCloseTo(8.46, 1)
    expect(ratio(hex(token('muted')), featBottom)).toBeCloseTo(9.28, 1)
    expect(ratio(hex(token('muted')), ground)).toBeCloseTo(10.0, 1)
  })

  it('keeps the flag and the glow CTA legible on their gradients', () => {
    expect(ratio(hex(token('flag-ink')), hex(token('neon-pink')))).toBeCloseTo(7.13, 1)
    expect(ratio(hex(token('flag-ink')), hex(token('flag-mid')))).toBeCloseTo(7.15, 1)

    const ink = hex(token('glow-ink'))
    expect(ratio(ink, hex(token('glow-a')))).toBeCloseTo(10.59, 1)
    expect(ratio(ink, hex(token('glow-b')))).toBeCloseTo(10.41, 1)
    expect(ratio(ink, hex(token('glow-c')))).toBeCloseTo(13.25, 1)
  })

  it('keeps the eyebrow legible on its 8% pill', () => {
    const pill = over('rgba(167, 139, 250, 0.08)', ground)
    expect(ratio(hex(token('eyebrow')), pill)).toBeCloseTo(13.32, 1)
  })

  it('keeps the three accent hues above 4.5 : 1 on the card and the ground', () => {
    expect(ratio(hex(token('neon-cyan')), cardTop)).toBeCloseTo(9.75, 1)
    expect(ratio(hex(token('neon-pink')), cardTop)).toBeCloseTo(6.65, 1)
    expect(ratio(hex(token('neon-violet')), cardTop)).toBeCloseTo(6.47, 1)
    expect(ratio(hex(token('neon-cyan')), ground)).toBeCloseTo(11.14, 1)
  })

  it('clears 3 : 1 on the repaired ghost border, and would not at the shipped alpha', () => {
    const line = over(token('cta-line'), cardTop)
    expect(ratio(line, cardTop)).toBeCloseTo(3.14, 1)
    expect(ratio(over(token('cta-line'), cardBottom), cardBottom)).toBeCloseTo(3.23, 1)

    const shipped = over('rgba(167, 139, 250, 0.45)', cardTop)
    expect(ratio(shipped, cardTop)).toBeLessThan(3)
    expect(ratio(line, cardTop)).toBeGreaterThan(ratio(shipped, cardTop))
  })
})
