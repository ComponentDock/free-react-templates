import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and billing toggle', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { level: 2, name: /simple, transparent pricing/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('switch', { name: 'Annual billing' })).toBeInTheDocument()
    expect(screen.getByText('Save 20%')).toBeInTheDocument()
  })

  it('renders three tiers with monthly prices and CTAs', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 3, name: 'Starter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Pro' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Enterprise' })).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get started' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Contact sales' })).toBeInTheDocument()
  })

  it('marks Pro as the most popular tier', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('switches prices to annual amounts when the toggle is flipped', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    expect(screen.getAllByText('Billed monthly')).toHaveLength(3)

    await user.click(screen.getByRole('switch', { name: 'Annual billing' }))

    expect(screen.getByText('$23')).toBeInTheDocument()
    expect(screen.getByText('$63')).toBeInTheDocument()
    expect(screen.getByText('$159')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($276/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($756/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($1908/year)')).toBeInTheDocument()
    expect(screen.queryByText('Billed monthly')).not.toBeInTheDocument()

    await user.click(screen.getByRole('switch', { name: 'Annual billing' }))
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getAllByText('Billed monthly')).toHaveLength(3)
  })

  it('lists tier features', () => {
    render(<Pricing />)
    expect(screen.getByText('Up to 5 team members')).toBeInTheDocument()
    expect(screen.getByText('Up to 20 team members')).toBeInTheDocument()
    expect(screen.getByText('Unlimited team members')).toBeInTheDocument()
    expect(screen.getByText('Priority support')).toBeInTheDocument()
  })
})
