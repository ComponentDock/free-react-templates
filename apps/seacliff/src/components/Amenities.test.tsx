import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Amenities } from './Amenities'

describe('Amenities', () => {
  it('renders the heading and six amenity cards', () => {
    render(<Amenities />)

    expect(screen.getByRole('heading', { name: 'World-Class Amenities' })).toBeInTheDocument()

    for (const name of [
      'Infinity Pool',
      'Full-Service Spa',
      'Fine Dining',
      'Fitness Center',
      'Private Beach',
      'Concierge',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })
})
