import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the three plans with prices', () => {
    render(<Pricing />)
    for (const name of ['Basic Plan', 'Standard Plan', 'Premium Plan']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('$29')).toHaveLength(3)
    expect(screen.getAllByText(/per month/)).toHaveLength(3)
  })

  it('renders the plan CTAs and the trial note', () => {
    render(<Pricing />)
    expect(screen.getAllByRole('link', { name: 'Get started' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Request a quote' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByText('Free 30 Day Trial')).toBeInTheDocument()
  })
})
