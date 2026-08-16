import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'
import { pricingPlans } from '../data'

describe('Pricing', () => {
  it('renders the heading and three purple pricing cards with Buy buttons', () => {
    render(<Pricing />)

    expect(screen.getByText('Prices for everyone')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument()

    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(pricingPlans.length)

    for (const plan of pricingPlans) {
      const card = screen.getByRole('heading', { name: plan.name }).closest('div')!
      expect(within(card).getByText(plan.price)).toBeInTheDocument()
      expect(within(card).getByText(plan.cents)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: 'Buy' })).toBeInTheDocument()
    }
  })
})
