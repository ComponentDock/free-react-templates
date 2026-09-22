import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Amenities } from './Amenities'

describe('Amenities', () => {
  it('renders the heading and subheading', () => {
    render(<Amenities />)
    expect(screen.getByRole('heading', { name: /Our Amenities/i })).toBeInTheDocument()
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
  })

  it('renders all six amenity items', () => {
    render(<Amenities />)
    for (const title of [
      'Infinity Pool',
      'Full-Service Spa',
      'Fine Dining',
      'Fitness Center',
      'Private Beach',
      'Concierge',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders description text for each amenity', () => {
    render(<Amenities />)
    expect(screen.getByText(/stunning infinity-edge pool/i)).toBeInTheDocument()
    expect(screen.getByText(/rejuvenating treatments/i)).toBeInTheDocument()
    expect(screen.getByText(/exquisite cuisine/i)).toBeInTheDocument()
    expect(screen.getByText(/State-of-the-art equipment/i)).toBeInTheDocument()
    expect(screen.getByText(/Exclusive beach access/i)).toBeInTheDocument()
    expect(screen.getByText(/dedicated concierge team/i)).toBeInTheDocument()
  })
})
