import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // TopBar
    expect(screen.getByText('Top destinations')).toBeInTheDocument()
    // Navbar (use getAllByText since "Wanderly" appears in Navbar + Banner)
    expect(screen.getAllByText('Wanderly').length).toBeGreaterThanOrEqual(1)
    // Banner
    expect(screen.getByText('Discover Now')).toBeInTheDocument()
    // BookingSection
    expect(screen.getByRole('tab', { name: 'Hotels' })).toBeInTheDocument()
    // TopPlaces
    expect(screen.getByText('Top Places to visit')).toBeInTheDocument()
    // FeaturedEvent
    expect(screen.getByText('Maldives — Asia')).toBeInTheDocument()
    // HotelList
    expect(screen.getByText('Top Hotels & Restaurants')).toBeInTheDocument()
    // ClientReviews
    expect(screen.getByText('What they said')).toBeInTheDocument()
    // BestServices
    expect(screen.getByText('We offered best services')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Wanderly — Travel Agency Template')
  })
})
