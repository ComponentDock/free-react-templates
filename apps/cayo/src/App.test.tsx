import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Cayo — Hotel Reservation Template')
  })

  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getAllByText('Cayo').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('Welcome to Cayo Hotel')).toBeInTheDocument()
    expect(screen.getByText('A Perfect Place To Stay')).toBeInTheDocument()

    // Booking Form
    expect(screen.getByText('Reserve A Perfect Room')).toBeInTheDocument()

    // Services
    expect(screen.getAllByText('Hotel Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('24/7 Front Desk')).toBeInTheDocument()

    // Rooms
    expect(screen.getByText('Book A Room')).toBeInTheDocument()

    // Restaurant
    expect(screen.getByText('Our Restaurants')).toBeInTheDocument()

    // Counter
    expect(screen.getByText('Hotel Branches')).toBeInTheDocument()

    // About
    expect(screen.getByText('Watch Our Video')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('What Our Guests Say')).toBeInTheDocument()

    // Blog
    expect(screen.getAllByText('Our Blog').length).toBeGreaterThanOrEqual(1)

    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
