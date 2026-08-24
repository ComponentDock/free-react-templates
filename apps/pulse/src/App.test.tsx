import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pulse — Digital Agency Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(
      screen.getByRole('heading', { level: 1, name: /We Are Digital Agency/i }),
    ).toBeInTheDocument()
    // About
    expect(
      screen.getByRole('heading', { name: /We have experience for your project/i }),
    ).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: /Our Exclusive Services/i })).toBeInTheDocument()
    // Portfolio
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()
    // Team
    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()
    // Pricing
    expect(screen.getByRole('heading', { name: /Find Plan that is Right/i })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
    // CTA Banner
    expect(screen.getByText('Prepare For Takeoff')).toBeInTheDocument()
    // Footer
    const pulseLinks = screen.getAllByRole('link', { name: 'Pulse.' })
    expect(pulseLinks.length).toBeGreaterThanOrEqual(1)
  })
})
