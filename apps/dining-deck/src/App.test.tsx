import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByRole('link', { name: 'DiningDeck' }).length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText('Premium')).toBeInTheDocument()
    // About section heading (appears in nav too, so use getAllByText)
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    // Stats
    expect(screen.getByText('15+')).toBeInTheDocument()
    // Features
    expect(screen.getByText('Our Features')).toBeInTheDocument()
    // Reservation
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('DiningDeck — Restaurant Landing Template')
  })
})
