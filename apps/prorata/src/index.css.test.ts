import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * Stylesheet invariants the jsdom suite cannot see: the two tracks, the
 * hard-stop slider gradient, the thumb geometry, the three breakpoints and the
 * absence of keyframes. Every number here is the reference's own except the
 * control-line token, which is the port's contrast repair.
 */
describe('index.css', () => {
  it('lays the two columns out as 1.05fr against 1fr with the fluid gap', () => {
    expect(css).toContain('grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr)')
    expect(css).toContain('gap: clamp(32px, 6vw, 88px)')
    expect(css).toContain('align-items: center')
    expect(css).toContain('max-width: 1100px')
  })

  it('gives the demo band 110px of air and 16px sides', () => {
    expect(css).toMatch(/\.pr-main \{\s*padding: clamp\(40px, 8vw, 110px\) 16px;/)
  })

  it('pads the card on the same kind of clamp', () => {
    expect(css).toContain('padding: clamp(24px, 4vw, 40px)')
    expect(css).toContain('border-radius: var(--radius-card)')
    expect(css).toContain('box-shadow: 0 30px 60px -40px rgba(12, 10, 9, 0.35)')
  })

  it('paints the slider as a hard-stop gradient keyed to --pr-fill', () => {
    expect(css).toContain('linear-gradient(')
    expect(css).toContain('var(--color-ink) var(--pr-fill, 5.5%)')
    expect(css).toContain('var(--color-control-line) var(--pr-fill, 5.5%)')
    expect(css).not.toMatch(/linear-gradient\(90deg,\s*var\(--color-ink\)\s+\d/)
  })

  it('sizes the thumb 26px with a 3px ink ring and the -9px offset', () => {
    expect(css).toMatch(/::-webkit-slider-thumb \{[\s\S]*?width: 26px;/)
    expect(css).toMatch(/::-webkit-slider-thumb \{[\s\S]*?height: 26px;/)
    expect(css).toMatch(/::-webkit-slider-thumb \{[\s\S]*?margin-top: -9px;/)
    expect(css).toContain('border: 3px solid var(--color-ink)')
    expect(css).toContain('box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)')
    expect(css).toMatch(/:active::-webkit-slider-thumb \{\s*transform: scale\(1\.12\);/)
  })

  it('records the Firefox thumb as 20px instead of silently copying 26', () => {
    expect(css).toMatch(/::-moz-range-thumb \{[\s\S]*?width: 20px;/)
    expect(css).toContain('::-moz-range-progress')
  })

  it('puts the focus ring on the thumb, not on the range outline', () => {
    expect(css).toMatch(/\.pr-range:focus-visible \{\s*outline: none;/)
    expect(css).toMatch(/\.pr-range:focus-visible::-webkit-slider-thumb \{[^}]*0 0 0 7px var\(--color-accent\)/)
  })

  it('keeps the paint order so a used-and-current chip goes ink', () => {
    const used = css.indexOf('.pr-tier--used {')
    const current = css.indexOf('.pr-tier--current {')
    expect(used).toBeGreaterThan(-1)
    expect(current).toBeGreaterThan(used)
  })

  it('ships exactly two breakpoints plus the reduced-motion query', () => {
    const queries = css.match(/@media[^{]+/g) ?? []
    expect(queries.map((query) => query.trim())).toEqual([
      '@media (max-width: 860px)',
      '@media (max-width: 480px)',
      '@media (prefers-reduced-motion: reduce)',
    ])
  })

  it('stacks the card under the copy at 860 and re-flows the list at 480', () => {
    expect(css).toMatch(/@media \(max-width: 860px\) \{\s*\.pr-section \{\s*grid-template-columns: minmax\(0, 1fr\);/)
    expect(css).toMatch(/@media \(max-width: 480px\) \{\s*\.pr-list \{\s*grid-template-columns: minmax\(0, 1fr\);/)
    expect(css).toMatch(/\.pr-tier-per \{\s*display: none;/)
  })

  it('carries no keyframes and no animation property', () => {
    expect(css).not.toContain('@keyframes')
    expect(css).not.toMatch(/^\s*animation:/m)
  })

  it('ships exactly three transitions and drops all of them under reduced motion', () => {
    const transitions = css.match(/transition:(?!\s*none)/g) ?? []
    expect(transitions).toHaveLength(3)
    expect(css).toMatch(
      /@media \(prefers-reduced-motion: reduce\) \{[\s\S]*transition: none;[\s\S]*transform: none;/,
    )
  })

  it('declares the palette through @theme', () => {
    const tokens = [
      ['accent', '#c2410c'],
      ['accent-hover', '#9a3412'],
      ['ink', '#0c0a09'],
      ['muted', '#57534e'],
      ['line', '#e7e5e4'],
      ['ground', '#fafaf9'],
      ['chip-used', '#f5f5f4'],
      ['chip-used-line', '#d6d3d1'],
      ['scale', '#78716c'],
      ['scale-strong', '#6b6560'],
      ['control-line', '#8f877f'],
    ] as const

    for (const [name, value] of tokens) {
      expect(css).toContain(`--color-${name}: ${value};`)
    }
  })

  it('uses the repaired token for the two control boundaries', () => {
    expect(css).toMatch(/\.pr-field \{[\s\S]*?border: 1px solid var\(--color-control-line\);/)
    expect(css).toContain('var(--color-control-line) var(--pr-fill, 5.5%)')
  })

  it('keeps the hidden label out of layout without display: none', () => {
    expect(css).toMatch(/\.pr-vh \{[\s\S]*clip-path: inset\(50%\);/)
    expect(css).toMatch(/\.pr-vh \{[\s\S]*width: 1px;/)
  })

  it('carries no reference class prefix and no reset firewall', () => {
    expect(css).not.toContain('all: revert')
    expect(css).not.toMatch(/\.cl-/)
  })
})
