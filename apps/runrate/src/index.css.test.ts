import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * Stylesheet invariants the jsdom suite cannot see: the two tracks, the
 * hard-stop slider gradient, the thumb geometry, the breakpoint and the absence
 * of keyframes. Every number here is the reference's own except the two repaired
 * control tokens.
 */
describe('index.css', () => {
  it('puts a 760px head over a 1.35fr / 1fr body at a 24px gap', () => {
    expect(css).toMatch(/\.rr-head \{[\s\S]*?max-width: 760px;/)
    expect(css).toMatch(/\.rr-head \{[\s\S]*?margin-bottom: 40px;/)
    expect(css).toContain('grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr)')
    expect(css).toContain('align-items: start')
    expect(css).toContain('max-width: 1100px')
  })

  it('gives the demo band the radial glow over the ink ground', () => {
    expect(css).toMatch(/\.rr-main \{[\s\S]*?padding: clamp\(40px, 7vw, 96px\) 16px;/)
    expect(css).toMatch(/radial-gradient\(\s*60% 50% at 80% 0%,\s*rgba\(45, 212, 191, 0\.12\),\s*transparent 70%\s*\)/)
    expect(css).toMatch(/background-color: var\(--color-ground\);/)
  })

  it('sets the base type at 15px over 1.55 in both places it applies', () => {
    const base = css.match(/body \{[\s\S]*?\n  \}/)?.[0] ?? ''
    expect(base).toContain('font-size: 15px;')
    expect(base).toContain('line-height: 1.55;')
    expect(css).toMatch(/\.rr-section \{[\s\S]*?font-size: 15px;[\s\S]*?line-height: 1\.55;/)
  })

  it('pads the panel and the card on their own clamps', () => {
    expect(css).toContain('padding: clamp(22px, 4vw, 38px)')
    expect(css).toContain('padding: clamp(22px, 3.5vw, 32px)')
    expect(css).toContain('border-radius: var(--radius-panel)')
    expect(css).toContain('box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6)')
    expect(css).toMatch(/\.rr-bill \{[\s\S]*?position: sticky;[\s\S]*?top: 24px;/)
  })

  it('paints the slider as a hard-stop gradient keyed to --fill', () => {
    expect(css).toContain('var(--color-teal) var(--fill, 40%)')
    expect(css).toContain('var(--color-track-rest) var(--fill, 40%)')
    expect(css).not.toMatch(/linear-gradient\(90deg,\s*var\(--color-teal\)\s+\d/)
  })

  it('sizes the thumb 22px square with a 6px radius and the -8px offset', () => {
    expect(css).toMatch(/::-webkit-slider-thumb \{[\s\S]*?width: 22px;/)
    expect(css).toMatch(/::-webkit-slider-thumb \{[\s\S]*?height: 22px;/)
    expect(css).toMatch(/::-webkit-slider-thumb \{[\s\S]*?margin-top: -8px;/)
    expect(css).toContain('border-radius: var(--radius-thumb)')
    expect(css).toContain('box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.35)')
  })

  it('records the Firefox split as two pseudo-elements, not a copy of the gradient', () => {
    expect(css).toMatch(/::-moz-range-track \{[\s\S]*?background-color: var\(--color-track-rest\);/)
    expect(css).toMatch(/::-moz-range-progress \{[\s\S]*?background-color: var\(--color-teal\);/)
  })

  it('puts the focus ring on the thumb, never on the input outline', () => {
    expect(css).toMatch(/\.rr-range:focus-visible \{\s*outline: none;/)
    expect(css).toMatch(
      /\.rr-range:focus-visible::-webkit-slider-thumb \{[^}]*0 0 0 3px var\(--color-ground\)[^}]*0 0 0 6px #fff/,
    )
  })

  it('drives the checked row from data-checked, not from :has()', () => {
    expect(css).toContain(".rr-check[data-checked='true']")
    expect(css).toContain('border-style: solid;')
    expect(css).toContain('background-color: rgba(45, 212, 191, 0.06);')
    expect(css).not.toContain(':has(')
  })

  it('grows the segments by flex-grow with the 0.35s transition', () => {
    expect(css).toMatch(/\.rr-seg \{[\s\S]*?flex: 0 1 0;/)
    expect(css).toMatch(/\.rr-seg \{[\s\S]*?box-shadow: inset -2px 0 var\(--color-card\);/)
    expect(css).toContain('transition: flex-grow 0.35s ease;')
  })

  it('rules the four breakdown rows with a hairline and 9px of padding', () => {
    expect(css).toMatch(/\.rr-line \{[\s\S]*?padding: 9px 0;/)
    expect(css).toContain('border-top: 1px solid var(--color-card-rule)')
    expect(css).toMatch(/\.rr-key \{[\s\S]*?width: 10px;/)
  })

  it('ships exactly one breakpoint plus the reduced-motion query', () => {
    const queries = css.match(/@media[^{]+/g) ?? []
    expect(queries.map((query) => query.trim())).toEqual([
      '@media (max-width: 860px)',
      '@media (prefers-reduced-motion: reduce)',
    ])
  })

  it('stacks the card under the panel at 860 and un-sticks it', () => {
    expect(css).toMatch(
      /@media \(max-width: 860px\) \{\s*\.rr-body \{\s*grid-template-columns: minmax\(0, 1fr\);\s*\}\s*\.rr-bill \{\s*position: static;/,
    )
  })

  it('carries no keyframes and drops both transitions under reduced motion', () => {
    expect(css).not.toContain('@keyframes')
    expect(css).not.toMatch(/^\s*animation:/m)
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\) \{[\s\S]*transition: none;/)
  })

  it('declares the palette through @theme, including both repairs', () => {
    const tokens = [
      ['teal', '#2dd4bf'],
      ['ink', '#e2e8f0'],
      ['muted', '#a3b0c2'],
      ['panel', '#111a2e'],
      ['line', '#22304a'],
      ['ground', '#0b1120'],
      ['track-rest', '#506890'],
      ['check-line', '#546c8f'],
      ['card', '#f8fafc'],
      ['card-ink', '#0f172a'],
      ['card-muted', '#475569'],
      ['card-key', '#334155'],
      ['card-rule', '#e2e8f0'],
      ['seg-calls', '#14b8a6'],
      ['seg-storage', '#3b82f6'],
      ['seg-support', '#f43f5e'],
    ] as const

    for (const [name, value] of tokens) {
      expect(css).toContain(`--color-${name}: ${value};`)
    }
  })

  it('uses the repaired tokens for the two control boundaries', () => {
    expect(css).toMatch(/\.rr-check \{[\s\S]*?border: 1px dashed var\(--color-check-line\);/)
    expect(css).toContain('var(--color-track-rest) var(--fill, 40%)')
  })

  it('keeps the status node out of layout without display: none', () => {
    expect(css).toMatch(/\.rr-vh \{[\s\S]*?clip-path: inset\(50%\);/)
    expect(css).toMatch(/\.rr-vh \{[\s\S]*?width: 1px;/)
  })

  it('carries no reference class prefix and no reset firewall', () => {
    expect(css).not.toContain('all: revert')
    expect(css).not.toMatch(/\.cl-/)
    expect(css).not.toContain('prefers-color-scheme')
  })
})
