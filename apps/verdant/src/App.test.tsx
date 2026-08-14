import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every section in the reference order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((h) => h.textContent)
    // Section order per the live preview DOM: hero → features → site-half 1
    // → site-half 2 → products → counters → testimonials → blog → CTA
    // (the navbar brand is a link, covered by the Navbar tests)
    const order = [
      'Welcome to Verdant',
      'Love Us Verdant',
      'Clean Design',
      'Free Website Templates',
      'Share Before You Download',
      'Free Templates By Verdant',
      'Testimonials',
      'Recent Blog Posts',
      'Try For Your Next Project',
    ]
    const positions = order.map((text) => headings.findIndex((h) => h?.includes(text)))
    expect(positions.every((p) => p >= 0)).toBe(true)
    for (let i = 1; i < positions.length; i++) {
      expect(positions[i]!).toBeGreaterThan(positions[i - 1]!)
    }
  })

  it('includes the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
  })
})
