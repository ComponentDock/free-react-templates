import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Stave — Music Artist Landing Page')
  })

  it('renders the navbar with Stave branding', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByText('Stave')).toBeInTheDocument()
  })

  it('renders all major sections in order', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Musician')

    // FeaturedTrack
    expect(screen.getByText('Frando Kally')).toBeInTheDocument()

    // About
    expect(screen.getByText('Jack Kalib')).toBeInTheDocument()

    // VideoGallery
    expect(screen.getByText('Summer Concert 2024')).toBeInTheDocument()

    // LatestTracks
    expect(screen.getByRole('heading', { name: 'Latest Tracks' })).toBeInTheDocument()

    // Gallery
    expect(screen.getByRole('heading', { name: 'Image Galleries' })).toBeInTheDocument()

    // ContactCTA
    expect(screen.getByRole('heading', { name: 'Contact For RSVP' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('contains no reference to colorlib', () => {
    const { container } = render(<App />)
    const html = container.innerHTML.toLowerCase()
    expect(html).not.toContain('colorlib')
  })
})
