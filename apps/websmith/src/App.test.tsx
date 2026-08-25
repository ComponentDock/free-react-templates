import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Websmith — Digital Agency Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(
      screen.getByRole('heading', { level: 1, name: /Websmith Web Studio/i }),
    ).toBeInTheDocument()

    // About
    expect(screen.getByRole('heading', { name: /We Are Expert In Web/i })).toBeInTheDocument()

    // Team
    expect(screen.getByRole('heading', { name: /Creative Minds/i })).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: /Our Expertise/i })).toBeInTheDocument()

    // Portfolio
    expect(screen.getByRole('heading', { name: /Our Portfolio/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: /Our Client Sayings/i })).toBeInTheDocument()

    // Contact
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
