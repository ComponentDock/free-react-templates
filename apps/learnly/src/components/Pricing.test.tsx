import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { pricingPlans, sectionHeadings } from '../data'

describe('Pricing', () => {
  it('renders the Pricing & Packages heading block', () => {
    render(<Pricing />)

    expect(screen.getByText(sectionHeadings.pricingSub)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: sectionHeadings.pricingTitle }),
    ).toBeInTheDocument()
  })

  it('renders four plans with their teal prices and Get Started buttons', () => {
    render(<Pricing />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(pricingPlans.length)
    for (const plan of pricingPlans) {
      expect(screen.getByRole('heading', { level: 3, name: plan.name })).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Get Started/ })).toHaveLength(pricingPlans.length)
  })
})
