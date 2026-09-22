import { render, screen } from '@testing-library/react'
import { App } from './App'
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
    expect(document.title).toBe('GrandStay — Hotel & Hospitality Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByText('GrandStay')).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // Room Availability
    expect(screen.getByRole('heading', { name: 'Junior Suite' })).toBeInTheDocument()
    // Facilities
    expect(screen.getByRole('heading', { level: 2, name: 'Facilities' })).toBeInTheDocument()
    // Guestbook
    expect(screen.getByRole('heading', { level: 2, name: 'Guestbook' })).toBeInTheDocument()
    // Instagram
    expect(screen.getByText(/Follow us on Instagram/)).toBeInTheDocument()
    // Footer
    expect(screen.getByText(FOOTER_COPY)).toBeInTheDocument()
  })
})

const FOOTER_COPY = '© 2026 GrandStay — All rights reserved'
