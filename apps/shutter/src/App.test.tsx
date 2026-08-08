import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shutter — Photographer Portfolio Template')
  })

  it('composes every section with landmarks and a skip link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Capturing Moments That Last Forever/i,
    )
    expect(screen.getByRole('heading', { name: 'Selected Work' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Elena' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services & Packages' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Edit Makes the Shot' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Kind Words' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's Create Together" })).toBeInTheDocument()
  })
})
