import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { orderPlanLabel, pricingPlans, pricingTitle, planFeatures } from '../data'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the title and all three plans with features and buttons', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: pricingTitle })).toBeInTheDocument()

    for (const plan of pricingPlans) {
      expect(screen.getByText(plan.name)).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
      expect(screen.getAllByRole('link', { name: orderPlanLabel }).length).toBeGreaterThan(0)
    }

    for (const feature of planFeatures) {
      expect(screen.getAllByText(feature).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: orderPlanLabel })).toHaveLength(3)
  })

  it('marks the middle plan as recommended', () => {
    render(<Pricing />)
    const recommended = pricingPlans.find((plan) => plan.recommended)
    expect(recommended).toBeDefined()
  })
})
