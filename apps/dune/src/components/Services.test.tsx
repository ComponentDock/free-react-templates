import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Popular Services/i })).toBeInTheDocument()
    expect(screen.getByText('Hotel Booking')).toBeInTheDocument()
    expect(screen.getByText('Flight Booking')).toBeInTheDocument()
    expect(screen.getByText('Destination Booking')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Find and book the perfect accommodation/i)).toBeInTheDocument()
  })
})
