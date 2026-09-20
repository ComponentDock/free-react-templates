import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Venue } from './Venue'

describe('Venue', () => {
  it('renders the section title', () => {
    render(<Venue />)
    expect(screen.getByRole('heading', { level: 3, name: 'Venue' })).toBeInTheDocument()
  })

  it('renders all four venue cards', () => {
    render(<Venue />)
    expect(screen.getByText('Transport')).toBeInTheDocument()
    expect(screen.getByText('Hotel')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    // Venue heading is in the section title, not just the card
    const venueElements = screen.getAllByText('Venue')
    expect(venueElements.length).toBeGreaterThanOrEqual(2) // section title + card
  })

  it('renders the Explore subtitle', () => {
    render(<Venue />)
    expect(screen.getByText('Explore')).toBeInTheDocument()
  })
})
