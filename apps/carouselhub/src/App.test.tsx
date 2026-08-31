import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('CarouselHub — Carousel Gallery Template')
  })

  it('renders the navbar with site name', () => {
    render(<App />)
    expect(screen.getAllByText(/CarouselHub/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the carousel with the first slide heading', () => {
    render(<App />)
    expect(screen.getByText('Creative Portfolios')).toBeInTheDocument()
  })

  it('renders the featured grid section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /featured collections/i }),
    ).toBeInTheDocument()
  })

  it('renders the slider section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /explore our work/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
