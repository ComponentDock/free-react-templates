import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // TopBar — brand appears multiple times
    expect(screen.getAllByText('Advocat').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // Counter
    expect(screen.getByText('Qualified Lawyers')).toBeInTheDocument()
    // About
    expect(screen.getByText(/80 Years Of Experience/)).toBeInTheDocument()
    // Practice Areas
    expect(screen.getByText(/What We Cover/)).toBeInTheDocument()
    // Case Studies
    expect(screen.getByText(/Recent Case Studies/)).toBeInTheDocument()
    // Testimonials
    expect(screen.getAllByText(/Happy Clients/).length).toBeGreaterThanOrEqual(1)
    // Blog
    expect(screen.getByText(/Recent Blog/)).toBeInTheDocument()
    // Footer — Component Dock link
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Advocat — Law Firm Template')
  })
})
