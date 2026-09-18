import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Membership Plans')).toBeDefined()
  })

  it('renders all 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('One Day Training')).toBeDefined()
    expect(screen.getByText('Pay Every Month')).toBeDefined()
    expect(screen.getByText('1 Year Membership')).toBeDefined()
  })

  it('renders pricing subheading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Tables')).toBeDefined()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons.length).toBe(3)
  })

  it('has pricing section id', () => {
    const { container } = render(<Pricing />)
    expect(container.querySelector('#pricing')).toBeDefined()
  })
})
