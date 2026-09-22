import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByText('VitalBlend').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1, name: /health is wealth/i })).toBeInTheDocument()

    // About
    expect(
      screen.getByRole('heading', { level: 2, name: /create a healthy life/i }),
    ).toBeInTheDocument()

    // CTA Banner
    expect(
      screen.getByRole('heading', { level: 2, name: /happy mind healthy life/i }),
    ).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: 'Physical Activity' })).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: 'Latest Blog' })).toBeInTheDocument()

    // Satisfaction
    expect(
      screen.getByRole('heading', { level: 2, name: /100% satisfaction/i }),
    ).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('VitalBlend — Health & Wellness Template')
  })
})
