import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * Stylesheet invariants the jsdom suite cannot see: the layout's load-bearing
 * track definition, the motion budget, the breakpoints, and the absence of the
 * source snippet's `all: revert` firewall (which would un-reset preflight).
 */
describe('index.css', () => {
  it('keeps the grid at minmax(0, 1fr) so long bullets wrap instead of widening the tracks', () => {
    expect(css).toContain('grid-template-columns: repeat(4, minmax(0, 1fr))')
    expect(css).not.toMatch(/grid-template-columns:\s*repeat\(4, 1fr\)/)
  })

  it('carries no keyframes and no animation property', () => {
    expect(css).not.toContain('@keyframes')
    expect(css).not.toMatch(/^\s*animation:/m)
  })

  it('drops the snippet all: revert firewall', () => {
    expect(css).not.toContain('all: revert')
  })

  it('ships the two layout breakpoints plus the reduced-motion query', () => {
    const queries = css.match(/@media[^{]+/g) ?? []
    expect(queries.map((query) => query.trim())).toEqual([
      '@media (max-width: 1080px)',
      '@media (max-width: 600px)',
      '@media (prefers-reduced-motion: reduce)',
    ])
  })

  it('carries one shadow only — the switch knob, not the cards', () => {
    const shadows = css.match(/box-shadow:/g) ?? []
    expect(shadows).toHaveLength(1)
    expect(css).toContain('box-shadow: 0 2px 6px rgb(0 0 0 / 0.25)')
  })

  it('declares the page tokens through @theme', () => {
    for (const name of [
      'ground',
      'card',
      'ink',
      'muted',
      'line',
      'forest',
      'lime',
      'lime-ink',
      'pop',
      'pop-muted',
      'track',
      'cta-hover',
    ]) {
      expect(css).toContain(`--color-${name}:`)
    }
    expect(css).toContain('--radius-card: 22px')
    expect(css).toContain('--radius-pill: 999px')
  })

  it('gives the featured panel a fill, not a bigger box', () => {
    expect(css).toMatch(/\.tb-plan--pop\s*{[^}]*border-color: var\(--color-forest\)/)
    expect(css).toMatch(/\.tb-plan--pop\s*{[^}]*background-color: var\(--color-forest\)/)
    expect(css).not.toMatch(/\.tb-plan--pop\s*{[^}]*(margin|padding|border-width)/)
  })

  it('pins the flag inside the card and anchors it to the right', () => {
    expect(css).toMatch(/\.tb-flag\s*{[^}]*position: absolute/)
    expect(css).toMatch(/\.tb-flag\s*{[^}]*top: 24px/)
    expect(css).toMatch(/\.tb-flag\s*{[^}]*right: 20px/)
  })
})
