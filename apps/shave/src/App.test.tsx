import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shave — Barber Shop Landing Page')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('HairStyle is a')
    // Services
    expect(screen.getByRole('heading', { name: /What We Can Do for You/i })).toBeInTheDocument()
    // Gallery
    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()
    // Features
    expect(
      screen.getByRole('heading', { name: /Some Features that Made us Unique/i }),
    ).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /Interior beautifies/i })).toBeInTheDocument()
    // Team
    expect(screen.getByRole('heading', { name: 'Experienced Mentor Team' })).toBeInTheDocument()
    // Pricing
    expect(screen.getByRole('heading', { name: /Choose the Perfect Plan/i })).toBeInTheDocument()
    // Contact
    expect(screen.getByRole('heading', { name: /Just drop us a line/i })).toBeInTheDocument()
  })
})
