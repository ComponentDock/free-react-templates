import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Amenities } from './Amenities'

describe('Amenities', () => {
  it('renders the section heading and all eight amenity cards', () => {
    render(<Amenities />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Everything You Need' }),
    ).toBeInTheDocument()

    for (const amenity of [
      'High-Speed WiFi',
      'Free Coffee & Snacks',
      '24/7 Access',
      'Phone Booths',
      'Event Space',
      'Bike Storage',
      'Showers',
      'Printing',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: amenity })).toBeInTheDocument()
    }
  })

  it('describes each amenity with a short blurb', () => {
    render(<Amenities />)

    expect(screen.getByText(/symmetrical gigabit fiber/i)).toBeInTheDocument()
    expect(screen.getByText(/barista-grade espresso/i)).toBeInTheDocument()
    expect(screen.getByText(/badge works around the clock/i)).toBeInTheDocument()
  })
})
