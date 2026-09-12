import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading and plan names', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Pricing/i })).toBeInTheDocument()
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
  })

  it('displays pricing amounts', () => {
    render(<Pricing />)
    expect(screen.getByText('$47')).toBeInTheDocument()
    expect(screen.getByText('$200')).toBeInTheDocument()
    expect(screen.getByText('$750')).toBeInTheDocument()
  })

  it('has Buy Now buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /Buy Now/i })
    expect(buttons).toHaveLength(3)
  })
})
