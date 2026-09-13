import { render, screen } from '@testing-library/react'
import { BestSellers } from './BestSellers'

describe('BestSellers', () => {
  it('renders the section title', () => {
    render(<BestSellers />)
    expect(screen.getByText('Best Sellers')).toBeInTheDocument()
  })

  it('renders all product names', () => {
    render(<BestSellers />)
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument()
    expect(screen.getByText('USB-C Hub')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument()
  })

  it('renders product prices', () => {
    render(<BestSellers />)
    expect(screen.getByText('$89')).toBeInTheDocument()
    expect(screen.getByText('$45')).toBeInTheDocument()
  })
})
