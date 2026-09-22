import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the rooms section heading', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { name: /Choose Your Room/i })).toBeInTheDocument()
  })

  it('renders 6 room cards with names and prices', () => {
    render(<Rooms />)
    const roomNames = [
      'Standard Room',
      'Deluxe Room',
      'Premium Suite',
      'Family Suite',
      'Presidential Suite',
      'Ocean View Room',
    ]
    for (const name of roomNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    const prices = screen.getAllByText(/\$150 \/ per night/i)
    expect(prices).toHaveLength(6)
  })

  it('renders the View more button', () => {
    render(<Rooms />)
    expect(screen.getByRole('button', { name: /View more/i })).toBeInTheDocument()
  })
})
