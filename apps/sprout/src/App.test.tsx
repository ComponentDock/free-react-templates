import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mock IntersectionObserver for Counter component
beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
      unobserve() {}
    },
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

const { App } = await import('./App')

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar brand
    expect(screen.getAllByText('Sprout').length).toBeGreaterThan(0)
    // Hero heading
    expect(screen.getByRole('heading', { name: /helping grow your faith/i })).toBeInTheDocument()
    // Services heading
    expect(screen.getByRole('heading', { name: /our ministries/i })).toBeInTheDocument()
    // Counter heading
    expect(screen.getByRole('heading', { name: /sprout church/i })).toBeInTheDocument()
    // Testimony heading
    expect(screen.getByRole('heading', { name: /testimonials/i })).toBeInTheDocument()
    // Blog heading
    expect(screen.getByRole('heading', { name: /latest blog posts/i })).toBeInTheDocument()
    // Gallery heading
    expect(screen.getByRole('heading', { name: /our gallery/i })).toBeInTheDocument()
    // Newsletter heading
    expect(screen.getByRole('heading', { name: /newsletter/i })).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sprout — Church & Community Template')
  })
})
