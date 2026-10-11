import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HOTELS } from '../data/content'
import { PopularHotels } from './PopularHotels'

describe('PopularHotels', () => {
  it('renders the section heading and every hotel card with a nightly price and booking action', () => {
    const { container } = render(<PopularHotels />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Popular Hotels & Rooms')
    expect(container.querySelectorAll('.listing-card')).toHaveLength(HOTELS.length)
    expect(screen.getAllByText('$40')).toHaveLength(HOTELS.length)
    expect(screen.getAllByText('/night')).toHaveLength(HOTELS.length)
    expect(screen.getAllByText('Book Now')).toHaveLength(HOTELS.length)
    expect(screen.getAllByText('Miami, Fl')).toHaveLength(HOTELS.length)
    expect(screen.getAllByText('Hotel, Italy')).toHaveLength(HOTELS.length)
  })

  it('omits the duration chip used by tour packages', () => {
    const { container } = render(<PopularHotels />)
    expect(container.querySelectorAll('.days-chip')).toHaveLength(0)
  })
})
