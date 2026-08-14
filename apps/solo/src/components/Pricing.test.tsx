import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { pricingIntro, pricingPlans } from '../data'

describe('Pricing', () => {
  it('renders the title and the three plans with features, price and CTA', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Choose Your Plan/ })).toBeInTheDocument()
    for (const plan of pricingPlans) {
      expect(screen.getByRole('heading', { name: plan.name })).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
      for (const feature of plan.features) {
        expect(screen.getAllByText(feature).length).toBeGreaterThan(0)
      }
    }
    expect(screen.getAllByRole('link', { name: pricingIntro.cta }).length).toBe(pricingPlans.length)
  })
})
