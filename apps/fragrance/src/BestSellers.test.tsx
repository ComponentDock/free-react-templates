import { render, screen } from '@testing-library/react'
import { BestSellers } from './components/BestSellers'

describe('BestSellers', () => {
  it('renders heading "Best Sellers"', () => {
    render(<BestSellers />)
    expect(screen.getByRole('heading', { name: /best sellers/i })).toBeInTheDocument()
  })

  it('renders 8 product cards', () => {
    render(<BestSellers />)
    const prices = screen.getAllByText('$150.00')
    expect(prices).toHaveLength(8)
  })

  it('shows product names', () => {
    render(<BestSellers />)
    expect(screen.getByText('Wool Overcoat')).toBeInTheDocument()
    expect(screen.getByText('Velvet Blazer')).toBeInTheDocument()
  })
})
