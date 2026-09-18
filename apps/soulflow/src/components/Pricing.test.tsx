import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing section', () => {
    render(<Pricing />)
    expect(screen.getByText('Yoga Pricing')).toBeInTheDocument()
  })

  it('renders all 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('has Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText('2 Classes per week')).toBeInTheDocument()
    expect(screen.getAllByText('Unlimited classes').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Personal trainer')).toBeInTheDocument()
  })
})
