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
    expect(document.title).toBe('Revolve — Full-Screen Carousel Template')
  })

  it('renders the navbar with site name', () => {
    render(<App />)
    expect(screen.getAllByText(/Revolve/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the carousel with the first slide heading', () => {
    render(<App />)
    expect(screen.getByText('Explore the World')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
