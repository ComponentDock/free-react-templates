import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { App } from './App'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor() {}
      observe() {}
      disconnect() {}
      unobserve() {}
    },
  )
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Warehaus').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Best Sellers')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
