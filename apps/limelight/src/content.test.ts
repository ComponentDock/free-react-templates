import { describe, expect, it } from 'vitest'
import {
  EYEBROW,
  FOOTNOTE,
  FOOTER_LINK_LABEL,
  FOOTER_PREFIX,
  HEADING_ID,
  HEADLINE_GLOW,
  HEADLINE_LEAD,
  LEDE,
  PLANS,
  SECTION_ID,
} from './content'
import { banned } from './test/banned'

describe('content', () => {
  it('describes exactly three plans, one per tone', () => {
    expect(PLANS).toHaveLength(3)
    expect(PLANS.map((plan) => plan.tone)).toEqual(['cyan', 'pink', 'violet'])
    expect(new Set(PLANS.map((plan) => plan.name)).size).toBe(3)
    expect(new Set(PLANS.map((plan) => plan.id)).size).toBe(3)
  })

  it('flags the middle plan only', () => {
    expect(PLANS.map((plan) => plan.featured)).toEqual([false, true, false])
    expect(PLANS[1]?.tone).toBe('pink')
  })

  it('leaves the free plan without a period marker', () => {
    expect(PLANS[0]?.price).toBe('Free')
    expect(PLANS[0]?.period).toBeNull()
    for (const plan of PLANS.slice(1)) expect(plan.period).toBe('/ month')
  })

  it('gives the paid plans five bullets and the free one four, all distinct', () => {
    expect(PLANS.map((plan) => plan.bullets.length)).toEqual([4, 5, 5])
    const all = PLANS.flatMap((plan) => plan.bullets)
    expect(new Set(all).size).toBe(all.length)
    for (const bullet of all) expect(bullet.trim()).not.toBe('')
  })

  it('gives every plan its own call to action', () => {
    expect(new Set(PLANS.map((plan) => plan.cta)).size).toBe(3)
    for (const plan of PLANS) expect(plan.cta).not.toMatch(/^sign up$/i)
  })

  it("keeps the head's three parts and their split", () => {
    expect(HEADLINE_LEAD.trim()).not.toBe('')
    expect(HEADLINE_GLOW).not.toContain(' ')
    expect(`${HEADLINE_LEAD}${HEADLINE_GLOW}`).toMatch(/light$/)
    expect(LEDE.length).toBeGreaterThan(80)
    expect(EYEBROW).toMatch(/creators/i)
  })

  it('keeps stable ids and the Component Dock footer copy', () => {
    expect(SECTION_ID).toBe('plans')
    expect(HEADING_ID).toBe('limelight-title')
    expect(FOOTER_PREFIX).toBe('More templates at')
    expect(FOOTER_LINK_LABEL).toBe('Component Dock')
    expect(FOOTNOTE).toMatch(/cancel any time/i)
  })

  it('carries none of the source design names', () => {
    // Assembled at run time so the provenance sweep finds no banned string in the tree.
    const copy = JSON.stringify({ PLANS, EYEBROW, LEDE, FOOTNOTE })
    expect(copy).not.toContain(banned('color', 'lib'))
    expect(copy).not.toContain(banned('glitch', 'cast'))
    expect(copy).not.toContain(banned('pricing', '-table'))
  })
})
