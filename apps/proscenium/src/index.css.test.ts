import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * jsdom cannot compute a media query or a transform, so the ladder, the tilt,
 * the toast clamp and the reduced-motion guard are asserted on the stylesheet
 * itself. The browser-verified geometry lives in the spec's checklist.
 */
describe('index.css', () => {
  it('declares the two inclusive width variants the JSX uses', () => {
    expect(css).toContain('@custom-variant heroMd (@media (max-width: 860px))')
    expect(css).toContain('@custom-variant heroSm (@media (max-width: 560px))')
  })

  it('splits the hero 1 : 1.1 with a clamp gap and clamp padding', () => {
    expect(css).toContain('grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr)')
    expect(css).toContain('gap: clamp(32px, 5vw, 72px)')
    expect(css).toContain('padding: clamp(32px, 6vw, 88px) var(--gutter) clamp(56px, 8vw, 112px)')
  })

  it('tilts the mock only above 960', () => {
    expect(css).toContain('transform: perspective(1600px) rotateY(-6deg) rotateX(2deg)')
    expect(css).toContain('transform-origin: left center')
    expect(css).toMatch(/@media \(max-width: 960px\)[\s\S]*?\.hero-mock \{\s*transform: none;/)
  })

  it('clamps the toast so the 561–699 px band is not clipped', () => {
    expect(css).toContain('left: max(-28px, calc(-1 * var(--gutter)))')
    expect(css).toMatch(
      /@media \(max-width: 560px\)[\s\S]*?\.hero-toast \{\s*left: 12px;\s*bottom: -40px;/,
    )
  })

  it('paints the ground as two blooms over the base plus a 22 px dot grid', () => {
    expect(css).toContain(
      'radial-gradient(60% 60% at 85% 20%, rgba(139, 92, 246, 0.16), transparent 70%)',
    )
    expect(css).toContain('background-size: 22px 22px')
    expect(css).toContain('mask-image: linear-gradient(180deg, #000, transparent 75%)')
  })

  it('defines the two animations the classes reference', () => {
    expect(css).toMatch(/@keyframes grow \{\s*from \{\s*transform: scaleY\(0\.1\);/)
    expect(css).toMatch(/@keyframes bob \{\s*50% \{\s*transform: translateY\(-8px\);/)
  })

  it('delays the last six bars', () => {
    expect(css).toMatch(/\.hero-bars > span:nth-child\(n \+ 7\) \{\s*animation-delay: 0\.15s;/)
  })

  it('switches every animation and transition off under reduced motion', () => {
    expect(css).toMatch(
      /@media \(prefers-reduced-motion: reduce\) \{\s*\.hero-motion,\s*\.hero-motion \* \{\s*animation: none !important;\s*transition: none !important;/,
    )
  })

  it('carries the accent gradient on the inline span, not the heading', () => {
    expect(css).toContain('background: linear-gradient(92deg, #5b3df5, #9333ea)')
    expect(css).toContain('background-clip: text')
  })
})
