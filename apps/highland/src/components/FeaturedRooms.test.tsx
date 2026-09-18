import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedRooms } from './FeaturedRooms'

describe('FeaturedRooms', () => {
  it('renders the rooms section heading', () => {
    render(<FeaturedRooms />)
    expect(screen.getByTestId('featured-rooms')).toBeInTheDocument()
    expect(screen.getByText('Featured Rooms')).toBeInTheDocument()
    expect(screen.getByText('Choose a Better Room')).toBeInTheDocument()
  })

  it('renders 4 room cards', () => {
    render(<FeaturedRooms />)
    expect(screen.getByText('Superior Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument()
    expect(screen.getByText('Signature Room')).toBeInTheDocument()
    expect(screen.getByText('Couple Room')).toBeInTheDocument()
  })

  it('shows price for each room', () => {
    render(<FeaturedRooms />)
    const prices = screen.getAllByText('From $250/night')
    expect(prices).toHaveLength(4)
  })

  it('renders book now links', () => {
    render(<FeaturedRooms />)
    const bookLinks = screen.getAllByText('Book Now')
    expect(bookLinks).toHaveLength(4)
  })
})
