import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the brand name', () => {
    render(<App />)
    expect(screen.getAllByText('Rivet').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Creating A Brighter Future/ }),
    ).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('House Renovation')).toBeInTheDocument()
  })

  it('renders the recent works section', () => {
    render(<App />)
    expect(screen.getByText('Modern Office Complex')).toBeInTheDocument()
  })

  it('renders the company news section', () => {
    render(<App />)
    expect(screen.getByText('Company News')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })
})
