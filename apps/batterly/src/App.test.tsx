import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

// Mock IntersectionObserver for About progress bars
beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
    },
  )
})

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Batterly').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText(/Making your life sweeter/)).toBeInTheDocument()
    // About
    expect(screen.getByText('About Cake shop')).toBeInTheDocument()
    // Categories
    expect(screen.getAllByText('Cupcake').length).toBeGreaterThanOrEqual(1)
    // Products
    expect(screen.getByText('Cake & Pastry Collection')).toBeInTheDocument()
    // Class section
    expect(screen.getByText('Class cakes')).toBeInTheDocument()
    // Team
    expect(screen.getByText('Sweet Baker')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Our client say')).toBeInTheDocument()
    // Instagram
    expect(screen.getByText(/Sweet moments are saved/)).toBeInTheDocument()
    // Map/Contact
    expect(screen.getByText('Brooklyn, NY')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
