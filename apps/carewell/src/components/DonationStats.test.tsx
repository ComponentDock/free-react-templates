import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DonationStats } from './DonationStats'

describe('DonationStats', () => {
  it('renders four stat boxes', () => {
    render(<DonationStats />)
    const stats = ['Total Donation', 'Fund Raised', 'Highest Donation', 'Total Donors']
    for (const stat of stats) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
  })

  it('displays stat values', () => {
    render(<DonationStats />)
    expect(screen.getByText('$12,426')).toBeInTheDocument()
    expect(screen.getByText('$8,750')).toBeInTheDocument()
    expect(screen.getByText('$3,200')).toBeInTheDocument()
    expect(screen.getByText('1,847')).toBeInTheDocument()
  })

  it('has four icon elements', () => {
    const { container } = render(<DonationStats />)
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(4)
  })
})
