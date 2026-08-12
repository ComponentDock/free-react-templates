import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('renders the first facility panel with title, subtitle, features and CTA', () => {
    render(<Facilities />)
    expect(screen.getByRole('heading', { name: 'Luxury Suite Room' })).toBeInTheDocument()
    expect(screen.getByText('From $399')).toBeInTheDocument()
    for (const feature of ['Smart TV', 'High Wi-fii', 'AC', 'Parking', 'Pool']) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Make a Reservation' })).toHaveLength(2)
  })

  it('renders the second facility panel flipped with its own subtitle', () => {
    render(<Facilities />)
    expect(screen.getByRole('heading', { name: 'Infinity Pool' })).toBeInTheDocument()
    expect(screen.getByText('For all our guests')).toBeInTheDocument()
  })

  it('uses seeded placeholder photos for both panels', () => {
    render(<Facilities />)
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('riviera-2'))
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('riviera-3'))
  })
})
