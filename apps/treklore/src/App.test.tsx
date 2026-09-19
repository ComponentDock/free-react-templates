import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Treklore — Travel & Tourism Template')
  })

  it('renders all major sections', () => {
    render(<App />)

    // Header
    expect(screen.getByText('Treklore')).toBeInTheDocument()

    // Hero
    expect(screen.getByText('Let us take you away')).toBeInTheDocument()

    // Search form
    expect(screen.getByText('Search for your trip')).toBeInTheDocument()

    // Intro features
    expect(screen.getByText('Top Destinations')).toBeInTheDocument()
    expect(screen.getByText('The Best Prices')).toBeInTheDocument()
    expect(screen.getByText('Amazing Services')).toBeInTheDocument()

    // Popular destinations
    expect(screen.getByText('Popular Destinations')).toBeInTheDocument()

    // Why choose us
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()

    // Featured tours
    expect(screen.getByText('Featured Tours')).toBeInTheDocument()

    // Testimonials
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)

    // Instagram feed
    expect(screen.getByText('@Treklore on Instagram')).toBeInTheDocument()

    // Latest news
    expect(screen.getByText('Latest News')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('renders as a single page with main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getAllByRole('contentinfo').length).toBeGreaterThanOrEqual(1)
  })
})
