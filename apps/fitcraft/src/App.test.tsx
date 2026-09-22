import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Fitcraft — Gym & Fitness Landing Template')

    // Header
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()

    // Features
    expect(screen.getByText(/push your limits forward/i)).toBeInTheDocument()

    // Classes
    expect(screen.getByText(/what we can offer/i)).toBeInTheDocument()

    // Banner
    expect(screen.getByText(/registration now to get more deals/i)).toBeInTheDocument()

    // Pricing
    expect(screen.getByText(/choose your plan/i)).toBeInTheDocument()

    // Gallery
    expect(screen.getByText('Strength Zone')).toBeInTheDocument()

    // Team
    expect(screen.getByText(/meet our expert trainers/i)).toBeInTheDocument()

    // Contact
    expect(screen.getByText(/333 Middle Winchendon Rd/)).toBeInTheDocument()

    // Footer
    const componentDockLink = screen.getByRole('link', { name: /component dock/i })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
