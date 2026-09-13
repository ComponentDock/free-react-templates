import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByText('Seaview', { selector: 'a' })).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /Book Your Stay/i })).toBeInTheDocument()

    // BookingForm
    expect(screen.getByPlaceholderText(/Check-in/i)).toBeInTheDocument()

    // Intro
    expect(
      screen.getByRole('heading', { name: /Amazing Hotel in front of the Sea/i }),
    ).toBeInTheDocument()

    // RoomsShowcase
    expect(screen.getByRole('heading', { name: /Luxury Double Suite/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Luxury Single Room/i })).toBeInTheDocument()

    // Discover
    expect(screen.getByRole('heading', { name: /Discover Seaview Hotel/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/More templates at/i)).toBeInTheDocument()
  })
})
