import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Belmont — Luxury Hotel Template')

    // Navbar
    expect(screen.getAllByText('Belmont').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText(/Amazing Services, Location & Facilities/i)).toBeInTheDocument()

    // BookingBar
    expect(screen.getByLabelText(/arrival date/i)).toBeInTheDocument()

    // Intro
    expect(screen.getByRole('heading', { name: /Relax in our Hotel/i })).toBeInTheDocument()

    // BigRoom
    expect(screen.getByText(/Rooms with private swimming pool/i)).toBeInTheDocument()

    // Rooms
    expect(screen.getByRole('heading', { name: /Our Rooms/i })).toBeInTheDocument()

    // Gallery
    expect(screen.getByRole('heading', { name: /Our Gallery/i })).toBeInTheDocument()

    // Newsletter
    expect(screen.getByText(/Our Newsletter/i)).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
