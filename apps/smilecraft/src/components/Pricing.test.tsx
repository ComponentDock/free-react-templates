import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders four pricing cards with names, prices, and features', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Affordable Pricing Plans' }),
    ).toBeInTheDocument()

    const plans = [
      { name: 'Basic', price: '$49' },
      { name: 'Standard', price: '$99' },
      { name: 'Premium', price: '$199' },
      { name: 'Platinum', price: '$299' },
    ]
    for (const plan of plans) {
      expect(screen.getByRole('heading', { level: 3, name: plan.name })).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
    }

    expect(screen.getByText('1 Cleaning')).toBeInTheDocument()
    expect(screen.getByText('Whitening Kit')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Cleanings')).toBeInTheDocument()
  })

  it('has Get Started buttons for each plan', () => {
    render(<Pricing />)

    const buttons = screen.getAllByRole('button', { name: 'Get Started' })
    expect(buttons).toHaveLength(4)
  })

  it('marks Premium as featured with Popular badge', () => {
    render(<Pricing />)

    expect(screen.getByText('Popular')).toBeInTheDocument()
  })
})
