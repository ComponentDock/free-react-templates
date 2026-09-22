import { render, screen } from '@testing-library/react'
import { App } from './App'
import { FOOTER } from './data'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Regent — Hotel & Resort Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByText('Regent')).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // Rooms
    expect(screen.getByRole('heading', { level: 2, name: 'Our Rooms' })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    // Features
    expect(screen.getByRole('heading', { level: 2, name: 'Hotel Features' })).toBeInTheDocument()
    // Promo
    expect(screen.getByText(/Summer Special/)).toBeInTheDocument()
    // Gallery
    expect(screen.getByRole('heading', { level: 2, name: 'Our Gallery' })).toBeInTheDocument()
    // Events
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    // Footer
    expect(screen.getByText(FOOTER.copyright)).toBeInTheDocument()
  })
})
