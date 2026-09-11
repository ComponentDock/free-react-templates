import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TokenDistribution } from './TokenDistribution'

describe('TokenDistribution', () => {
  it('shows distribution heading and allocation percentages', () => {
    render(<TokenDistribution />)
    expect(screen.getByRole('heading', { name: 'Initial Distribution' })).toBeInTheDocument()
    expect(screen.getByText('15%')).toBeInTheDocument()
    expect(screen.getByText('Build Up Team')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
    expect(screen.getByText('ICO Investors')).toBeInTheDocument()
    // "25%", "Branding & Marketing", "10%" appear in both allocations and sales breakdown
    expect(screen.getAllByText('25%').length).toBe(1)
    expect(screen.getAllByText('Branding & Marketing').length).toBe(2)
    expect(screen.getAllByText('10%').length).toBe(2)
    expect(screen.getByText('Bounty')).toBeInTheDocument()
  })

  it('shows sales contribution breakdown', () => {
    render(<TokenDistribution />)
    expect(screen.getByRole('heading', { name: 'Token Sales Contribution' })).toBeInTheDocument()
    expect(screen.getByText('HR & Development')).toBeInTheDocument()
    expect(screen.getByText('Possible Buyout')).toBeInTheDocument()
    expect(screen.getByText('Legal Advisory')).toBeInTheDocument()
  })
})
