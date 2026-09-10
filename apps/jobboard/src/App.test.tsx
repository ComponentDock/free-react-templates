import { render, screen } from '@testing-library/react'
import { App } from './App'

beforeEach(() => {
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe = vi.fn()
    disconnect = vi.fn()
    unobserve = vi.fn()
  } as unknown as typeof IntersectionObserver
})

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    // Navbar + Footer both say "JobBoard"
    expect(screen.getAllByText('JobBoard').length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByText('The Easiest Way To Get Your Dream Job')).toBeInTheDocument()
    // Trending Keywords
    expect(screen.getByText('Trending Keywords:')).toBeInTheDocument()
    // Stats
    expect(screen.getByRole('heading', { name: 'JobBoard Site Stats' })).toBeInTheDocument()
    // Job Listings
    expect(screen.getByRole('heading', { name: /43,167/ })).toBeInTheDocument()
    // CTA
    expect(screen.getByText('Looking For A Job?')).toBeInTheDocument()
    // Company logos
    expect(screen.getByText(/Company We/)).toBeInTheDocument()
    // Mobile App CTA
    expect(screen.getByText('Get The Mobile Apps')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('sets page title', () => {
    render(<App />)
    expect(document.title).toBe('JobBoard — Find Your Dream Job')
  })
})
