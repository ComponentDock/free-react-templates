import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * Stylesheet invariants that the jsdom suite cannot see: the layout's two
 * load-bearing values, the missing motion, and the absence of the reference's
 * `all: revert` firewall (which would un-reset Tailwind's preflight).
 */
describe('index.css', () => {
  it('keeps the grid at minmax(0, 1fr) so long bullets wrap instead of widening the tracks', () => {
    expect(css).toContain('grid-template-columns: repeat(3, minmax(0, 1fr))')
    expect(css).not.toMatch(/grid-template-columns:\s*repeat\(3, 1fr\)/)
  })

  it('carries no keyframes and no animation property', () => {
    expect(css).not.toContain('@keyframes')
    expect(css).not.toMatch(/^\s*animation:/m)
  })

  it('drops the reference all: revert firewall', () => {
    expect(css).not.toContain('all: revert')
  })

  it('ships exactly one breakpoint plus the reduced-motion query', () => {
    const queries = css.match(/@media[^{]+/g) ?? []
    expect(queries.map((query) => query.trim())).toEqual([
      '@media (max-width: 900px)',
      '@media (prefers-reduced-motion: reduce)',
    ])
  })

  it('declares the page tokens through @theme', () => {
    for (const name of [
      'ground',
      'ink',
      'muted',
      'accent',
      'accent-soft',
      'accent-hover',
      'line',
      'cta-line',
      'list-ink',
    ]) {
      expect(css).toContain(`--color-${name}:`)
    }
    expect(css).toContain('--radius-card: 18px')
    expect(css).toContain('--radius-cta: 10px')
  })
})
