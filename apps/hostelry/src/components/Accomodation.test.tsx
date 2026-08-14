import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Accomodation } from './Accomodation'

describe('Accomodation', () => {
  it('shows the heading, subtitle and four room cards', () => {
    render(<Accomodation />)
    expect(
      screen.getByRole('heading', { name: 'Hotel Accomodation', level: 2 }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Book Now' })).toHaveLength(4)
    for (const name of [
      'Double Deluxe Room',
      'Single Deluxe Room',
      'Honeymoon Suit',
      'Economy Double',
    ]) {
      expect(screen.getByRole('heading', { name, level: 3 })).toBeInTheDocument()
    }
    expect(screen.getByText('$250')).toBeInTheDocument()
    expect(screen.getByText('$750')).toBeInTheDocument()
  })

  it('renders a room image per card', () => {
    const { container } = render(<Accomodation />)
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })
})
