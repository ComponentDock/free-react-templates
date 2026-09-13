import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Sonance — Podcast Website Template')
  })

  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByText('Sonance').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    // Podcast section
    expect(screen.getByRole('heading', { level: 2, name: /live & upcoming/i })).toBeInTheDocument()

    // CallToAction
    expect(screen.getByRole('heading', { level: 2, name: /support the show/i })).toBeInTheDocument()

    // Episodes
    expect(screen.getByRole('heading', { level: 2, name: /latest episodes/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Sign up for our newsletter!')).toBeInTheDocument()
  })
})
