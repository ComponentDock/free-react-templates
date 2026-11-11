import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * Stylesheet invariants the jsdom suite cannot see: the grid tracks, the five
 * ground layers, the two-layer gradient border, the single breakpoint, and the
 * absence of the reference's `all: revert` firewall (which would un-reset
 * Tailwind's preflight) and of its dead `.cl-icon` rule.
 */
describe('index.css', () => {
  it('keeps three equal minmax tracks with the reference 22px gap', () => {
    expect(css).toContain('grid-template-columns: repeat(3, minmax(0, 1fr))')
    expect(css).not.toMatch(/grid-template-columns:\s*repeat\(3, 1fr\)/)
    expect(css).toContain('gap: 22px')
    expect(css).toContain('align-items: stretch')
  })

  it('paints the ground with all five layers', () => {
    expect(css).toContain('radial-gradient(38% 30% at 18% 8%')
    expect(css).toContain('rgba(236, 72, 153, 0.22)')
    expect(css).toContain('radial-gradient(34% 30% at 85% 20%')
    expect(css).toContain('rgba(34, 211, 238, 0.18)')
    expect(css).toContain('linear-gradient(rgba(148, 115, 255, 0.07) 1px, transparent 1px)')
    expect(css).toContain('linear-gradient(90deg, rgba(148, 115, 255, 0.07) 1px, transparent 1px)')
    expect(css).toMatch(/44px 44px/)
    expect(css).toContain('background-color: var(--color-ground)')
  })

  it('builds the featured border out of two background layers, not border-color', () => {
    expect(css).toContain('background-clip: padding-box, border-box')
    expect(css).toContain('background-origin: padding-box, border-box')
    expect(css).toMatch(/linear-gradient\(\s*135deg,/)
    expect(css).toContain('border: 1px solid transparent')
    expect(css).toMatch(/\.lm-plan--pop:hover \{\s*border-color: transparent;/)
  })

  it('carries the three-layer featured shadow and the glow amount', () => {
    expect(css).toContain('0 0 0 1px rgba(244, 114, 182, 0.15)')
    expect(css).toContain('0 30px 80px -30px rgba(244, 114, 182, 0.6)')
    expect(css).toContain('0 0 60px -20px rgba(34, 211, 238, 0.4)')
    expect(css).toMatch(/\.lm-plan--pop \.lm-amount \{\s*text-shadow: 0 0 28px/)
  })

  it('keeps the feature list as the stretch absorber', () => {
    expect(css).toMatch(/\.lm-list \{\s*flex: 1;/)
    expect(css).toContain('margin: 0 0 28px')
  })

  it('ships exactly one breakpoint plus the reduced-motion query', () => {
    const queries = css.match(/@media[^{]+/g) ?? []
    expect(queries.map((query) => query.trim())).toEqual([
      '@media (max-width: 900px)',
      '@media (prefers-reduced-motion: reduce)',
    ])
  })

  it('collapses to one centred column at 900', () => {
    expect(css).toMatch(/@media \(max-width: 900px\) \{\s*\.lm-grid \{/)
    expect(css).toContain('grid-template-columns: minmax(0, 1fr)')
    expect(css).toContain('max-width: 460px')
  })

  it('carries no keyframes and no animation property', () => {
    expect(css).not.toContain('@keyframes')
    expect(css).not.toMatch(/^\s*animation:/m)
  })

  it('drops the reference firewall and its dead icon rule', () => {
    expect(css).not.toContain('all: revert')
    expect(css).not.toContain('.cl-icon')
  })

  it('declares the palette through @theme', () => {
    for (const name of [
      'ground',
      'ink',
      'muted',
      'neon-pink',
      'neon-cyan',
      'neon-violet',
      'card-top',
      'card-bottom',
      'feat-top',
      'feat-bottom',
      'cta-line',
    ]) {
      expect(css).toContain(`--color-${name}:`)
    }
    expect(css).toContain('--color-neon-pink: #f472b6')
    expect(css).toContain('--color-neon-cyan: #22d3ee')
    expect(css).toContain('--color-neon-violet: #a78bfa')
    expect(css).toContain('--color-ink: #f5f3ff')
    expect(css).toContain('--color-muted: #b9b3d1')
    expect(css).toContain('--color-ground: #08060f')
  })

  it('raises the ghost CTA border to the repaired 60% violet', () => {
    expect(css).toContain('--color-cta-line: rgba(167, 139, 250, 0.6)')
    expect(css).toContain('border: 1px solid var(--color-cta-line)')
  })

  it('marks the focus ring on the anchors only', () => {
    expect(css).toMatch(/\.lm-cta:focus-visible \{\s*outline: 3px solid var\(--color-neon-cyan\);/)
    expect(css).toContain('outline-offset: 3px')
    expect(css).not.toMatch(/\.lm-plan:focus-visible/)
  })

  it('kills the lift and both transitions under reduced motion', () => {
    expect(css).toMatch(
      /@media \(prefers-reduced-motion: reduce\) \{[\s\S]*transition: none;[\s\S]*transform: none;/,
    )
  })
})
