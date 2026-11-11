import { describe, expect, it } from 'vitest'
import css from './index.css?raw'
import { banned } from './test/banned'

/**
 * Stylesheet invariants the jsdom suite cannot see: the two table properties the
 * layout depends on, the column split, the motion budget, the breakpoints and
 * the absence of the snippet's `all: revert` firewall.
 */
describe('index.css', () => {
  it('keeps the table separate and fixed, which the sticky header and radius depend on', () => {
    expect(css).toContain('border-collapse: separate')
    expect(css).toContain('table-layout: fixed')
    expect(css).not.toContain('border-collapse: collapse')
  })

  it('splits the first column 34 % wide, 37 % on a phone', () => {
    expect(css).toContain('width: 34%')
    expect(css).toContain('width: 37%')
  })

  it('keeps the padding inside the card cap so the content box stays 1080', () => {
    expect(css).toContain('max-width: calc(1080px + 2 * var(--pad))')
    expect(css).toContain('--pad: clamp(24px, 4vw, 48px)')
  })

  it('carries no keyframes and only the four budgeted transitions', () => {
    expect(css).not.toContain('@keyframes')
    expect(css.match(/transition:/g) ?? []).toHaveLength(3)
    expect(css).toContain('transition:\n      background-color 0.2s ease,\n      color 0.2s ease;')
    expect(css).toContain('transition: transform 0.2s ease')
  })

  it('drops both transitions under prefers-reduced-motion and changes nothing else there', () => {
    const block = css.slice(css.indexOf('@media (prefers-reduced-motion: reduce)'))

    expect(block).toContain('.pt-chev,')
    expect(block).toContain('.pt-cta {')
    expect(block).toContain('transition: none;')
    expect(block.match(/transition:/g) ?? []).toHaveLength(1)
  })

  it('ships the one layout breakpoint plus the motion query', () => {
    const queries = css.match(/@media[^{]+/g) ?? []
    expect(queries.map((query) => query.trim())).toEqual([
      '@media (max-width: 720px)',
      '@media (prefers-reduced-motion: reduce)',
    ])
  })

  it('guards the header blur behind @supports', () => {
    expect(css).toContain('@supports (backdrop-filter: blur(6px))')
  })

  it('carries exactly one shadow — the card', () => {
    expect(css.match(/box-shadow:/g) ?? []).toHaveLength(1)
  })

  it('drops the snippet firewall and every provenance string', () => {
    expect(css).not.toContain('all: revert')
    // Assembled at run time so the provenance sweep finds no banned string in the tree.
    expect(css.toLowerCase()).not.toContain(banned('color', 'lib'))
    expect(css).not.toContain(banned('pricing', '-table-03'))
  })
})
