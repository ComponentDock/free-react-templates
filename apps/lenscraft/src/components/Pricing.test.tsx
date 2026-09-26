import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Choose Your Package')).toBeInTheDocument()
    expect(screen.getByText('Pricing Plan')).toBeInTheDocument()
  })

  it('renders all 3 pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Wedding')).toBeInTheDocument()
    expect(screen.getByText('Studio')).toBeInTheDocument()
    expect(screen.getByText('Fashion')).toBeInTheDocument()
  })

  it('displays correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$46.00')).toBeInTheDocument()
    expect(screen.getByText('$76.00')).toBeInTheDocument()
    expect(screen.getByText('$96.00')).toBeInTheDocument()
  })

  it('renders Book Now buttons', () => {
    render(<Pricing />)
    const bookButtons = screen.getAllByText('Book Now')
    expect(bookButtons.length).toBe(3)
  })

  it('shows feature lists for each plan', () => {
    render(<Pricing />)
    const features = screen.getAllByText('Unlimited Entrance')
    expect(features.length).toBe(15)
  })
})
