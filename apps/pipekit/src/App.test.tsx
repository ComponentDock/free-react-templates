import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    // Mock IntersectionObserver for Stats component
    vi.stubGlobal(
      'IntersectionObserver',
      class MockObserver implements IntersectionObserver {
        root = null
        rootMargin = ''
        thresholds = [0]
        scrollMargin = ''
        observe = vi.fn()
        disconnect = vi.fn()
        unobserve = vi.fn()
        takeRecords = vi.fn(() => [])
      },
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Pipekit — Creative Agency Template')
  })

  it('renders all sections', () => {
    render(<App />)
    // Navbar + Footer logo
    expect(screen.getAllByRole('link', { name: 'Pipekit' }).length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByRole('heading', { name: /We Are Creative Agency/i })).toBeInTheDocument()
    // About
    expect(
      screen.getByRole('heading', { name: /Crafting Digital Experiences/i }),
    ).toBeInTheDocument()
    // Stats
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: /What We Do Best/i })).toBeInTheDocument()
    // Portfolio
    expect(screen.getByRole('heading', { name: /Featured Work/i })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText(/Pipekit transformed our brand/i)).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
