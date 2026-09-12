import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from '../components/Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByText(/no hidden charges/i)).toBeInTheDocument()
  })

  it('renders all 3 pricing cards with correct names', () => {
    render(<Pricing />)
    expect(screen.getByText('Single Package')).toBeInTheDocument()
    expect(screen.getByText('Half Package')).toBeInTheDocument()
    expect(screen.getByText('Full Package')).toBeInTheDocument()
  })

  it('displays the correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$20.00')).toBeInTheDocument()
    expect(screen.getByText('$25.00')).toBeInTheDocument()
    expect(screen.getByText('$29.00')).toBeInTheDocument()
  })

  it('renders View Packages buttons for each card', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('View Packages')
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Line Rental Included')).toHaveLength(3)
    expect(screen.getAllByText('12 Month Contract')).toHaveLength(3)
    expect(screen.getAllByText('No Activation Charges')).toHaveLength(3)
  })
})
