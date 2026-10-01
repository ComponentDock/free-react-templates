import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section title', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { level: 2, name: /only quality for clients/i }),
    ).toBeInTheDocument()
  })

  it('renders the three plans with prices and features', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Business' })).toBeInTheDocument()
    expect(screen.getByText('$ 55.99')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Trial' })).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Standard' })).toBeInTheDocument()
    expect(screen.getByText('$ 35.99')).toBeInTheDocument()
    expect(screen.getAllByText('Per month')).toHaveLength(3)
    expect(screen.getByText('Chauffer included in price')).toBeInTheDocument()
    expect(screen.getByText('Delivery at airport')).toBeInTheDocument()
  })
})
