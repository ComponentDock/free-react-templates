import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the new arrivals section', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('region', { name: /new arrivals/i })).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<NewArrivals />)
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
  })

  it('renders 8 product cards', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Casual Jacket')).toBeInTheDocument()
    expect(screen.getByText('Denim Jeans')).toBeInTheDocument()
    expect(screen.getByText('Silk Blouse')).toBeInTheDocument()
    expect(screen.getByText('Leather Boots')).toBeInTheDocument()
    expect(screen.getByText('Wool Sweater')).toBeInTheDocument()
    expect(screen.getByText('Cotton T-Shirt')).toBeInTheDocument()
    expect(screen.getByText('Linen Pants')).toBeInTheDocument()
  })

  it('displays prices for products', () => {
    render(<NewArrivals />)
    expect(screen.getByText('$30.00')).toBeInTheDocument()
    expect(screen.getByText('$45.00')).toBeInTheDocument()
  })

  it('displays star ratings', () => {
    render(<NewArrivals />)
    expect(screen.getAllByLabelText(/out of 5 stars/)).toHaveLength(8)
  })
})
