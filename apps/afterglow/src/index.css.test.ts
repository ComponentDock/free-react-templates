import { describe, expect, it } from 'vitest'
import css from './index.css?raw'

/**
 * jsdom cannot resolve a media query, a blur filter or a keyframe, so the width
 * ladder, the mesh and the reduced-motion guard are asserted on the stylesheet
 * itself. The browser-measured geometry lives in the spec's checklist.
 */
describe('index.css', () => {
  it('declares the three inclusive width steps the reference uses', () => {
    expect(css).toContain('@media (max-width: 960px)')
    expect(css).toContain('@media (max-width: 860px)')
    expect(css).toContain('@media (max-width: 520px)')
  })

  it('carries the measured palette', () => {
    expect(css).toContain('--color-ground: #fbfaff')
    expect(css).toContain('--color-ink: #14121f')
    expect(css).toContain('--color-muted: #423f55')
    expect(css).toContain('--color-kicker: #4a4760')
    expect(css).toContain('--color-wordmark: #3a374c')
    expect(css).toContain('--color-star: #d97706')
    expect(css).toContain('--color-focus: #6d28d9')
    expect(css).toContain('--color-mesh-pink: #ff9fd2')
    expect(css).toContain('--color-mesh-blue: #8fc5ff')
    expect(css).toContain('--color-mesh-violet: #b7a0ff')
    expect(css).toContain('--color-mesh-peach: #ffd3a1')
  })

  it('paints four blobs and a scrim, not a gradient', () => {
    expect(css).toContain('width: 46vw')
    expect(css).toContain('max-width: 680px')
    expect(css).toContain('filter: blur(70px)')
    expect(css).toContain(
      'linear-gradient(180deg, rgba(251, 250, 255, 0.1), rgba(251, 250, 255, 0.55) 60%, #fbfaff)',
    )
    expect(css).toMatch(/@keyframes ag-drift-a[\s\S]*?translate\(14vw, 10vh\) scale\(1\.15\)/)
    expect(css).toMatch(/@keyframes ag-drift-b[\s\S]*?translate\(-16vw, 14vh\) scale\(0\.9\)/)
    expect(css).toMatch(/@keyframes ag-drift-c[\s\S]*?translate\(8vw,\s?-12vw\) scale\(1\.2\)/)
    expect(css).toMatch(/\.ag-blob--a[\s\S]*?animation: ag-drift-a 18s/)
    expect(css).toMatch(/\.ag-blob--b[\s\S]*?animation: ag-drift-b 22s/)
    expect(css).toMatch(/\.ag-blob--c[\s\S]*?animation: ag-drift-c 20s/)
    expect(css).toMatch(/\.ag-blob--d[\s\S]*?animation: ag-drift-a 16s[^;]*alternate-reverse/)
  })

  it('keeps the glass pill as the dropdown’s containing block', () => {
    expect(css).toContain('backdrop-filter: blur(14px)')
    expect(css).toMatch(/\.ag-nav[\s\S]*?position: absolute[\s\S]*?top: calc\(100% \+ 8px\)/)
    expect(css).toContain('left: var(--gutter)')
    expect(css).toContain('right: var(--gutter)')
  })

  it('sets the hero and the logo band on the measured clamps', () => {
    expect(css).toContain('padding: clamp(40px, 6vw, 80px) var(--gutter) clamp(36px, 4.5vw, 60px)')
    expect(css).toContain('font-size: clamp(2.5rem, 1.2rem + 5.2vw, 5.4rem)')
    expect(css).toContain('font-size: clamp(1.02rem, 0.95rem + 0.35vw, 1.2rem)')
    expect(css).toContain('max-width: 900px')
    expect(css).toContain('max-width: 1080px')
    expect(css).toContain('padding: 0 var(--gutter) clamp(40px, 6vw, 64px)')
  })

  it('steps the logo grid 6 → 3 → 2 and the tiles 64 → 56', () => {
    expect(css).toContain('grid-template-columns: repeat(6, minmax(0, 1fr))')
    expect(css).toMatch(
      /@media \(max-width: 960px\)[\s\S]*?grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/,
    )
    expect(css).toMatch(
      /@media \(max-width: 520px\)[\s\S]*?grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/,
    )
    expect(css).toMatch(/@media \(max-width: 520px\)[\s\S]*?min-height: 56px/)
  })

  it('widens the blobs and softens the blur below 860', () => {
    expect(css).toMatch(
      /@media \(max-width: 860px\)[\s\S]*?\.ag-blob \{\s*width: 80vw;\s*filter: blur\(50px\);/,
    )
  })

  it('keeps a no-JS fallback for the bar alongside the enhanced branch', () => {
    expect(css).toContain('.ag-bar.is-enhanced .ag-menu-btn')
    expect(css).toContain('.ag-bar:not(.is-enhanced) .ag-pill')
  })

  it('freezes the mesh under reduced motion instead of hiding it', () => {
    expect(css).toMatch(
      /@media \(prefers-reduced-motion: reduce\)[\s\S]*?animation: none !important;[\s\S]*?transition: none !important;/,
    )
  })
})
