import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section title', () => {
    render(<NewArrivals />)
    expect(screen.getByText('new arrivals')).toBeInTheDocument()
  })

  it('renders 6 product cards', () => {
    render(<NewArrivals />)
    expect(screen.getByText("Woman's Long Dress")).toBeInTheDocument()
    expect(screen.getByText('2 Piece Swimsuit')).toBeInTheDocument()
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Floral Blouse')).toBeInTheDocument()
    expect(screen.getByText('Linen Pants')).toBeInTheDocument()
    expect(screen.getByText('Knit Cardigan')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<NewArrivals />)
    expect(screen.getByText('$45.00')).toBeInTheDocument()
    expect(screen.getByText('$35.00')).toBeInTheDocument()
  })

  it('has add-to-cart and wishlist buttons', () => {
    render(<NewArrivals />)
    expect(screen.getAllByLabelText(/Add .* to cart/)).toHaveLength(6)
    expect(screen.getAllByLabelText(/Add .* to wishlist/)).toHaveLength(6)
  })
})
