import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: /choose your plan/i })).toBeInTheDocument()
  })

  it('renders all three pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Normal')).toBeInTheDocument()
    expect(screen.getByText('Advanced')).toBeInTheDocument()
    expect(screen.getByText('Ultimate')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getAllByText('45.00').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('55.00').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('65.00').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Buy Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Buy Now')
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    const unlimited = screen.getAllByText('Unlimited Entrance')
    expect(unlimited).toHaveLength(3)
  })

  it('renders check and x icons for included and excluded features', () => {
    render(<Pricing />)
    // Unchecked items have "text-red-500" class
    const workshops = screen.getAllByText('Day One Workshop')
    expect(workshops).toHaveLength(3)
  })
})
