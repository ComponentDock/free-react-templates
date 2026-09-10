import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
  })

  it('renders 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
  })

  it('highlights Premium as popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$149')).toBeInTheDocument()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(3)
  })
})
