import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByRole('link', { name: /high/i })).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { name: /rent a car/i })).toBeInTheDocument()
    // Search filter
    expect(screen.getByLabelText('Car type')).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    // Vehicle carousel
    expect(screen.getByRole('heading', { name: /Choose Your Car/i })).toBeInTheDocument()
    // How it works
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /Choose A Perfect Car/i })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Highway — Car Rental Template')
  })
})
