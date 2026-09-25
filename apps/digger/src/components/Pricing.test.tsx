import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders all pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
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
    const buttons = screen.getAllByText('Buy Now')
    expect(buttons).toHaveLength(3)
  })
})
