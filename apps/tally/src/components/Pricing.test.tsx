import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/pricing plans/i)
  })

  it('renders four pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Personal')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Ultimate')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('displays correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$109')).toBeInTheDocument()
    expect(screen.getByText('$149')).toBeInTheDocument()
  })

  it('renders CTA buttons for each tier', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: /get started/i })
    expect(buttons.length).toBe(4)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText(/basic accounting/i)).toBeInTheDocument()
    expect(screen.getByText(/tax filing/i)).toBeInTheDocument()
  })
})
