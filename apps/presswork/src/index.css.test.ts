import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * jsdom cannot resolve a media query, a clamp or a keyframe, so the width
 * ladder, the display type and the reduced-motion guard are asserted on the
 * stylesheet itself. The browser-measured geometry lives in the spec checklist.
 */
describe('index.css', () => {
  it('carries the five measured colours and the two font stacks', () => {
    expect(css).toContain('--color-paper: #f1ece2')
    expect(css).toContain('--color-ink: #1a1714')
    expect(css).toContain('--color-muted: #5a5249')
    expect(css).toContain('--color-rule: #cfc5b5')
    expect(css).toContain('--color-accent: #b3401e')
    expect(css).toContain('--font-display:')
    expect(css).toContain('--font-sans:')
  })

  it('sets the display type on its own clamp, not a Tailwind step', () => {
    expect(css).toContain('--text-display: clamp(3rem, 0.6rem + 10vw, 12rem)')
    expect(css).toContain('font-size: var(--text-display)')
    expect(css).toContain('font-weight: 350')
    expect(css).toContain("font-variation-settings: 'opsz' 144")
    expect(css).toContain('letter-spacing: -0.045em')
    expect(css).toContain('line-height: 0.9')
  })

  it('holds one full-height column that can never scroll sideways', () => {
    expect(css).toContain('min-height: 100vh')
    expect(css).toContain('flex-direction: column')
    expect(css).toContain('overflow-x: clip')
    expect(css).toContain('--gutter: clamp(16px, 4vw, 56px)')
  })

  it('keeps the two hairlines over the three-column foot', () => {
    expect(css).toContain('border-bottom: 1px solid var(--color-rule)')
    expect(css).toContain('border-top: 1px solid var(--color-rule)')
    expect(css).toContain(
      'grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) auto',
    )
    expect(css).toContain('align-items: end')
    expect(css).toContain('margin-top: auto')
    expect(css).toContain('gap: clamp(24px, 4vw, 64px)')
  })

  it('draws the nav underline as a growing background, not a border', () => {
    expect(css).toContain('background-image: linear-gradient(currentColor, currentColor)')
    expect(css).toContain('background-size: 0 1px')
    expect(css).toContain('background-size: 100% 1px')
    expect(css).toContain('transition: background-size 0.35s ease')
  })

  it('generates the kicker separators from CSS', () => {
    expect(css).toMatch(/\.pw-kicker span \+ span::before \{[^}]*content: '\/'/)
    expect(css).toContain('letter-spacing: 0.12em')
    expect(css).toContain('text-transform: uppercase')
  })

  it('spins the stamp on a 22-second clock and insets it on phones', () => {
    expect(css).toContain('animation: pw-spin 22s linear infinite')
    expect(css).toMatch(/@keyframes pw-spin \{\s*to \{\s*transform: rotate\(360deg\)/)
    expect(css).toContain('width: clamp(88px, 6vw + 40px, 150px)')
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.pw-badge \{[\s\S]*?bottom: -8px/)
  })

  it('collapses the foot to one column at 1100 and the services back to one at 640', () => {
    expect(css).toMatch(
      /@media \(max-width: 1100px\)[\s\S]*?grid-template-columns: repeat\(3, auto\)/,
    )
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.pw-services \{/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?padding-left: 0\.6em/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?justify-self: stretch/)
  })

  it('freezes the ring under reduced motion instead of hiding it', () => {
    expect(css).toMatch(
      /@media \(prefers-reduced-motion: reduce\)[\s\S]*?animation: none !important;[\s\S]*?transition: none !important;/,
    )
  })
})
