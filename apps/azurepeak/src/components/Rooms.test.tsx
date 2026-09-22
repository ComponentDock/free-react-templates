import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the section heading', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { name: /Rooms & Suites/i })).toBeInTheDocument()
  })

  it('renders three room cards with titles, prices, and descriptions', () => {
    render(<Rooms />)
    for (const room of [
      { title: 'Deluxe Ocean Room', price: '$299' },
      { title: 'Premium Suite', price: '$499' },
      { title: 'Presidential Villa', price: '$899' },
    ]) {
      expect(screen.getByRole('heading', { name: room.title })).toBeInTheDocument()
      expect(screen.getByText(room.price)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: room.title })).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos'),
      )
    }
  })

  it('renders amenity icons for each room', () => {
    render(<Rooms />)
    // 3 rooms × 3 amenity indicators = 9 text items with guests/beds/size info
    expect(screen.getAllByText(/Guests/)).toHaveLength(3)
    expect(screen.getAllByText(/Bed/)).toHaveLength(3)
    expect(screen.getAllByText(/m²/)).toHaveLength(3)
  })

  it('renders View Details buttons', () => {
    render(<Rooms />)
    const buttons = screen.getAllByRole('button', { name: 'View Details' })
    expect(buttons).toHaveLength(3)
  })

  it('renders the subsection label', () => {
    render(<Rooms />)
    expect(screen.getByText('Our Accommodations')).toBeInTheDocument()
  })
})
