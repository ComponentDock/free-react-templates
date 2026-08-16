import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { pricing } from '../data'

describe('Pricing', () => {
  it('renders the kicker and heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Our Pricing')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Pricing & Packages' }),
    ).toBeInTheDocument()
  })

  it('renders the four tiers with price, tagline, and CTA button', () => {
    render(<Pricing />)
    for (const tier of pricing) {
      const card = screen.getByRole('heading', { level: 3, name: tier.name }).closest('article')!
      expect(within(card).getByText(tier.price)).toBeInTheDocument()
      expect(within(card).getByText(tier.tagline)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: tier.ctaLabel })).toBeInTheDocument()
    }
    expect(screen.getAllByText('$')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Get Quote' })).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('flags the featured Premium tier with the Most Popular badge', () => {
    render(<Pricing />)
    const featured = pricing.find((tier) => tier.featured)
    expect(featured?.name).toBe('Premium')
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('lists six features per tier', () => {
    render(<Pricing />)
    for (const tier of pricing) {
      const card = screen.getByRole('heading', { level: 3, name: tier.name }).closest('article')!
      for (const feature of tier.features) {
        expect(within(card).getByText(feature.label)).toBeInTheDocument()
      }
    }
  })
})
