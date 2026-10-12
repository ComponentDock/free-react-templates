import { toId } from './ids'

describe('toId', () => {
  it('lowercases a label and squashes anything that is not alphanumeric', () => {
    expect(toId('More')).toBe('more')
    expect(toId('Plan compare')).toBe('plan-compare')
    expect(toId('FAQ & Pricing')).toBe('faq-pricing')
  })
})
