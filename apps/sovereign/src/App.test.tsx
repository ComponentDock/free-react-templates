import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sovereign — Hotel Booking')
  })

  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByText('Sovereign')).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // About
    expect(screen.getByText('About Our Hotel')).toBeInTheDocument()
    // Rooms
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
    // Amenities
    expect(screen.getByText('Hotel Amenities')).toBeInTheDocument()
    // Gallery
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Guest Reviews')).toBeInTheDocument()
    // Booking CTA
    expect(screen.getByText('Book Your Stay Today')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('About Sovereign')).toBeInTheDocument()
  })

  it('renders with correct layout classes', () => {
    const { container } = render(<App />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('flex')
    expect(wrapper.className).toContain('min-h-screen')
    expect(wrapper.className).toContain('flex-col')
  })
})
