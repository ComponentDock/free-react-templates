import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar — "Batterly" appears in nav and footer
    expect(screen.getAllByText('Batterly').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText(/Delicious Cake For Everyone/)).toBeDefined()
    // Popular Items
    expect(screen.getByText('Our Exclusive Cakes')).toBeDefined()
    // About
    expect(screen.getByText('A Simple Way to Eating Delicious')).toBeDefined()
    // Services
    expect(screen.getByText('Quality is Our First Priority')).toBeDefined()
    // Testimonials
    expect(screen.getByText('What Customers Say')).toBeDefined()
    // Footer
    expect(screen.getByText('Component Dock')).toBeDefined()
  })

  it('has semantic HTML structure', () => {
    const { container } = render(<App />)
    expect(container.querySelector('header')).toBeDefined()
    expect(container.querySelector('main')).toBeDefined()
    expect(container.querySelector('footer')).toBeDefined()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Batterly — Bakery & Cake Shop')
  })
})
