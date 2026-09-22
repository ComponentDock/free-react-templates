import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Grandeur — Luxury Hotel Template')
  })

  it('renders the Navbar', () => {
    render(<App />)
    // "Grandeur" appears in both Navbar and Hero — use getAllByText
    const grandeur = screen.getAllByText('Grandeur')
    expect(grandeur.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByText('Welcome to')).toBeDefined()
  })

  it('renders the BookingForm', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-in date')).toBeDefined()
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByText(/About Us · Our History/)).toBeDefined()
  })

  it('renders the Rooms section', () => {
    render(<App />)
    expect(screen.getByText('$250')).toBeDefined()
  })

  it('renders the Testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Fanny Spencer')).toBeDefined()
  })

  it('renders the BlogPosts section', () => {
    render(<App />)
    expect(screen.getByText(/Discover Hidden Gems/)).toBeDefined()
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
