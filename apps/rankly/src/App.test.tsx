import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Rankly — SEO Analysis Landing')
  })

  it('renders banner, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    // TopBar
    expect(screen.getByText('+1 231 231 209')).toBeInTheDocument()
    // Navbar
    expect(screen.getByText(/Rankly/)).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { name: /SEO Analysis/i })).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: /Device Related Services/i })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /Strategy Drives Growth/i })).toBeInTheDocument()
    // Features
    expect(
      screen.getByRole('heading', { name: /Ranking Improvement Solutions/i }),
    ).toBeInTheDocument()
    // Pricing
    expect(screen.getByRole('heading', { name: /Choose the Perfect Plan/i })).toBeInTheDocument()
    // Team
    expect(screen.getByRole('heading', { name: /About Our Creative Team/i })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: /Latest From Our Blog/i })).toBeInTheDocument()
    // Contact
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
