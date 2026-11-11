import { describe, expect, it } from 'vitest'
import { EYEBROW, FOOTNOTE_PREFIX, FOOTER_LINK_LABEL, HEADLINE, LEDE, PERIOD, PLANS } from './site'

describe('site content', () => {
  it('scores three plans in the reference 4 / 5 / 5 bullet shape', () => {
    expect(PLANS).toHaveLength(3)
    expect(PLANS.map((plan) => plan.bullets.length)).toEqual([4, 5, 5])
    expect(PLANS.map((plan) => plan.name)).toEqual(['Solo', 'Team', 'Studio'])
    expect(PLANS.map((plan) => plan.price)).toEqual(['$15', '$39', '$99'])
  })

  it('flags exactly one plan and keeps every id unique', () => {
    expect(PLANS.filter((plan) => plan.featured)).toHaveLength(1)
    expect(new Set(PLANS.map((plan) => plan.id)).size).toBe(PLANS.length)
    for (const plan of PLANS) {
      expect(plan.per).toBe(PERIOD)
      expect(plan.id.startsWith('ratecard-')).toBe(true)
    }
  })

  it('keeps the headline short and the lede product-led', () => {
    expect(HEADLINE.split(' ')).toHaveLength(5)
    expect(HEADLINE.length).toBeLessThan(40)
    expect(LEDE.length).toBeGreaterThan(120)
    expect(LEDE).toContain('14 days')
    expect(EYEBROW).toBe('Pricing')
  })

  it('does not carry the source design"s branded copy', () => {
    const printed = [
      EYEBROW,
      HEADLINE,
      LEDE,
      FOOTNOTE_PREFIX,
      FOOTER_LINK_LABEL,
      ...PLANS.flatMap((plan) => [
        plan.name,
        plan.description,
        plan.cta,
        plan.label,
        ...plan.bullets,
      ]),
    ]
      .join(' ')
      .toLowerCase()

    for (const banned of [
      'relaylane',
      'every inbox',
      'starter',
      'growth',
      'scale',
      '$19',
      '$49',
      '$129',
      '5,000',
    ]) {
      expect(printed).not.toContain(banned)
    }
  })
})
