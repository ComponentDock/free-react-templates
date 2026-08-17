import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { pricingPlans, pricingTitle } from '../data'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders four pricing cards with green prices and included/excluded feature lists', () => {
    const { container } = render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: pricingTitle })).toBeInTheDocument()
    expect(container.querySelector('div.mx-auto.bg-brand')).toBeInTheDocument()

    for (const plan of pricingPlans) {
      const card = screen.getByRole('group', { name: `${plan.name} plan` })
      expect(within(card).getByRole('heading', { level: 3, name: plan.name })).toBeInTheDocument()
      expect(within(card).getByText(plan.price)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: 'Get started' })).toHaveAttribute(
        'href',
        '#contact',
      )

      const included = plan.features.filter((feature) => feature.included).length
      const excluded = plan.features.filter((feature) => !feature.included).length
      expect(within(card).getAllByRole('listitem')).toHaveLength(plan.features.length)
      expect(card.querySelectorAll('li svg.text-brand')).toHaveLength(included)
      expect(card.querySelectorAll('li svg.text-neutral-300')).toHaveLength(excluded)
    }

    // Spec: Basic 2 enabled / Standard 3 / Premium 4 / Advanced 5.
    expect(pricingPlans.map((plan) => plan.features.filter((f) => f.included).length)).toEqual([
      2, 3, 4, 5,
    ])
  })
})
