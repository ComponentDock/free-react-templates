import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK_URL, NOTICES, PANEL, SEVERITY_TOKENS } from './alerts'

describe('alerts data — the severity ladder is the product', () => {
  it('prints the four notices in severity order, info first and danger last', () => {
    expect(NOTICES.map((notice) => notice.severity)).toEqual([
      'info',
      'success',
      'warning',
      'danger',
    ])
  })

  it('announces the first three as status and only the danger one as an alert', () => {
    expect(NOTICES.map((notice) => notice.role)).toEqual(['status', 'status', 'status', 'alert'])
  })

  it('keeps the reference copy verbatim, one sentence per body', () => {
    expect(NOTICES.map((notice) => notice.title)).toEqual([
      'New tax rates from 1 October',
      'Payment received',
      'Card expires next month',
      'Bank sync failed',
    ])
    expect(NOTICES[0].text).toBe(
      'VAT for digital services in Portugal changes to 23%. Draft invoices dated after 30 September will be updated automatically.',
    )
    expect(NOTICES[1].text).toBe(
      'Harbor & Pine Studio paid invoice INV-2048 for €3,450.00. The funds will reach your account on 27 September.',
    )
    expect(NOTICES[2].text).toBe(
      'The Visa ending 4417 on your subscription expires on 31 October. Add a new card to avoid a failed renewal.',
    )
    expect(NOTICES[3].text).toBe(
      'We could not import transactions from your business account since 22 September. Reconnect the bank feed to keep reconciliation up to date.',
    )
  })

  it('gives every notice a distinct title and non-empty body', () => {
    const titles = new Set(NOTICES.map((notice) => notice.title))

    expect(titles.size).toBe(4)
    for (const notice of NOTICES) {
      expect(notice.text.length).toBeGreaterThan(60)
    }
  })

  it('declares the four token quads exactly as measured', () => {
    expect(SEVERITY_TOKENS).toEqual({
      info: { bg: '#eff5ff', line: '#c7dbfe', title: '#1e3a8a', accent: '#2563eb' },
      success: { bg: '#ecfdf5', line: '#b7ecd4', title: '#064e3b', accent: '#059669' },
      warning: { bg: '#fff8eb', line: '#fbdba7', title: '#7c2d12', accent: '#c2410c' },
      danger: { bg: '#fef2f2', line: '#fbcaca', title: '#7f1d1d', accent: '#dc2626' },
    })
  })

  it('keys a quad for every severity in the ladder', () => {
    for (const notice of NOTICES) {
      expect(SEVERITY_TOKENS[notice.severity]).toBeDefined()
    }
  })

  it('keeps the head copy and the attribution target', () => {
    expect(PANEL).toEqual({
      eyebrow: 'Ledgerly · Billing',
      title: 'Invoices and payments',
      intro:
        'Account notices for September. Messages that need action stay here until they are resolved.',
    })
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })
})
