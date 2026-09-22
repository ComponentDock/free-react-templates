import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('RoxyGlow — Luxury Hotel & Resort')
  })

  it('renders the Navbar', () => {
    render(<App />)
    const brand = screen.getAllByText('RoxyGlow')
    expect(brand.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByText('More than a hotel... an experience')).toBeDefined()
  })

  it('renders the BookingForm', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-in Date')).toBeDefined()
  })

  it('renders the ServicesGrid', () => {
    render(<App />)
    expect(screen.getByText('Special Rooms')).toBeDefined()
  })

  it('renders the WelcomeServices', () => {
    render(<App />)
    expect(screen.getByText('Welcome to RoxyGlow Hotel')).toBeDefined()
  })

  it('renders the Rooms section', () => {
    render(<App />)
    expect(screen.getByText('$120')).toBeDefined()
  })

  it('renders the Testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Sarah Mitchell')).toBeDefined()
  })

  it('renders the VideoHero section', () => {
    render(<App />)
    expect(screen.getByText(/Most Recommended Hotel/)).toBeDefined()
  })

  it('renders the Restaurant section', () => {
    render(<App />)
    expect(screen.getAllByText('Restaurant').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
