import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Fin')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FinPilot — Business Consulting Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    // Navbar has 'Fin' logo text; Footer has 'FinPilot'
    expect(screen.getByText('Fin')).toBeInTheDocument()
    // Hero
    expect(screen.getByText(/Grow Big with/)).toBeInTheDocument()
    // Services
    expect(screen.getByText('Explore Our Solutions')).toBeInTheDocument()
    // About
    expect(screen.getByText('The Largest Business Expert')).toBeInTheDocument()
    // Counters
    expect(screen.getByText('520+')).toBeInTheDocument()
    // Gallery
    expect(screen.getByText('Our Recent Works')).toBeInTheDocument()
    // Features
    expect(screen.getByText('Unlimited Control')).toBeInTheDocument()
    // Financial Solution
    expect(screen.getByText(/Gives you the best Financial solution/)).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    // CTA
    expect(screen.getByText('Do you Have any Project?')).toBeInTheDocument()
    // Footer Component Dock link
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
