import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CarListings } from './CarListings'

describe('CarListings', () => {
  it('renders the heading and six car cards', () => {
    render(<CarListings />)
    expect(screen.getByRole('heading', { name: /Car Listings/i })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
  })

  it('displays all car names', () => {
    render(<CarListings />)
    expect(screen.getByRole('heading', { name: 'Mitsubishi Pajero' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nissan Moco' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Honda Fitta' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skoda Laura' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mazda LaPuta' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Buick LaCrosse' })).toBeInTheDocument()
  })

  it('displays the price and specs for each car', () => {
    render(<CarListings />)
    const prices = screen.getAllByText('$389')
    expect(prices).toHaveLength(6)

    const luggage = screen.getAllByText('Luggage:')
    expect(luggage).toHaveLength(6)

    const doors = screen.getAllByText('Doors:')
    expect(doors).toHaveLength(6)

    const passenger = screen.getAllByText('Passenger:')
    expect(passenger).toHaveLength(6)
  })

  it('has Rent Now links on each card', () => {
    render(<CarListings />)
    const rentLinks = screen.getAllByRole('link', { name: 'Rent Now' })
    expect(rentLinks).toHaveLength(6)
    for (const link of rentLinks) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
