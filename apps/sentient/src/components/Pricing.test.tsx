import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, billing toggle and three monthly tiers', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Usage-based pricing that scales' }),
    ).toBeInTheDocument()

    const toggle = screen.getByRole('switch', { name: 'Annual billing' })
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('Save 20%')).toBeInTheDocument()

    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('Most Popular')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Start Free' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Pro Trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Sales' })).toBeInTheDocument()
  })

  it('switches the tiers to annual prices when the billing toggle is turned on', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const toggle = screen.getByRole('switch', { name: 'Annual billing' })
    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByText('$239')).toBeInTheDocument()
    expect(screen.getByText('billed annually ($468/year)')).toBeInTheDocument()
    expect(screen.getByText('billed annually ($0/year)')).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('$49')).toBeInTheDocument()
  })

  it('lists features for every tier', () => {
    render(<Pricing />)
    expect(screen.getByText(/1,000 API calls\/mo/i)).toBeInTheDocument()
    expect(screen.getByText(/unlimited projects/i)).toBeInTheDocument()
    expect(screen.getByText(/dedicated success manager/i)).toBeInTheDocument()
  })
})
