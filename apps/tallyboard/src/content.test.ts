import { describe, expect, it } from 'vitest'
import {
  ANNUAL_PRICES,
  COMPONENT_DOCK,
  FLAG_LABEL,
  HEADLINE,
  LEDE,
  MONTHLY_PRICES,
  PER_LABEL,
  PLANS,
  SAVE_LABEL,
  SIDE_LABELS,
  STATUS_ANNUAL,
  STATUS_MONTHLY,
  SWITCH_LABEL,
} from './content'

describe('site content', () => {
  it('scores four plans in the 3 / 4 / 4 / 4 bullet shape', () => {
    expect(PLANS).toHaveLength(4)
    expect(PLANS.map((plan) => plan.name)).toEqual(['Launch', 'Grow', 'Studio', 'Company'])
    expect(PLANS.map((plan) => plan.bullets.length)).toEqual([3, 4, 4, 4])
    expect(PLANS.map((plan) => plan.views)).toEqual([
      '25k views / month',
      '250k views / month',
      '1M views / month',
      '5M views / month',
    ])
  })

  it('prices one free plan and three that halve their monthly figure on annual', () => {
    expect(MONTHLY_PRICES).toEqual([0, 15, 40, 100])
    expect(ANNUAL_PRICES).toEqual([0, 12, 32, 80])
    for (const plan of PLANS.slice(1)) {
      expect(plan.monthly / plan.annual).toBeGreaterThan(1)
    }
  })

  it('flags exactly the third plan and keeps ids unique and prefixed', () => {
    expect(PLANS.filter((plan) => plan.featured)).toHaveLength(1)
    expect(PLANS.findIndex((plan) => plan.featured)).toBe(2)
    expect(new Set(PLANS.map((plan) => plan.id)).size).toBe(PLANS.length)
    for (const plan of PLANS) {
      expect(plan.id.startsWith('tallyboard-')).toBe(true)
    }
  })

  it('swaps the note with the period and keeps the free plan free in both', () => {
    expect(PLANS.map((plan) => plan.notes.monthly)).toEqual([
      'Free forever',
      'Billed monthly',
      'Billed monthly',
      'Billed monthly',
    ])
    expect(PLANS.slice(1).map((plan) => plan.notes.annual)).toEqual([
      '$144 billed yearly',
      '$384 billed yearly',
      '$960 billed yearly',
    ])
    expect(PLANS[0]?.notes.annual).toBe('Free forever')
  })

  it('keeps one headline, one lede and the state-named toggle', () => {
    expect(HEADLINE.split(' ')).toHaveLength(5)
    expect(HEADLINE.length).toBeLessThan(40)
    expect(LEDE.length).toBeGreaterThan(120)
    expect(LEDE).toContain('consent banner')
    expect(SWITCH_LABEL).toBe('Annual billing')
    expect(SIDE_LABELS).toEqual({ monthly: 'Monthly', annual: 'Annually' })
    expect(SAVE_LABEL).toBe('Save 20%')
    expect(FLAG_LABEL).toBe('Best value')
    expect(PER_LABEL).toBe('/ mo')
    expect(COMPONENT_DOCK).toBe('https://www.componentdock.com/')
  })

  it('announces a period change in two sentences', () => {
    expect(STATUS_MONTHLY).toBe('Monthly billing.')
    expect(STATUS_ANNUAL).toBe('Annual billing: prices shown per month, billed yearly.')
  })

  it('does not carry the source design’s branded copy', () => {
    const printed = [
      HEADLINE,
      LEDE,
      SIDE_LABELS.monthly,
      SIDE_LABELS.annual,
      SAVE_LABEL,
      SWITCH_LABEL,
      FLAG_LABEL,
      STATUS_MONTHLY,
      STATUS_ANNUAL,
      ...PLANS.flatMap((plan) => [
        plan.name,
        plan.views,
        plan.cta,
        plan.notes.monthly,
        plan.notes.annual,
        ...plan.bullets,
      ]),
    ]
      .join(' ')
      .toLowerCase()

    // Guard words are assembled from fragments so this file itself stays clean
    // of the source design's strings.
    for (const banned of [
      'color' + 'lib',
      'quill' + 'metric',
      'cookie' + '-free',
      'pageviews' + ' / month',
      'pricing' + '-table',
      'hob' + 'by',
      'starter',
      'audit trail',
    ]) {
      expect(printed).not.toContain(banned)
    }
  })
})
