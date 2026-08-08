import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and all three tiers', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Choose Your Plan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Basic' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pro' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Elite' })).toBeInTheDocument()
  })

  it('shows the monthly price and billing note by default', () => {
    render(<Pricing />)

    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getAllByText('Billed monthly').length).toBe(3)
  })

  it('marks the Pro plan as most popular', () => {
    render(<Pricing />)

    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Start Free Trial' })).toHaveLength(3)
  })

  it('switches to yearly billing with the toggle', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const toggle = screen.getByRole('switch', { name: 'Toggle annual billing' })
    expect(toggle).toHaveAttribute('aria-checked', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('Billed annually ($276/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($564/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($948/year)')).toBeInTheDocument()
    expect(screen.getByText('Save 20%')).toBeInTheDocument()
  })
})
