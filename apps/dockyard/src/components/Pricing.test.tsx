import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { pricing } from '../data'

function cardFor(name: string): HTMLElement {
  return screen.getByRole('heading', { level: 3, name }).closest('li') as HTMLElement
}

describe('Pricing', () => {
  it('renders three tiers with the blue middle call to action', () => {
    render(<Pricing />)

    for (const tier of pricing) {
      const card = cardFor(tier.name)

      expect(within(card).getByRole('heading', { level: 3, name: tier.name })).toHaveClass(
        'text-[28px]',
        'uppercase',
      )
      expect(card).toHaveTextContent(`$${tier.price}`)

      const cta = within(card).getByRole('link', { name: 'Buy Now' })
      expect(cta).toHaveClass(tier.featured ? 'bg-brand' : 'bg-secondary')
    }
  })

  it('ticks the included features green and strikes the excluded ones', () => {
    render(<Pricing />)

    const card = cardFor('Basic')
    for (const feature of pricing[0]!.features) {
      const row = within(card).getByText(feature.label)
      expect(row).toHaveClass(feature.included ? 'text-body' : 'line-through')
      expect(row.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
      expect(row.querySelector('svg')).toHaveClass(feature.included ? 'text-success' : 'text-muted')
    }
  })

  it('shows the price in 48px brand blue with a grey suffix', () => {
    render(<Pricing />)
    const card = cardFor('Basic')

    expect(within(card).getByText('$47')).toHaveClass('text-[48px]', 'text-brand')
    expect(within(card).getByText('/ year')).toHaveClass('text-price-suffix')
  })

  it('lists five features per tier and highlights exactly one', () => {
    render(<Pricing />)

    for (const tier of pricing) {
      expect(tier.features).toHaveLength(5)
      expect(within(cardFor(tier.name)).getAllByRole('listitem')).toHaveLength(5)
    }
    expect(pricing.filter((tier) => tier.featured)).toHaveLength(1)
  })
})
