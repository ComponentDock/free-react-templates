import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { pricingTiers } from '../data'

describe('Pricing', () => {
  it('renders the PRICING eyebrow and Upgrade to Pro heading', () => {
    render(<Pricing />)

    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Upgrade to Pro')
  })

  it('renders the three tier cards with prices, features and buttons', () => {
    render(<Pricing />)

    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByRole('heading', { level: 3, name: 'PERSONAL' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'FOR TEAMS' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'ENTERPRISE' })).toBeInTheDocument()

    expect(screen.getByText('$14')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$249')).toBeInTheDocument()

    for (const feature of pricingTiers[0]!.unavailable ?? []) {
      // Scoped to the PERSONAL card — the same words exist as available
      // features in the FOR TEAMS card.
      const personalCard = screen.getByRole('article', { name: /PERSONAL/ })
      expect(within(personalCard).getByText(feature)).toHaveClass('line-through')
    }

    expect(screen.getAllByRole('link', { name: 'Choose this Plan' })).toHaveLength(3)
  })
})
