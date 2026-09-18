import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major section headings', () => {
    render(<App />)
    // Hero
    expect(screen.getByRole('heading', { name: /never limit yourself/i })).toBeInTheDocument()
    // Intro
    expect(screen.getByRole('heading', { name: 'Aerobics Program' })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /about prowess/i })).toBeInTheDocument()
    // Quote (blockquote, not heading)
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
    // CTA
    expect(
      screen.getByRole('heading', {
        name: /start your fitness journey today/i,
      }),
    ).toBeInTheDocument()
    // Programs
    expect(screen.getByRole('heading', { name: /our programs/i })).toBeInTheDocument()
    // Pricing
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument()
    // Contact
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Prowess — Gym & Fitness Template')
  })
})
