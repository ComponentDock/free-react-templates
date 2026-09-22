import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    // TopBar
    expect(screen.getByText('Phone no:')).toBeInTheDocument()

    // Navbar
    expect(screen.getByText('Getaway')).toBeInTheDocument()
    expect(screen.getByText('Pad')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Rent an apartment for your vacation',
    )

    // Booking
    expect(screen.getByText('Book your apartment')).toBeInTheDocument()

    // Services
    expect(screen.getAllByText('Map Direction').length).toBeGreaterThanOrEqual(1)

    // Rooms
    expect(screen.getAllByText('Apartment Room').length).toBeGreaterThanOrEqual(1)

    // Testimonials
    expect(screen.getByText('Happy Clients & Feedbacks')).toBeInTheDocument()

    // CTA
    expect(screen.getByText('Ready to get started')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Latest news from our blog')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
