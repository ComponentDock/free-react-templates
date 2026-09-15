import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders all 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$47')).toBeInTheDocument()
    expect(screen.getByText('$200')).toBeInTheDocument()
    expect(screen.getByText('$750')).toBeInTheDocument()
  })

  it('renders Buy Now buttons', () => {
    render(<Pricing />)
    const buyButtons = screen.getAllByText('Buy Now')
    expect(buyButtons).toHaveLength(3)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Officia quaerat eaque neque').length).toBe(3)
    expect(screen.getAllByText('Possimus aut consequuntur incidunt').length).toBe(3)
  })
})
