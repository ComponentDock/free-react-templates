import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Curemark').length).toBeGreaterThan(0)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the HeroBanner', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /best medical services/i }),
    ).toBeInTheDocument()
  })

  it('renders the InfoBoxes', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /opening hours/i })).toBeInTheDocument()
  })

  it('renders the Departments', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /our departments/i })).toBeInTheDocument()
  })

  it('renders the Testimonials', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /patient/i })).toBeInTheDocument()
  })

  it('renders the News', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /the news/i })).toBeInTheDocument()
  })

  it('renders the Newsletter', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /subscribe to our newsletter/i }),
    ).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
