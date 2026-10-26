import { describe, it, expect } from 'vitest'
import {
  ACCOUNT,
  GOAL,
  HEAD,
  TRANSACTIONS,
  formatEuro,
  formatEuroCompact,
  formatSignedEuro,
  goalMonthlyLine,
  goalPercent,
  goalTargetLabel,
  monthsToGoal,
  splitEuro,
} from './accounts'

describe('dataset', () => {
  it('carries the reference greeting and its one context line', () => {
    expect(HEAD.title).toBe('Good evening, Lina')
    expect(HEAD.sub).toBe('Here is where your money stands this week.')
  })

  it('holds one account, one goal and four transactions', () => {
    expect(ACCOUNT.balanceCents).toBe(648_230)
    expect(ACCOUNT.last4).toBe('4821')
    expect(GOAL.savedCents).toBe(272_000)
    expect(GOAL.targetCents).toBe(400_000)
    expect(TRANSACTIONS).toHaveLength(4)
  })

  it('signs each transaction so exactly one is a credit', () => {
    const credits = TRANSACTIONS.filter((transaction) => transaction.cents > 0)
    expect(credits).toHaveLength(1)
    expect(credits[0]!.merchant).toBe('Salary')
  })
})

describe('formatEuro', () => {
  it('groups thousands and always shows the cents', () => {
    expect(formatEuro(648_230)).toBe('€6,482.30')
    expect(formatEuro(400_000)).toBe('€4,000.00')
    expect(formatEuro(32_000)).toBe('€320.00')
  })

  it('drops the sign — the ledger adds it', () => {
    expect(formatEuro(-4_218)).toBe('€42.18')
  })
})

describe('splitEuro', () => {
  it('splits the balance so the cents can set one size down', () => {
    expect(splitEuro(648_230)).toEqual({ whole: '€6,482', cents: '.30' })
  })

  it('pads a single-digit cents part', () => {
    expect(splitEuro(840)).toEqual({ whole: '€8', cents: '.40' })
  })
})

describe('formatEuroCompact', () => {
  it('drops a zero cents tail', () => {
    expect(formatEuroCompact(32_000)).toBe('€320')
    expect(formatEuroCompact(400_000)).toBe('€4,000')
  })

  it('keeps the cents when there are any', () => {
    expect(formatEuroCompact(272_050)).toBe('€2,720.50')
  })
})

describe('formatSignedEuro', () => {
  it('uses U+2212 for money out and a plus for money in', () => {
    expect(formatSignedEuro(-4_218)).toBe('−€42.18')
    expect(formatSignedEuro(315_000)).toBe('+€3,150.00')
  })

  it('treats zero as a credit rather than a debit', () => {
    expect(formatSignedEuro(0)).toBe('+€0.00')
  })
})

describe('goal derivations', () => {
  it('derives the ring percentage from the sums', () => {
    expect(goalPercent(GOAL)).toBe(68)
  })

  it('rounds the months still needed up', () => {
    expect(monthsToGoal(GOAL)).toBe(4)
  })

  it('rolls the target month over into the next year', () => {
    expect(goalTargetLabel(GOAL)).toBe('January 2027')
  })

  it('keeps the target month inside the same year when it fits', () => {
    expect(goalTargetLabel({ ...GOAL, monthlyCents: 128_000 })).toBe('October 2026')
  })

  it('composes the monthly line from the same numbers', () => {
    expect(goalMonthlyLine(GOAL)).toBe('€320 a month · target January 2027')
  })
})
