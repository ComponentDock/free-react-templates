import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LastMinuteOffers } from './LastMinuteOffers'

describe('LastMinuteOffers', () => {
  it('renders two translucent offer cards with giant discounts', () => {
    render(<LastMinuteOffers />)
    expect(screen.getByText('maldive')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
    expect(screen.getByText('bali')).toBeInTheDocument()
    expect(screen.getByText('38%')).toBeInTheDocument()
    expect(screen.getAllByText('Last Minute Offer')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'See Offer' })).toHaveLength(2)
  })
})
