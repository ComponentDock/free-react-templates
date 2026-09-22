import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Hibiscus — Hotel Reservation Template')
  })

  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getAllByText('HIBISCUS').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('Welcome Hibiscus')).toBeInTheDocument()
    expect(screen.getByText(/Experience the greatest for your holidays/)).toBeInTheDocument()

    // About
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Welcome Hibiscus Hotel In Street/)).toBeInTheDocument()

    // Services
    expect(screen.getByText('Hotel Services')).toBeInTheDocument()
    expect(screen.getAllByText('Free Wi-Fi').length).toBeGreaterThanOrEqual(1)

    // Rooms
    expect(screen.getByText('Hotel Rooms')).toBeInTheDocument()

    // Choose Us
    expect(screen.getByText(/Why You Should Choose/)).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('What Our Guests Say')).toBeInTheDocument()

    // Gallery
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Our Blog')).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
