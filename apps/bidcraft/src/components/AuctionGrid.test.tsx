import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AuctionGrid } from './AuctionGrid'

describe('AuctionGrid', () => {
  it('renders the section heading', () => {
    render(<AuctionGrid />)
    expect(screen.getByRole('heading', { name: /Current.*Auctions/ })).toBeInTheDocument()
  })

  it('renders 8 product cards', () => {
    render(<AuctionGrid />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(8)
  })

  it('displays prices for each item', () => {
    render(<AuctionGrid />)
    expect(screen.getByText('$95')).toBeInTheDocument()
    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getAllByText('$1,999').length).toBe(2)
    expect(screen.getByText('$777')).toBeInTheDocument()
    expect(screen.getByText('$78')).toBeInTheDocument()
    expect(screen.getByText('$450')).toBeInTheDocument()
  })

  it('displays product names', () => {
    render(<AuctionGrid />)
    expect(screen.getByText('Pinky Shoes')).toBeInTheDocument()
    expect(screen.getByText('MacBook 15-Inch')).toBeInTheDocument()
    expect(screen.getByText('iMac')).toBeInTheDocument()
  })

  it('displays bid counts', () => {
    render(<AuctionGrid />)
    expect(screen.getAllByText('4 bids').length).toBe(2)
    expect(screen.getByText('224 bids')).toBeInTheDocument()
  })

  it('displays Submit a Bid buttons', () => {
    render(<AuctionGrid />)
    const bidButtons = screen.getAllByText('Submit a Bid')
    expect(bidButtons).toHaveLength(8)
  })

  it('has the auctions landmark', () => {
    render(<AuctionGrid />)
    expect(screen.getByLabelText('Current Auctions')).toBeInTheDocument()
  })
})
