import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
    },
  )
})

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText(/Nectar/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Request A Quote/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/We Provide The/)).toBeInTheDocument()
    expect(screen.getByText(/We Are Highly Recommendable/)).toBeInTheDocument()
    expect(screen.getAllByText(/Experience Great Services/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Meet Our Experts/)).toBeInTheDocument()
    expect(screen.getByText(/Our Projects/)).toBeInTheDocument()
    expect(screen.getByText(/Satisfied Customer/)).toBeInTheDocument()
    expect(screen.getAllByText(/Recent Blog/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Nectar — Construction Company Template')
  })
})
