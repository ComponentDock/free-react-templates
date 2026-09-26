import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shotwise — Photographer Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Verify all major sections are present via unique headings
    expect(screen.getAllByRole('heading', { name: /Shotwise/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('heading', { name: /Reasons To/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /Portrait Photography/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Send Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Subscribe for our/i })).toBeInTheDocument()
  })
})
