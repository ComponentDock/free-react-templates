import { render, screen } from '@testing-library/react'
import { ProductGrid } from './ProductGrid'

describe('ProductGrid', () => {
  it('renders section heading', () => {
    render(<ProductGrid />)
    expect(screen.getByText('Our Delightful Offerings')).toBeInTheDocument()
    expect(screen.getByText('Tastefully Yours')).toBeInTheDocument()
  })

  it('renders all eight products', () => {
    render(<ProductGrid />)
    expect(screen.getByText('Bacardi 151')).toBeInTheDocument()
    expect(screen.getByText('Jim Beam Kentucky')).toBeInTheDocument()
    expect(screen.getByText('Citadelle')).toBeInTheDocument()
    expect(screen.getByText('The Glenlivet')).toBeInTheDocument()
    expect(screen.getByText('Black Label')).toBeInTheDocument()
    expect(screen.getByText('Macallan')).toBeInTheDocument()
    expect(screen.getByText('Old Monk')).toBeInTheDocument()
    expect(screen.getByText('Jameson Irish')).toBeInTheDocument()
  })

  it('renders product badges', () => {
    render(<ProductGrid />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('Best Seller')).toBeInTheDocument()
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
  })

  it('renders product prices', () => {
    render(<ProductGrid />)
    expect(screen.getByText('$49.00')).toBeInTheDocument()
    expect(screen.getAllByText('$69.00').length).toBeGreaterThan(0)
  })

  it('renders strikethrough original price for Sale item', () => {
    render(<ProductGrid />)
    const strikethrough = document.querySelector('.line-through')
    expect(strikethrough).toBeInTheDocument()
    expect(strikethrough).toHaveTextContent('$69.00')
  })

  it('renders product images', () => {
    render(<ProductGrid />)
    expect(screen.getByAltText('Bacardi 151')).toBeInTheDocument()
    expect(screen.getByAltText('Jim Beam Kentucky')).toBeInTheDocument()
  })
})
