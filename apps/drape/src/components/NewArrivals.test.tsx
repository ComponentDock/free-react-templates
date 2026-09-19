import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section heading', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { name: 'New arrivals' })).toBeInTheDocument()
  })

  it('renders the eyebrow text', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Just landed')).toBeInTheDocument()
  })

  it('renders all 8 product titles', () => {
    render(<NewArrivals />)
    const titles = [
      'Cotton Knit Poncho',
      'Leather Biker Jacket',
      'Suede Bomber Jacket',
      'Graphic Cotton Tee',
      'Tailored Three-Piece Suit',
      'Canvas Tote Bag',
      'Everyday Backpack',
      'Bifold Leather Wallet',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders the sale badge for the suede bomber jacket', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('shows compare price for sale items', () => {
    render(<NewArrivals />)
    expect(screen.getByText('$220.00')).toBeInTheDocument()
  })

  it('has a View all link', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('link', { name: 'View all' })).toHaveAttribute('href', '#shop')
  })
})
