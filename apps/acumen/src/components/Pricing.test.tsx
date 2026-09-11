import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
  })

  it('shows Monthly/Yearly toggle', () => {
    render(<Pricing />)
    expect(screen.getByRole('tab', { name: 'Monthly' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Yearly' })).toBeInTheDocument()
  })

  it('defaults to Monthly', () => {
    render(<Pricing />)
    expect(screen.getByRole('tab', { name: 'Monthly' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByText('/ Month').length).toBeGreaterThanOrEqual(1)
  })

  it('switches to Yearly and back to Monthly', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    await user.click(screen.getByRole('tab', { name: 'Yearly' }))
    expect(screen.getByRole('tab', { name: 'Yearly' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByText('/ Year').length).toBeGreaterThanOrEqual(1)
    // Switch back to Monthly
    await user.click(screen.getByRole('tab', { name: 'Monthly' }))
    expect(screen.getByRole('tab', { name: 'Monthly' })).toHaveAttribute('aria-selected', 'true')
  })

  it('shows 4 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Ultimate')).toBeInTheDocument()
  })

  it('shows correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$10')).toBeInTheDocument()
    expect(screen.getByText('$50')).toBeInTheDocument()
    expect(screen.getByText('$80')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
  })

  it('has Purchase Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Purchase Now')
    expect(buttons.length).toBe(4)
  })

  it('Premium tier is highlighted', () => {
    render(<Pricing />)
    const premiumCard = screen.getByText('Premium').closest('div')
    expect(premiumCard).toHaveClass('ring-2')
  })
})
