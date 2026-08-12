import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { PRICING } from '../data'

describe('Pricing', () => {
  it('renders the three pricing cards with prices, features and Buy Now buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing' })).toBeInTheDocument()

    for (const plan of PRICING) {
      expect(screen.getByRole('heading', { level: 3, name: plan.plan })).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
    }
    /* The source demo repeats the same features and label in every card. */
    expect(screen.getAllByText('/year')).toHaveLength(PRICING.length)
    expect(screen.getAllByText(PRICING[0]!.features[0]!)).toHaveLength(PRICING.length)

    expect(screen.getAllByRole('link', { name: 'Buy Now' })).toHaveLength(3)
  })
})
