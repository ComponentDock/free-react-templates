import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { pricing } from '../data'

describe('Pricing', () => {
  it('renders the heading and four ticket tiers with prices and features', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: pricing.heading })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    pricing.tiers.forEach((tier, index) => {
      const card = cards[index]!
      expect(within(card).getByRole('heading', { level: 3, name: tier.name })).toBeInTheDocument()
      expect(within(card).getByText(tier.price)).toBeInTheDocument()
      for (const feature of tier.features) {
        expect(within(card).getByText(feature)).toBeInTheDocument()
      }
      expect(within(card).getByRole('link', { name: pricing.buyLabel })).toBeInTheDocument()
    })
  })

  it('styles the price brand-blue with a yellow hover treatment', () => {
    render(<Pricing />)
    const gold = pricing.tiers[3]!
    const price = screen.getByText(gold.price)
    expect(price.className).toContain('text-brand')
    expect(price.className).toContain('group-hover:text-accent')
    // Cards carry the 2px brand border (source .pricing-entry).
    expect(screen.getAllByRole('article')[0]!.className).toContain('border-2')
    expect(screen.getAllByRole('article')[0]!.className).toContain('border-brand')
  })
})
