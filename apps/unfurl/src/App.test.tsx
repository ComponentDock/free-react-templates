import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar — use getAllByText since "Unfurl" appears in navbar, hero, and footer
    expect(screen.getAllByText('Unfurl').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText(/Glenn Chapman Hoyer/)).toBeInTheDocument()

    // Portfolio
    expect(screen.getByText('Portfolio', { selector: 'h2' })).toBeInTheDocument()

    // About
    expect(screen.getByText('About Me')).toBeInTheDocument()

    // Services
    expect(screen.getByText('My Services')).toBeInTheDocument()

    // Skills
    expect(screen.getByText('My Skills')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('My Happy Clients')).toBeInTheDocument()

    // Journal
    expect(screen.getByText('My Journal')).toBeInTheDocument()

    // Contact
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Unfurl — Portfolio & Personal Template')
  })

  it('has dark background class', () => {
    render(<App />)

    const root = document.querySelector('.min-h-screen')
    expect(root).toBeTruthy()
    expect(root?.className).toContain('bg-dark-bg')
  })
})
