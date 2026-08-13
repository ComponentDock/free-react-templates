import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { planFeatures, plans, plansSection } from '../data'

describe('Pricing', () => {
  it('shows the heading and three plan cards with prices and Save tags', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /Choose Your Web Hosting Plan/,
    )
    expect(screen.getByText(plansSection.text)).toBeInTheDocument()
    for (const plan of plans) {
      expect(screen.getByRole('heading', { level: 3, name: plan.name })).toBeInTheDocument()
      expect(screen.getByText(plan.sale)).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
    }
  })

  it('marks the middle card as the Best Plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Best Plan')).toBeInTheDocument()
  })

  it('lists the four shared features with check icons and CTAs on every card', () => {
    const { container } = render(<Pricing />)
    expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(12)
    for (const feature of planFeatures) {
      expect(screen.getAllByText(feature).length).toBe(3)
    }
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Click here to see all features' })).toHaveLength(3)
  })
})
