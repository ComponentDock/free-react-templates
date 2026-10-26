import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * jsdom cannot resolve a media query, a clamp or a keyframe, so the width
 * ladder, the two type ramps and the reduced-motion guard are asserted on the
 * stylesheet itself. The browser-measured geometry lives in the spec checklist.
 */
describe('index.css', () => {
  it('carries the measured palette and the one font family', () => {
    expect(css).toContain('--color-ground: #e9f4ee')
    expect(css).toContain('--color-ground-top: #f3faf6')
    expect(css).toContain('--color-halo: #c9ecd8')
    expect(css).toContain('--color-ink: #0f2e22')
    expect(css).toContain('--color-muted: #3d5a4d')
    expect(css).toContain('--color-green: #127a4f')
    expect(css).toContain('--color-lime: #c6f36b')
    expect(css).toContain('--color-phone: #0b0f0d')
    expect(css).toContain('--color-stars: #b45309')
    expect(css).toContain("--font-sans: 'DM Sans', system-ui")
  })

  it('sets both type ramps on their own clamps, not Tailwind steps', () => {
    expect(css).toContain('--text-display: clamp(2.6rem, 1.2rem + 5vw, 5.2rem)')
    expect(css).toContain('--text-lede: clamp(1.02rem, 0.95rem + 0.35vw, 1.2rem)')
    expect(css).toContain('font-size: var(--text-display)')
    expect(css).toContain('font-size: var(--text-lede)')
    expect(css).toContain('font-weight: 800')
    expect(css).toContain('line-height: 0.98')
    expect(css).toContain('letter-spacing: -0.045em')
  })

  it('holds one full-height column with the halo over the mint ramp', () => {
    expect(css).toContain('min-height: 100vh')
    expect(css).toContain('flex-direction: column')
    expect(css).toContain('overflow: hidden')
    expect(css).toContain('--gutter: clamp(16px, 4vw, 40px)')
    expect(css).toContain(
      'radial-gradient(50% 60% at 78% 55%, var(--color-halo) 0%, transparent 70%)',
    )
    expect(css).toContain('linear-gradient(180deg, var(--color-ground-top), var(--color-ground))')
    expect(css).toContain('align-items: center')
  })

  it('draws the product shot as four stacked CSS objects', () => {
    expect(css).toContain('width: 440px')
    expect(css).toContain('transform: translate(-40%, -50%)')
    expect(css).toMatch(/\.td-phone \{[\s\S]*?width: 270px;[\s\S]*?height: 556px;/)
    expect(css).toContain('border-radius: 44px')
    expect(css).toContain('0 0 0 2px var(--color-rim) inset')
    expect(css).toMatch(/\.td-phone--back \{[\s\S]*?width: 240px;[\s\S]*?height: 494px;/)
    expect(css).toContain('transform: rotate(8deg)')
    expect(css).toContain('width: 84px')
    expect(css).toContain('conic-gradient(var(--color-green) var(--p), var(--color-track) 0)')
    expect(css).toContain('height: calc(var(--v) * 100%)')
  })

  it('anchors the toast to the visual with the measured offset', () => {
    expect(css).toMatch(/\.td-toast \{[\s\S]*?left: calc\(50% - 300px\);/)
    expect(css).toContain('top: 60%')
    expect(css).toContain('animation: td-bob 6s ease-in-out -3s infinite')
  })

  it('re-anchors the toast at 640 so the shell never clips it', () => {
    expect(css).toMatch(
      /@media \(max-width: 640px\) \{[\s\S]*?\.td-toast \{[\s\S]*?bottom: -6px;[\s\S]*?transform: translateX\(-50%\);[\s\S]*?animation: none;/,
    )
    expect(css).not.toMatch(/max-width: 520px\)[^}]*\.td-toast/)
  })

  it('keeps the six-second bob on the front phone only', () => {
    expect(css).toMatch(/\.td-phone--front \{[\s\S]*?animation: td-bob 6s ease-in-out infinite;/)
    expect(css).toContain('@keyframes td-bob')
    expect(css).toMatch(/50% \{\s*transform: translateY\(-10px\);/)
    expect(css).not.toMatch(/\.td-phone--back \{[^}]*animation/)
  })

  it('stacks at 960, swaps to the disclosure at 860 and drops a phone at 520', () => {
    expect(css).toMatch(/@media \(max-width: 960px\) \{[\s\S]*?grid-template-columns: 1fr;/)
    expect(css).toMatch(/@media \(max-width: 960px\) \{[\s\S]*?text-align: center;/)
    expect(css).toMatch(
      /@media \(max-width: 860px\) \{[\s\S]*?\.td-bar\.is-enhanced \.td-menu-btn \{[\s\S]*?display: grid;/,
    )
    expect(css).toMatch(/top: calc\(100% - 8px\)/)
    expect(css).toMatch(/@media \(max-width: 520px\) \{[\s\S]*?\.td-phone--back \{[\s\S]*?display: none;/)
    expect(css).toMatch(/@media \(max-width: 520px\) \{[\s\S]*?width: 244px;[\s\S]*?height: 500px;/)
  })

  it('freezes every animation under reduced motion instead of hiding anything', () => {
    expect(css).toMatch(
      /@media \(prefers-reduced-motion: reduce\)[^@]*animation: none !important;[\s\S]*?transition: none !important;/,
    )
  })

  it('keeps the no-script fallback and the three-state bar', () => {
    expect(css).toContain('.td-bar:not(.is-enhanced) .td-bar-inner')
    expect(css).toMatch(/\.td-bar\.is-open \.td-menu-open \{\s*display: none;/)
    expect(css).toMatch(/\.td-bar\.is-open \.td-menu-close \{\s*display: block;/)
  })

  it('draws the done tick from a data URI, not an icon font', () => {
    expect(css).toContain('data:image/svg+xml')
    expect(css).toContain('text-decoration-color: var(--color-strike)')
    expect(css).toContain('width: 18px')
  })
})
