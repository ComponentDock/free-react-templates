import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Stratagem — Business Consulting Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /Big Opportunity for/i })).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: /What we Do\?/i })).toBeInTheDocument()

    // About
    expect(screen.getByRole('heading', { name: /Why our Consulting\?/i })).toBeInTheDocument()

    // Case Study
    expect(screen.getByRole('heading', { name: 'Case Study' })).toBeInTheDocument()

    // FAQ
    expect(screen.getByRole('heading', { name: /Frequently ask/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()

    // Team
    expect(screen.getByRole('heading', { name: 'Expert Team' })).toBeInTheDocument()

    // Contact
    expect(screen.getByRole('heading', { name: 'Get Free Quote' })).toBeInTheDocument()

    // Info CTA
    expect(
      screen.getByRole('heading', { name: /For Any Information Call Us/i }),
    ).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
