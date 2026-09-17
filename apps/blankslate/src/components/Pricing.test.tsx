import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Our Best Pricing/i })).toBeInTheDocument()
  })

  it('displays all four pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('Startup')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
  })

  it('displays pricing amounts', () => {
    render(<Pricing />)
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$149')).toBeInTheDocument()
  })

  it('has Get Started buttons for each tier', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(4)
  })
})
