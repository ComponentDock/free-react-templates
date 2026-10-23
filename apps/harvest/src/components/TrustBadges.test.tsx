import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrustBadges } from './TrustBadges'

const badges = ['USDA Organic', 'Non-GMO', 'Fair Trade', 'Eco-Friendly', 'Quality Assured'] as const

describe('TrustBadges', () => {
  it('shows the heading and the five badges', () => {
    render(<TrustBadges />)

    expect(
      screen.getByRole('heading', { name: 'Our Certifications & Guarantees' }),
    ).toBeInTheDocument()
    for (const badge of badges) {
      expect(screen.getByRole('heading', { name: badge })).toBeInTheDocument()
    }
  })

  it('renders a card for every badge', () => {
    render(<TrustBadges />)

    expect(screen.getAllByRole('article')).toHaveLength(5)
  })
})
