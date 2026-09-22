import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Amenities } from './Amenities'

describe('Amenities', () => {
  it('renders section heading', () => {
    render(<Amenities />)
    expect(screen.getByText('Hotel Amenities')).toBeInTheDocument()
  })

  it('renders all 6 amenity items', () => {
    render(<Amenities />)
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
    expect(screen.getByText('Spa & Wellness')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Fitness Center')).toBeInTheDocument()
    expect(screen.getByText('Free Wi-Fi')).toBeInTheDocument()
    expect(screen.getByText('Airport Transfer')).toBeInTheDocument()
  })

  it('displays amenity descriptions', () => {
    render(<Amenities />)
    expect(screen.getByText('Heated indoor and outdoor pools')).toBeInTheDocument()
    expect(screen.getByText('Full-service spa and wellness center')).toBeInTheDocument()
  })
})
