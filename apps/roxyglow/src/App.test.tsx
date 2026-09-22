import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('RoxyGlow — Luxury Hotel & Resort')
  })

  it('renders the navbar and all main sections', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /RoxyGlow/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/More than a hotel/i)).toBeInTheDocument()
    expect(screen.getByText(/Check Availability/i)).toBeInTheDocument()
    expect(screen.getByText(/Special Rooms/i)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to RoxyGlow Hotel/i)).toBeInTheDocument()
    expect(screen.getByText(/RoxyGlow Rooms/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Happy Guest Says/i)).toBeInTheDocument()
    expect(screen.getByText(/We're Most Recommended Hotel/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Restaurant/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })
})
