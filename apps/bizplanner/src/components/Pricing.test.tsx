import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section title', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Plans')).toBeDefined()
  })

  it('renders all three plan names', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeDefined()
    expect(screen.getByText('Advanced')).toBeDefined()
    expect(screen.getByText('Premium')).toBeDefined()
  })

  it('renders all three prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$9.99')).toBeDefined()
    expect(screen.getByText('$39.99')).toBeDefined()
    expect(screen.getByText('$59.99')).toBeDefined()
  })

  it('renders Buy It Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Buy It Now')
    expect(buttons).toHaveLength(3)
  })

  it('renders plan features', () => {
    render(<Pricing />)
    expect(screen.getByText('5 Pages')).toBeDefined()
    expect(screen.getByText('Unlimited Pages')).toBeDefined()
    expect(screen.getByText('API Access')).toBeDefined()
  })

  it('has the correct section id', () => {
    const { container } = render(<Pricing />)
    expect(container.querySelector('#pricing-section')).not.toBeNull()
  })

  it('renders taglines', () => {
    render(<Pricing />)
    expect(screen.getByText('For small projects')).toBeDefined()
    expect(screen.getByText('For growing businesses')).toBeDefined()
    expect(screen.getByText('For enterprise')).toBeDefined()
  })
})
